import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const HandleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1.5rem;
`;

const Handle = ({ invert }) => {
  const color = invert ? '#fff' : 'initial';
  return (
    <HandleContainer>
      <Text font="mono" size="sm" align="right" weight="bold" color={color}>
        @benjamminj
      </Text>
      <Text font="mono" size="sm" align="right" weight="bold" color={color}>
        #vincitdevtalks
      </Text>
    </HandleContainer>
  );
};

export default Handle;
