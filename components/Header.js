import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderWrapper = styled.div`
    background-color: orange;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Title = styled.a`
    /* height: 64px; */
    cursor: pointer;
    color: white;
    text-decoration: none;
`

function Header() {
  return (
    <HeaderWrapper>
      <Link href={'/'} passHref>
        <Title>
          <h1>Community Feed</h1>
        </Title>
      </Link>
    </HeaderWrapper>
  )
}

export default Header