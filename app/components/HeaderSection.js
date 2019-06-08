import React from 'react';
import styled from 'styled-components';


const HeaderSection = ({children}) => (
  <SectionWrapper>
    <div>
      <h1>
        JustCars.pl
      </h1>
    </div>
    {children}
  </SectionWrapper>
)

const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  border-bottom: 1px solid grey;
`


export default HeaderSection;
