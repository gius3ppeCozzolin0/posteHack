import React from 'react';
import { Body, Container, Content, Left, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import Header from './Header';

const Groups = ({ groups }) => (
  <Container>
    <Header title="Gruppi" />
    <Content padder>
      <List
        dataArray={groups}
        renderRow={({ name, expense, contacts }) => (
          <ListItem avatar>
            <Left>
              <Thumbnail small source={require('../../images/home_black.png')} />
            </Left>
            <Body>
              <Text>{name}</Text>
              <Text note>{`${contacts.length} partecipanti`}</Text>
            </Body>
            <Right>
              <Text note>{expense}</Text>
            </Right>
          </ListItem>
          )}
      />
    </Content>
  </Container>
);

export default Groups;
