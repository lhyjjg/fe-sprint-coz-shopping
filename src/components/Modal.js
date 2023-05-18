import React from "react";
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  left: 0; right: 0;
  top: 0; bottom: 0;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 9999;
`
const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 744px;
  height: 480px;
  border-radius: 12px;
`
const ModalImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

const ModalCloseButton = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  color: #F8F8F8;
  font-size: 24px;
  cursor: pointer;
`

const ModalBookmark = styled.div`
  position: absolute;
  bottom: 20px;
  left: 56px;
`

const ModalTitle = styled.div`
  position: absolute;
  bottom: 24px;
  left: 56px;
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
`

const Modal = ({ isModalOpen, imageUrl, title, closeModal, bookmarkStar }) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <ModalContainer onClick={closeModal}>
      <ModalContent>
        <ModalImage src={imageUrl}></ModalImage>
        <ModalCloseButton onClick={closeModal}>🗙</ModalCloseButton>
        <ModalBookmark>{bookmarkStar}</ModalBookmark>
        <ModalTitle>{title}</ModalTitle>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
