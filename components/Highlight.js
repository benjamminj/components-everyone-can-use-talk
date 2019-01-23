import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: ${({ background }) => background};
  color: ${({ textColor }) => textColor};
  border-radius: ${({ radius }) => radius};
`;

const Highlight = ({ children, ...props }) => (
  <Background {...props}>{children}</Background>
);

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  textColor: PropTypes.string,
  radius: PropTypes.string,
};

Highlight.defaultProps = {
  background: 'transparent',
  textColor: 'inherit',
  radius: '12px'
};

export default Highlight