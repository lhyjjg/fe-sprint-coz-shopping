import React, { useState, useEffect } from "react";
import axios from 'axios';
import Item from "../components/Item";

import styled from 'styled-components';

const ProductContainer = styled.main `
  padding: 0 76px;
`

function BookmarkList () {
  const [data, setData] = useState([]);
  const [showBookmarks, setShowBookmarks] = useState(false);

  useEffect(() => {
    axios
      .get('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((response) => {
        const { data } = response;
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductContainer>
      <Item data = {data} showBookmarks={true}></Item>
    </ProductContainer>
 
  )
}

export default BookmarkList;