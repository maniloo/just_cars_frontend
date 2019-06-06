import styled from 'styled-components';

export const BackToOffersButton = styled.button`
  cursor: pointer;
  --color: #0191ff;
  min-width: 16rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background:
    var(--color)
    linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(0, 0, 0, 0.2)
    )
  ;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  text-shadow: 0 -1px #000000;
  box-shadow:
    inset 0 0 0 1px rgba(0, 0, 0, 0.5), /* outline */
    inset 0 2px rgba(255, 255, 255, 0.5), /* highlight top */
    inset 0 -2px rgba(0, 0, 0, 0.15), /* shadow bottom */
    0 1px 2px rgba(0, 0, 0, 0.4) /* shadow */
  ;
}
:hover,
:focus {
  background:
    var(--color)
    linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(255, 255, 255, 0.2)
    )
  ;
}

`

export const CarImage = styled.div`
  max-height: 60%;
  img {
    max-height: 100%;
  }
`;

export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100% - 250px);
  padding: 40px;
`
