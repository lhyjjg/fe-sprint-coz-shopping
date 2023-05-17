import React, {useState} from 'react';
import logoPath from '../codestates-logo.png'
import App from '../App';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

import { SlPresent } from 'react-icons/sl'
import { TiStarOutline } from 'react-icons/ti'
import { TfiMenu } from 'react-icons/tfi'

const HeaderContainer = styled.div `
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 76px;
  background-color: white;
  z-index: 10;
`

const Title = styled.div `
  width: 297px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
  }
`

const Menu = styled.div `
  width: 30px;
  height: 20px;
`
const StyledSlPresent = styled(SlPresent)`
  width: 20px;
  height: 20px;
`;

const StyledTiStarOutline = styled(TiStarOutline)`
  width: 23px;
  height: 23px;
`;

const HambugerMenu = styled.ul `
  position: absolute;
  width: 200px;
  right: 32px;
  list-style: none;

  li {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
  }
`

const StyledLink = styled(Link) `
  color: black;
  text-decoration: none;
`

function Header () {

  const handleTitleClick = () => {
    window.location.href = "/";
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <HeaderContainer>
      <Title onClick={handleTitleClick}>
        <img src={logoPath} alt='logo'/>
      </Title>
      <Menu onClick={handleMenuClick}>
        <TfiMenu size={`${Menu.width}px ${Menu.height}px`}/>
        {isMenuOpen && (
          <HambugerMenu>
            <li>이현영님, 안녕하세요!</li>
            <StyledLink to='/productList'><li><StyledSlPresent/> 상품리스트 페이지</li></StyledLink>
            <StyledLink to='bookmarkList'><li><StyledTiStarOutline/> 북마크 페이지</li></StyledLink>
          </HambugerMenu>
        )}
      </Menu>
    </HeaderContainer>
  )
}

export default Header;