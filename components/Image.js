import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './Text';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Attribution = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`

const Image = ({ attribution, ...props }) => (
  <Container>
    <img {...props} />
    {attribution && (
      <Attribution>
        <Text size="xxs" align="right">
          {attribution}
        </Text>
      </Attribution>
    )}
  </Container>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
