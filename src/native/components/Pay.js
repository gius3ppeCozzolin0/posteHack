import React from 'react';
import { Button, Container, Content, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Pay = () => (
  <Container>
    <Content contentContainerStyle={{ alignItems: 'center', padding: 30 }} padder>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 56, marginBottom: 20 }}>Pizza</Text>
        <Text style={{ fontSize: 30, marginBottom: 50 }}>100$</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            style={{
              width: 200,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={Actions.home}
          >
            <Text>Pay</Text>
          </Button>
        </View>
      </View>
    </Content>
  </Container>
);

export default Pay;
