import React, { useCallback, useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import styled from '@emotion/styled'
import { useDebounce } from '../hook'

export default function Search() {
  const { setLoading, setPassengers, passengers } = useGlobalContext()
  const [query, setQuery] = useState('')

  const filterAndFetchPassengers = useDebounce(
    useCallback(async () => {
      setLoading(true)
      try {
        const [first_name, last_name, phone] = await Promise.all([
          fetch(
            `http://localhost:1337/passenger/?where={"first_name":{"contains":"${query}"}}`
          ),
          fetch(
            `http://localhost:1337/passenger/?where={"last_name":{"contains":"${query}"}}`
          ),
          fetch(
            `http://localhost:1337/passenger/?where={"phone":{"contains":"${query}"}}`
          ),
        ])

        const { items: byFirstName } = await first_name.json()
        const { items: byLastName } = await last_name.json()
        const { items: byPhone } = await phone.json()
        const mainArray = [...byFirstName, ...byLastName, ...byPhone]
        const arr = new Set(mainArray.map(JSON.stringify))

        const filteredItems = Array.from(arr).map(JSON.parse)
        console.log(filteredItems)
        const beforeThousand = filteredItems.filter((item) => item.id <= 1000)

        setPassengers(beforeThousand)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }, [query]),
    1000
  )

  useEffect(() => {
    if (query) {
      filterAndFetchPassengers()
    }
  }, [query])
  console.log(passengers)
  return (
    <Input
      type='text'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}

const Input = styled('input')(() => ({
  textTransform: 'none',
  width: '100%',
  maxWidth: '500px',
  fontSize: '2rem',
  border: '2px solid var(--text-200)',
  borderRadius: '8px',
  padding: '.5rem ',
  textAlign: 'left',
}))
