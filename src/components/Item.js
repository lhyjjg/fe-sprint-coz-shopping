import React from "react";
import styled from 'styled-components'

import { TiStarFullOutline } from 'react-icons/ti'

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ItemBox = styled.div `
`

const ItemImg = styled.div `
  width: 264px;
  height: 210px;
  position: relative;
`
const ItemImgUrl = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

const StyledTiStarFullOutline = styled(TiStarFullOutline)`
  width: 23px;
  height: 23px;
  color: #D9D9D9;
  position: absolute;
  bottom: 10px;
  right: 10px;
`
const ItemDiscriptionFist = styled.div `
  display: flex;
  justify-content: space-between;
`
const ITemTitle = styled.div `
  font-size: 16px;
  font-weight: 800;
`
const ItemFollowerDiscount = styled.div `
  font-size: 16px;
  font-weight: 800;
  color: ${({ isDiscount }) => (isDiscount ? "#452CDD" : "inherit")};
`

const ItemDiscriptionSecond = styled.div `
  display: flex;
  justify-content: space-between;
`
const ItemSubTitle = styled.div `
`
const ItemFollowerPrice = styled.div `
`


const Item = ({data}) => {
  
  return (
    <ItemContainer>
      {data.map((product) => (
        <ItemBox key={product.id}>
          <ItemImg>
            <ItemImgUrl src={product.brand_image_url === null ? product.image_url : product.brand_image_url} />
            <StyledTiStarFullOutline />
          </ItemImg>
          <ItemDiscriptionFist>
            <ITemTitle>
              {product.title}
            </ITemTitle>
            <ItemFollowerDiscount isDiscount={product.discountPercentage}>
              {product.follower > 0 
                ? `관심고객수` : 
                product.discountPercentage !== null 
                ? `${product.discountPercentage}%` : ""}
            </ItemFollowerDiscount>
          </ItemDiscriptionFist>

          <ItemDiscriptionSecond>
            <ItemSubTitle>{product.sub_title}</ItemSubTitle>
            <ItemFollowerPrice>
              {product.follower > 0 
                ? product.follower.toLocaleString() : 
                product.price !== null 
                ? `${Number(product.price).toLocaleString()}원` : ""}
            </ItemFollowerPrice>
          </ItemDiscriptionSecond>
        </ItemBox>
      ))}
    </ItemContainer>
  );
};

export default Item;
