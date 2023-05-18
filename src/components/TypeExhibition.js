import React, { useState, useEffect } from "react";
import axios from 'axios';
import Item from "../components/Item";

import styled from 'styled-components';
import TypeNav from "../components/TypeNav";

const ProductContainer = styled.main `
  padding: 0 76px;
`

function TypeExhibition () {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((response) => {
        const { data } = response;
        const filteredData = data.filter(item => item.type === 'Exhibition');
        setData(filteredData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductContainer>
      <TypeNav></TypeNav>
      <Item data = {data}></Item>
    </ProductContainer>
 
  )
}

export default TypeExhibition;