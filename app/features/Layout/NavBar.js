import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  padding: 24px;
`;

const StyledNavLink = styled(NavLink)`
  & + & {
    padding-left: 10px;
  }

  &:hover,
  &.NavBar__StyledNavLink--active {
    color: green;
  }
`;

const NavBar = () => (
  <Wrapper>
    <StyledNavLink to="/" exact activeClassName="NavBar__StyledNavLink--active">
      Home
    </StyledNavLink>
    <StyledNavLink to="/About" activeClassName="NavBar__StyledNavLink--active">
      About
    </StyledNavLink>
  </Wrapper>
);

export default NavBar;
