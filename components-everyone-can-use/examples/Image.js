import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ alt, src }) => <img src={src} alt={alt} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
