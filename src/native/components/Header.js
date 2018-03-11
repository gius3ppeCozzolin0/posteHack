import React from 'react';
import PropTypes from 'prop-types';
import { Body, Button, Header, Icon, Left, Right, Text, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

const PosteHeader = ({ title, showBack }) => (
  <Header
    iosBarStyle="dark-content"
    style={{ backgroundColor: 'white', borderBottomColor: 'rgb(224,224,224)' }}
  >
    <Left>
      {showBack && (
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-arrow-round-back" style={{ color: '#424242' }} />
        </Button>
      )}
    </Left>
    <Body>
      <Title style={{ color: 'rgb(66,66,66)', fontSize: 16, overflow: 'visible' }}>{title}</Title>
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
