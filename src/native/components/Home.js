import React from 'react';
import { Button, Container, Content, Text, View } from 'native-base';
import { TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const Home = () => (
  <Container>
    <Content>
      <Header title="Home" />
      <Content contentContainerStyle={{ alignItems: 'center', paddingTop: 100 }} padder>
        <Text style={{ fontSize: 56 }}>Ciao Pippo!</Text>
        <Text>Ciao ciao ciao ciao ciao sei circular</Text>
        <TouchableHighlight
          style={{
            width: 300,
            height: 200,
          }}
        >
          <Text>Wow</Text>
        </TouchableHighlight>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 300,
          }}
        >
          <Button onPress={Actions.channels}>
            <Text>Add Payment</Text>
          </Button>
        </View>
      </Content>
    </Content>
  </Container>
);

export default Home;
