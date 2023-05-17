import React from "react";

import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
`

const FooterText = styled.div `
  text-align: center;
  color: #888888;
  font-size: 12px;
  position: relative;
`

function Footer () {

  return (
    <FooterContainer>
      <FooterText>개인정보 처리방침 | 이용 약관</FooterText>
      <FooterText>All rights reserved @ Codestates</FooterText>
    </FooterContainer>
  )
}

export default Footer;
