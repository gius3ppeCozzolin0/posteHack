import React from 'react';
import PropTypes from 'prop-types';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

const PosteHeader = ({ title, showBack }) => (
  <Header style={{ backgroundColor: 'white', borderBottomColor: 'red' }}>
    <Left>
      {showBack && (
      <Button transparent onPress={() => Actions.pop()}>
        <Icon name="ios-arrow-round-back" style={{ color: '#424242' }} />
      </Button>
      )}
    </Left>
    <Body>
      <Title style={{ color: 'red' }}>{title}</Title>
    </Body>
    <Right />
  </Header>
);

PosteHeader.propTypes = {
  title: PropTypes.string,
  showBack: PropTypes.bool,
};

PosteHeader.defaultProps = {
  title: 'header',
  showBack: false,
};

export default PosteHeader;
