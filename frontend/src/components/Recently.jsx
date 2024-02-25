import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { nullImg } from '../assets/img'
export default function Recently({ list }) {
  return (
    <>
      {list.length > 0 ? (
        <Wrapper className='fixed-width'>
          {list.map((item) => {
            return (
              <Link to={`contact/${item.id}`} key={item.id}>
                <img src={item.avatar || nullImg} alt='' />
              </Link>
            )
          })}
        </Wrapper>
      ) : (
        <h2>nothing to show</h2>
      )}
    </>
  )
}

const Wrapper = styled('section')(() => ({
  maxWidth: '500px',
  width: '100%',
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  a: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    background: 'var(--text-100)',
    display: 'grid',
    placeItems: 'center',
    img: {
      borderRadius: '50%',
    },
  },
}))
