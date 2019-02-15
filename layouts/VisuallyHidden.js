import React from 'react';
import { Invert } from 'mdx-deck/layouts';
import WithHandle from './WithHandle';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
`;

// This essentially allows content to be on the slide,
// but makes sure it's invisible to a visible user.
const Content = styled.div`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const VisuallyHidden = ({ children }) => (
  <Container>
    <WithHandle invert>
      <Content>{children}</Content>
    </WithHandle>
  </Container>
);
export default VisuallyHidden;
