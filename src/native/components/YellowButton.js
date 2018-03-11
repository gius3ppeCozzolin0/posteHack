import React from 'react';

import { Button, Text } from 'native-base';

const YellowButton = ({ onPress, label, small }) => (
  <Button
    rounded
    style={{
      backgroundColor: '#EEDD00',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
      minWidth: 150,
      height: small ? 45 : 65,
    }}
    onPress={onPress}
  >
    <Text
      style={{
        color: '#0047BB',
        fontSize: 16,
        alignSelf: 'center',
      }}
    >
      {label}
    </Text>
  </Button>
);

export default YellowButton;
