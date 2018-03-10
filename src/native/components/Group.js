import React from "react";
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Body, H3, List, ListItem, Text } from 'native-base';
import Loading from "./Loading";
import Spacer from "./Spacer";

const Group = () => {
  return (
    <Container>
      <Content padder>
        <Image source={require("../../images/app-icon.png")} style={{ height: 100, width: null, flex: 1 }} />
        <Spacer size={25} />
        <H3>WOW</H3>
        <Text>by Pino</Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>About this wow</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>very long body</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>whats</Text>
          </CardItem>
          <CardItem>
            <Content>
              <List>
                <Text>leroooy</Text>
              </List>
            </Content>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>Method</Text>
          </CardItem>
          <CardItem>
            <List>
            <Text>wtf</Text>
            </List>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

export default Group;
