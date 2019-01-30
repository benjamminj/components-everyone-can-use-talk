import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Appear } from 'mdx-deck';

const ListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  text-align: ${({ align }) => align};
  line-height: 1.5;
  margin: 2rem 0;
`;

const List = ({ align, children, useAppear }) => {
  const transformedChildren = Children.map(children, child => (
    <ListItem align={align}>{child}</ListItem>
  ));

  return (
    <ListContainer>
      {useAppear ? <Appear>{transformedChildren}</Appear> : transformedChildren}
    </ListContainer>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
};

List.defaultProps = {
  align: 'left',
};

export default List;
