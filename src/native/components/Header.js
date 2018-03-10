import React from 'react';
import PropTypes from 'prop-types';
import { Body, Header, Left, Right, Title } from 'native-base';

const PosteHeader = ({ title }) => (
  <Header style={{ backgroundColor: 'white', borderBottomColor: 'red' }}>
    <Left />
    <Body>
      <Title style={{ color: 'red' }}>{title}</Title>
    </Body>
    <Right />
  </Header>
);

PosteHeader.propTypes = {
  title: PropTypes.string,
};

PosteHeader.defaultProps = {
  title: 'header',
};

export default PosteHeader;
