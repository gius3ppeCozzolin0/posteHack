import React from 'react';
import { Container, Content, Form, Item, Input, View, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const PayForm = () => (
  <Container>
    <Content
      padder
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Form>
        <View style={{ margin: 10 }}>
          <Item regular>
            <Input placeholder="How much ?" />
          </Item>
        </View>
        <View style={{ margin: 10 }}>
          <Item regular>
            <Input placeholder="How much ?" />
          </Item>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}
        >
          <Button onPress={Actions.qr}>
            <Text>Scan</Text>
          </Button>
        </View>
      </Form>
    </Content>
  </Container>
);

export default PayForm;
