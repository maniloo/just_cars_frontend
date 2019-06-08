import React from 'react'
import styled from 'styled-components';

export const OffersGalleryElement = ({ offer: { title, price, image_path }, onClick }) => (
  <ElementWrapper onClick={onClick}>
    <h1>{title}</h1>
    <img src={image_path} />
    <b> CENA: {price} (PLN)</b>
  </ElementWrapper>
);

const ElementWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  img {
    max-width: 90%;
    max-height: 60%;
  }
`;
