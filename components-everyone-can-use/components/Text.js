import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  primaryFont,
  monoFont,
  secondaryFont,
  colors,
} from '../styles/variables';

const fonts = {
  primary: primaryFont,
  secondary: secondaryFont,
  mono: monoFont,
};

const sizes = {
  xxxs: '075rem',
  xxs: '1rem',
  xs: '1.5rem',
  sm: '2rem',
  md: '2.5rem',
  lg: '3rem',
  xl: '4rem',
  xxl: '5rem',
  xxxl: '6.5rem',
};

const TextStyles = styled.span`
  font-family: ${({ font }) => fonts[font] || fonts.primary};
  font-size: ${({ size }) => sizes[size] || sizes.md};
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  line-height: ${({ wide }) => wide ? '2' : '1.5'};
  color: ${({ color }) => color};
  display: ${({ display }) => display};
  padding: ${({ padding }) => padding};
`;

const Text = ({ children, ...props }) => (
  <TextStyles {...props}>{children}</TextStyles>
);

Text.propTypes = {
  font: PropTypes.oneOf(['mono', 'secondary', 'primary']),
  size: PropTypes.oneOf([
    'xxxs',
    'xxs',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'xxxl',
  ]),
  align: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  display: PropTypes.string,
};

Text.defaultProps = {
  font: 'primary',
  size: 'md',
  align: 'center',
  weight: 'normal',
  color: 'initial',
  padding: '0 5vw',
  display: 'inline-block',
};

export default Text;
