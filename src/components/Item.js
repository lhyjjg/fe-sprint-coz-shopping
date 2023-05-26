import React, { useState, useEffect } from "react";
import styled from 'styled-components'

import Modal from "./Modal";
import Toast from "./Toast";

import { TiStarFullOutline } from 'react-icons/ti'

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: row;
`

const ItemBox = styled.div `
`

const ItemImg = styled.div `
  width: 264px;
  height: 210px;
  position: relative;
  margin: 0 53px 6px 0;
`
const ItemImgUrl = styled.img `
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

const BookmarkStar = styled(TiStarFullOutline)`
  width: 23px;
  height: 23px;
  color: ${({isActive}) => (isActive ? "#FFD361" : "#D9D9D9")};
  position: absolute;
  bottom: 10px;
  right: 10px;
`
const ItemDescriptionFist = styled.div `
  display: flex;
  justify-content: space-between;
  margin-right: 53px;
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

const ItemDescriptionSecond = styled.div `
  display: flex;
  justify-content: space-between;
  margin-right: 53px;
`
const ItemSubTitle = styled.div `
`
const ItemFollowerPrice = styled.div `
`


const Item = ({data, showBookmarks}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [activeStar, setActiveStar] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const savedItemsString = localStorage.getItem("savedItems");
    if (savedItemsString) {
      setSavedItems(JSON.parse(savedItemsString));
      setActiveStar(JSON.parse(savedItemsString));
    }
  }, []);

  const openModal = (imageUrl, title) => {
    setModalOpen(true);
    setModalImageUrl(imageUrl);
    setModalTitle(title);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  const handleStarClick = (productId) => {
    setActiveStar((preActiveItems) => {
      if (preActiveItems.includes(productId)) {
        const updatedItems = preActiveItems.filter((id) => id !== productId);
        setSavedItems(updatedItems);
      } else {
        const updatedItems = [...preActiveItems, productId];
        setSavedItems(updatedItems);
      }
      localStorage.setItem("savedItems", JSON.stringify(savedItems));
      return [...savedItems];
    });
  };

  const filteredData = showBookmarks ? data.filter((product) => savedItems.includes(product.id)) : data;

  return (
    <ItemContainer>
      {filteredData.map((product) => (
        <ItemBox key={product.id}>
          <ItemImg>
            <ItemImgUrl 
              src={product.brand_image_url === null ?
              product.image_url : product.brand_image_url}
              onClick={() => openModal(product.brand_image_url === null ?
              product.image_url : product.brand_image_url, product.title)} />
            <BookmarkStar isActive={activeStar.includes(product.id)}
             onClick={() => handleStarClick(product.id)}/>
          </ItemImg>
          <ItemDescriptionFist>
            <ITemTitle>
              {product.title}
            </ITemTitle>
            <ItemFollowerDiscount isDiscount={product.discountPercentage}>
              {product.follower > 0 
                ? `관심고객수` : 
                product.discountPercentage !== null 
                ? `${product.discountPercentage}%` : ""}
            </ItemFollowerDiscount>
          </ItemDescriptionFist>

          <ItemDescriptionSecond>
            <ItemSubTitle>{product.sub_title}</ItemSubTitle>
            <ItemFollowerPrice>
              {product.follower > 0 
                ? product.follower.toLocaleString() : 
                product.price !== null 
                ? `${Number(product.price).toLocaleString()}원` : ""}
            </ItemFollowerPrice>
          </ItemDescriptionSecond>
        </ItemBox>
      ))}
      <Modal 
        isModalOpen = {isModalOpen}
        imageUrl = {modalImageUrl}
        title = {modalTitle} 
        closeModal = {closeModal}
        bookmarkStar={<BookmarkStar isActive={activeStar.includes(modalTitle)} onClick={() => handleStarClick(modalTitle)} />}
        ></Modal>
      <Toast
        bookmarkStar={true}
      ></Toast>
    </ItemContainer>
  );
};

export default Item;
