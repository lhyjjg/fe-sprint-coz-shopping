import React from "react";
import styled from 'styled-components';

const MainContainer = styled.main `
  padding: 0 76px;
`

function Main () {
  
  return (
    <MainContainer>
      <h1>상품 리스트</h1>
      <h1>북마크 리스트</h1>
    </MainContainer>
  )
}

export default Main;