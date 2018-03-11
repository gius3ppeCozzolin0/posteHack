import React from 'react';
import { Body, Container, Content, Left, List, ListItem, Right, Text, Thumbnail } from 'native-base';
import Header from './Header';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
});

const Groups = ({ groups }) => (
  <Container style={styles.mainBG}>
    <Header title="Gruppi" />
    <Content style={{ paddingTop: 20 }}>
      <List
        style={{ backgroundColor: 'white' }}
        dataArray={groups}
        renderRow={({
 name, expense, contacts, image,
}) => (
  <ListItem avatar>
    <Left>
      <Thumbnail source={image} />
    </Left>
    <Body style={{ paddingTop: 16, paddingBottom: 16 }} >
      <Text style={{ paddingBottom: 8 }}>{name}</Text>
      <Text note>{`${contacts.length} partecipanti`}</Text>
    </Body>
    <Right style={{ paddingTop: 16, paddingBottom: 16 }} >
      <Text note>{expense}</Text>
    </Right>
  </ListItem>
          )}
      />
    </Content>
  </Container>
);

export default Groups;
