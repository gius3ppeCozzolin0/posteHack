import React from 'react';
import { Container, Content, Text, View } from 'native-base';
import { Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Channels = () => (
  <Container>
    <Content padder>
      <View>
        <Text>Custom</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <TouchableHighlight onPress={Actions.form}>
            <Image
              style={{
                width: 200,
                height: 40,
                resizeMode: 'contain',
              }}
              source={require('../../images/logos/spotify.png')}
            />
          </TouchableHighlight>
        </View>
        <View>
          <Image
            style={{
              width: 200,
              height: 40,
              resizeMode: 'contain',
            }}
            source={require('../../images/logos/netflix.png')}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Image
            style={{
              width: 200,
              height: 40,
              resizeMode: 'contain',
            }}
            source={require('../../images/logos/enel.png')}
          />
        </View>
        <View>
          <Image
            style={{
              width: 200,
              height: 40,
              resizeMode: 'contain',
            }}
            source={require('../../images/logos/tim.png')}
          />
        </View>
      </View>
    </Content>
  </Container>
);

export default Channels;
