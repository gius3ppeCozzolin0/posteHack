import React from 'react';
import PropTypes from 'prop-types';
import { Body, Button, Header, Icon, Left, Right, Text, Title } from 'native-base';
import { Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const PosteHeader = ({
  title, showBack, showLogo, showExit,
}) => (
  <Header
    iosBarStyle="dark-content"
    style={{
      backgroundColor: 'white',
      borderBottomColor: 'rgb(224,224,224)',
      alignItems: 'center',
      height: 90,
    }}
  >
    <Left>
      {showBack && (
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-arrow-round-back" style={{ color: '#424242' }} />
        </Button>
      )}
      {showExit && (
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="ios-close" style={{ color: '#424242' }} />
        </Button>
      )}
    </Left>

    {!showLogo && (
      <Title style={{ color: 'rgb(66,66,66)', fontSize: 16, overflow: 'visible' }}>{title}</Title>
    )}

    {showLogo && (
      <Image
        resizeMode="contain"
        style={{ width: 121 }}
        source={require('../../images/logo_app.png')}
      />
    )}
    <Right>
      <Image
        resizeMode="contain"
        style={{ width: 42, height: 42 }}
        source={require('../../images/contacts/personas_01.png')}
      />
    </Right>
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
