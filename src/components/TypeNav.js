import React from "react";
import styled from 'styled-components';
import allImage from '../all.png'
import productImage from '../product.png'
import categoryImage from '../category.png'
import exhibitionImage from '../exhibition.png'
import brandImage from '../brand.png'

import {Link} from "react-router-dom";

const TypeNavigation = styled.div`
  display: flex;
  justify-content: center;
`
const Type = styled(Link) `
  text-decoration: none;
  color: black;
`
const Title = styled.div`
  text-align: center;
  margin: 0 18px 26px 18px;
`

export default function TypeNav() {
  return (
    <TypeNavigation>      
      <Title>
        <Type to='/ProductList'><img src={allImage}/><br></br>전체</Type>
      </Title>
      <Title>
        <Type to='/TypeProduct'><img src={productImage}/><br></br>상품</Type>
      </Title>
      <Title>
        <Type to='/TypeCategory'><img src={categoryImage}/><br></br>카테고리</Type>
      </Title>
      <Title>
        <Type to='/TypeExhibition'><img src={exhibitionImage}/><br></br>기획전</Type>
      </Title>
      <Title>
        <Type to='/TypeBrand'><img src={brandImage}/><br></br>브랜드</Type>
      </Title>
    </TypeNavigation>
  )
}