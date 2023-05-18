import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import Item from "../components/Item";

const MainContainer = styled.main `
  padding: 0 76px;
`

function Main () {
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

  const displayedData = data.slice(0, 4); 
  
  return (
    <MainContainer>
      <h2>상품 리스트</h2>
      <Item data={displayedData}></Item>
      <h2>북마크 리스트</h2>
      <Item data={data} showBookmarks={true} />
    </MainContainer>
  )
}

export default Main;