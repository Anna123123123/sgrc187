import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { HeaderContainer, NavbarHeader } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <NavbarHeader>
        <div className='left-flex'>
          <div className='navbar-brand-box'>
            <Link to='/' className='logo'>
              <span className='logo-lg'>
                <h1>SGRC КИИ</h1>
              </span>
            </Link>
          </div>
          <div>{/* breadcrumbs */}</div>
        </div>
        <div className='right-flex'></div>
      </NavbarHeader>
    </HeaderContainer>
  )
}
