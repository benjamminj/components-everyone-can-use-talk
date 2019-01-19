import React from 'react';
import styled from 'styled-components';
import Handle from '../components/Handle'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const WithHandle = ({ children }) => (
  <Container>
    {children}
    <Handle />
  </Container>
);

export default WithHandle