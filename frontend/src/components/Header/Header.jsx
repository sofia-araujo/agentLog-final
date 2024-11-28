import React from 'react'
import { HeaderContainer, LogoContainer, LogoText, NavLink, NavLinks } from '../../Styles/Header';
import { Link } from 'react-router-dom';
import Logo from "/LOG-removebg-preview.png"
import { useAuth } from '../../Auth/AuthContext';
const Header = () => {
  const {logout} = useAuth()

  return (
    <HeaderContainer>
      
      <LogoContainer>
        
        <Link to="/" className='link'>
          <img className='logo' src={Logo} alt="Logo" width="40" height="40" />
        </Link>      
      </LogoContainer>

      <NavLinks>
        <Link to="/tabela-ocorrencias" className='link'><NavLink href="">TABELA DE OCORRENCIAS</NavLink></Link>
        <Link to="/cadastro-atendimento" className='link'><NavLink href="">CADASTRO DE ATENDIMENTO</NavLink></Link>
        <Link to="/graficos" className='link'>
        <NavLink href="">GRÁFICOS DE ATENDIMENTOS</NavLink>
        </Link>    
        <NavLink href="" onClick={logout}>LOGOUT</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;