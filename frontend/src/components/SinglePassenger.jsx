import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import { nullImg } from '../assets/img'
export default function SinglePassenger({
  first_name,
  last_name,
  phone,
  address,
  avatar,
  id,
}) {
  const { updateHistory } = useGlobalContext()
  return (
    <Wrapper
      to={`contact/${id}`}
      onClick={() =>
        updateHistory({ first_name, last_name, phone, address, avatar, id })
      }
    >
      <div className='desc'>
        <h2> {first_name}</h2>
        <h2> {last_name}</h2>
        <p> {phone}</p>
        <p> {address ? address : 'far far away'}</p>
      </div>
      <img src={avatar || nullImg} alt={first_name} />
    </Wrapper>
  )
}

const Wrapper = styled(Link)(() => ({
  background: 'var(--text-50)',
  padding: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 150px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  borderRadius: '8px',
  transition: '.3s all',
  maxHeight: '150px',
  '.desc': {
    alignSelf: 'end',
    height: '100%',
  },
  ' h2 , p': {
    color: 'var(--text-600)',
  },
  img: {
    justifySelf: 'end',
    width: '120px',
    background: 'var(--text-200)',
    borderRadius: '8px',
  },
  ':hover': {
    background: 'var(--text-100)',
  },
}))
