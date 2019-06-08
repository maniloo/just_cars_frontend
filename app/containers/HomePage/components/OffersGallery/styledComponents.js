import styled from 'styled-components';

export const ImagesRow = styled.div`
  display: flex;
  overflow-x: scroll;
  max-width: 100%;
`;

export const ImageWrapper = styled.div`
  min-height: 50px;
  min-width: 70px;
  border: 1px solid ${({ active }) => (active ? 'red' : 'black')};
  margin: 5px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CenterSection = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const OffersGalleryWrapper = styled.div`
  width: calc(70% - 30px);
  height: calc(100% - 30px);
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
