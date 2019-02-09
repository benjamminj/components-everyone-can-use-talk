import React from 'react';
import Text from './Text';

const Heading = props => (
  <h2>
    <Text font="secondary" size="xxl" {...props} />
  </h2>
);

export default Heading