import React from "react";
import { Container, Content, Text, View, Button } from "native-base";
import common from "../styles/common.js";
import { Actions } from "react-native-router-flux";


const Home = () => (
  <Container>
    <Content padder>
      <Text>Wow such native</Text>
      <Content contentContainerStyle={{ alignItems: "center" }}>
        
        <Button onPress={Actions.groups}><Text>Ciao</Text></Button>
      </Content>
    </Content>
  </Container>
);

export default Home;
