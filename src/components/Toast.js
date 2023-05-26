import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const ToastContainer = styled.div`
  position: fixed;
  right: 24px;
  bottom: 34px;
  background-color: black;
  width: 305px;
  height: 52px;
  z-index: 9999;
  display: flex;
`;

const ToastText = styled.span`
  color: white;
`;

const Toast = ({ notify }) => {

  return (
    <ToastContainer>
      {/* {isVisible && <ToastText>{notify}</ToastText>} */}
    </ToastContainer>
  );
};

export default Toast;
