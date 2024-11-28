import styled from 'styled-components';


export const HeaderContainer = styled.header`
  background-color: #23288C;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const LogoText = styled.span`
  color: white;
  font-size: 24px;
  font-weight: bold;
  white-space: nowrap;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
