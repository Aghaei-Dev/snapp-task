import React from 'react'
import { Search, PassengersList, Loading, Recently } from '../components'
import styled from '@emotion/styled'
import { useGlobalContext } from '../context'
export default function Home() {
  const { loading, history } = useGlobalContext()
  return (
    <Wrapper className='fixed-width'>
      <Search />
      <h1>contact list</h1>
      <Recently list={history} />
      {loading ? <Loading color='#10B981' /> : <PassengersList />}
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '3rem',
  padding: '3rem 0',

  h1: {
    fontSize: '3rem',
    color: 'var(--text-800)',
  },
}))
