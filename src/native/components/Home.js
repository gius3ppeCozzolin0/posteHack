import React from 'react';
import { Button, Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';


const Home = () => (
  <Container>
    <Content>
      <Header title="Home"/>
      <Content contentContainerStyle={{ alignItems: 'center' }} padder>
        <Button onPress={Actions.groups}><Text>Ciao</Text></Button>
        <Text>Ciao ciao ciao ciao ciao sei circular</Text>
        <Text style={{ fontSize: 56 }}>
          Hello, world!
        </Text>
      </Content>
    </Content>
  </Container>
);

export default Home;
