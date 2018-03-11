import React from 'react';
import { Container, Content, View } from 'native-base';
import { Image, Dimensions } from 'react-native';
import Header from './Header';

const { width } = Dimensions.get('window');

const Analytics = () => (
  <Container>
    <Header title="Statistiche" />
    <Content>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 40,
          backgroundColor: '#f1f1f1',
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: width - 30, height: 240 }}
          source={require('../../images/card_graph.png')}
        />
        <Image
          resizeMode="contain"
          style={{ width: width - 30, height: 200 }}
          source={require('../../images/card_graph1.png')}
        />
        <Image
          resizeMode="contain"
          style={{ width: width - 30, height: 200 }}
          source={require('../../images/card_graph2.png')}
        />
      </View>
    </Content>
  </Container>
);

export default Analytics;
