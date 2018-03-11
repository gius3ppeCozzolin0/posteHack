import React from 'react';
import { Button, Container, Content, Text, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import YellowButton from './YellowButton';

const Pay = () => (
  <Container
    style={{
      backgroundColor: '#f1f1f1',
    }}
  >
    <Content
      contentContainerStyle={{
        alignItems: 'center',
        paddingTop: 40,
      }}
      padder
    >
      <View
        style={{
          width: '90%',
          height: 250,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#424242',
          shadowOpacity: 0.2,
          shadowRadius: 2,
          overflow: 'hidden',
          borderRadius: 6,
          backgroundColor: '#fff',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            marginBottom: 20,
            color: '#0047bb',
          }}
        >
          Pizzeria Am
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            marginBottom: 50,
            color: '#0047bb',
          }}
        >
          Corso di Porta Romana, 83 – Milano
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 40,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 19, marginBottom: 20 }}>Transazione effettuata</Text>

        <Text style={{ fontSize: 40, marginBottom: 50, color: '#0047bb' }}>€ 125,60</Text>
      </View>
      <View style={{}}>
        <YellowButton label="TORNA ALLA HOME" onPress={Actions.home} />
      </View>
    </Content>
  </Container>
);

export default Pay;
