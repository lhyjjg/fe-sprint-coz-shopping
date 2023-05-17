import React from "react";
import styled from 'styled-components';

import {Link} from "react-router-dom";

const TypeLink = styled(Link) `
`

export default function TypeNav() {
  return (
    <typeNavigation>
      <TypeLink to='/ProductList'>전체</TypeLink>
      {/* <TypeAll>전체</TypeAll>
      <TypeProduct>상품</TypeProduct>
      <TypeCategory>카테고리</TypeCategory>
      <TypeExhibition>기획전</TypeExhibition>
      <TypeBrand>브랜드</TypeBrand> */}
    </typeNavigation>
  )
}