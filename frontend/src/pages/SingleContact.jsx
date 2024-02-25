import React, { useEffect, useState } from 'react'
import { Loading } from '../components'
import { Link, useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { nullImg } from '../assets/img'
export default function SingleContact() {
  const [loading, setLoading] = useState(true)
  const [passenger, setPassenger] = useState([])

  const { id } = useParams()

  const fetchPassengers = async () => {
    setLoading(true)
    if (id) {
      const response = await fetch(` http://localhost:1337/passenger/${id}`)
      const data = await response.json()

      setPassenger(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPassengers()
  }, [])

  if (loading) {
    return <Loading />
  }

  const {
    avatar,
    first_name,
    address,
    last_name,
    telegram,
    phone,
    email,
    gender,
    note,
    company,
  } = passenger
  return (
    <Wrapper className='fixed-width'>
      <article>
        <img src={avatar || nullImg} alt={first_name} />
        <h2> first_name : {first_name || 'john '}</h2>
        <h2>last_name : {last_name || 'Doe'}</h2>
        <h2>address : {address || 'far far away'}</h2>
        <h2>telegram ; {telegram || '@john-Dow'}</h2>
        <h2>phone : {phone || '121212'}</h2>
        <h2>email : {email || 'johnDoe@yahoo'}</h2>
        <h2>gender : {gender || 'non'}</h2>
        <h2>note : {note || 'please enter a message ! not null'}</h2>
        <h2>company : {company || 'a killer has not a company'}</h2>
        <Link to='/'>back</Link>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  padding: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  h2: {
    textAlign: 'end',
  },
  img: {
    background: 'var(--text-100)',
    borderRadius: '50%',
  },
}))
