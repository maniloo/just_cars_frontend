import styled from 'styled-components';

export const ElementWrapper = styled.div`
  width: calc(100% - 10px);
  margin: 10px 5px;
  height: 100px;
  background-color: grey;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 0 10px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    background-color: blue;
  }
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`;

export const Price = styled.div`
  color: gold;
  margin-top: 15px;
  font-weight: bold;

  span {
    color: black;
  }
`;
