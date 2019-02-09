import React from 'react';
import styled from 'styled-components';
import Handle from '../components/Handle';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const WithHandle = ({ children, invert }) => (
  <Container>
    {children}
    <Handle invert={invert} />
  </Container>
);

WithHandle.defaultProps = {
  invert: false,
};

export default WithHandle;
