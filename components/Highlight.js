import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${({ background }) => background};
  color: ${({ textColor }) => textColor};
  border-radius: 4px;
`;

const Highlight = ({ children, ...props }) => (
  <Background {...props}>{children}</Background>
);

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  textColor: PropTypes.string,
};

Highlight.defaultProps = {
  background: 'transparent',
  textColor: 'inherit',
};

export default Highlight