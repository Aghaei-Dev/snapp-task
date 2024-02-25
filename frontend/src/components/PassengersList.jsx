import React from 'react'
import { useGlobalContext } from '../context'
import { SinglePassenger } from './'
import styled from '@emotion/styled'

export default function PassengersList() {
  const { passengers } = useGlobalContext()
  return (
    <Wrapper>
      {passengers.length > 0 ? (
        passengers.map((item) => {
          return <SinglePassenger {...item} key={item.id} />
        })
      ) : (
        <h1>nothing to show </h1>
      )}
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem ',
  width: '100%',
  maxWidth: '500px',
}))
