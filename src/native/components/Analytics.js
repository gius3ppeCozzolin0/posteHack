import React from 'react';
import { Container, Content } from 'native-base';
import { Image, Dimensions } from 'react-native';
import Header from './Header';

const { width } = Dimensions.get('window');

const Analytics = () => (
  <Container>
    <Header title="Statistiche" />
    <Content contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        resizeMode="contain"
        style={{ width: width - 30 }}
        source={require('../../images/card_graph.png')}
      />
      {/* <Image
        resizeMode="contain"
        style={{ width: width - 30, paddingBottom: 30 }}
        source={require('../../images/card_graph1.png')}
      />
      <Image
        resizeMode="contain"
        style={{ width: width - 30, paddingBottom: 30 }}
        source={require('../../images/card_graph2.png')}
      /> */}
    </Content>
  </Container>
);

export default Analytics;
