// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  margin: 0;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Landing Page Builder</Logo>
      <Navigation>
        <Link href="/" passHref>
          Dashboard
        </Link>
        <Link href="/create" passHref>
          Create
        </Link>
        <Link href="/logout">Logout</Link>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;

