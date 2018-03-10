import React from 'react';
import { Button, Container, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';


const Home = () => (
  <Container>
    <Content padder>
      <Text>Wow such native</Text>
      <Content contentContainerStyle={{ alignItems: 'center' }}>
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
