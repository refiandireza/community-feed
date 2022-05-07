import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head';

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
    <>
      <Head>
        <title>Community Feed</title>
        <meta name='description' content='Community Feed project build with React and Next JS'/>
      </Head>
      <HeaderWrapper>
        <Link href={'/'} passHref>
          <Title>
            <h1>Community Feed</h1>
          </Title>
        </Link>
      </HeaderWrapper>

    </>
  )
}

export default Header