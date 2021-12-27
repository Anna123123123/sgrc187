import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1002;
  background-color: hsl(233deg 20% 18%); //#272c3e
`

export const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 70px;
  padding: 0 calc(24px / 2) 0 0;
`

export const LeftFlex = styled.div`
  display: flex;
`

export const NavbarBrandBox = styled.div`
  background: #272c3e;
  padding: 0 1.5rem;
  text-align: center;
  width: 240px;
`

export const LogoLink = styled(Link)`
  color: #ececf1;
  text-decoration: none;
`

export const LogoLg = styled.span`
  padding: 15px;
`
