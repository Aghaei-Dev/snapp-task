import React from 'react'
import styled from '@emotion/styled'
import { iconOne } from '../assets/img'
export default function ErrorPage() {
  return (
    <Wrapper>
      <article>
        <img src={iconOne} alt='iconOne' />
        <h1>۴۰۴</h1>
        <h2>صفحه مورد نظر یافت نشد !</h2>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  display: 'grid',
  placeItems: 'center',
  height: '100dvh',
  width: '100vw',
  color: 'var(--text-600)',
  article: {
    margin: '1rem',
    padding: '1rem 0',
    borderBottom: '3px solid var(--text-600)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    h1: { fontSize: '9rem', lineHeight: '1', color: 'var(--text-600)' },
    h2: {
      fontSize: '2rem',
      lineHeight: '1',
      color: 'var(--text-600)',
    },
    img: {
      position: 'absolute',
      right: '0%',
      bottom: '0%',
      transform: 'rotate(-180deg) translate(-20%,-93%)',
    },

    '@media (width<= 450px)': {
      h1: { fontSize: '5rem' },
      h2: {
        fontSize: '1.5rem',
        textAlign: 'center',
        lineHeight: '1.5',
      },
    },
  },
}))
