import React from 'react';
import {
  Body,
  Container,
  Content,
  Left,
  List,
  ListItem,
  Right,
  View,
  Text,
  Thumbnail,
} from 'native-base';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
  itemRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: 'rgb(224,224,224)',
    borderBottomWidth: 1,
  },
});

const onPress = id => Actions.group({ match: { params: { id } } });

const Groups = ({ groups, contacts }) => (
  <Container style={styles.mainBG}>
    <Header title="Gruppi" />
    <Content style={{ paddingTop: 20 }}>
      {groups.map(({
 id, name, contacts, image,
}) => (
  <TouchableHighlight key={id} onPress={() => onPress(id)}>
    <View style={styles.itemRow} avatar>
      <View style={{ width: 100 }}>
        <Thumbnail source={image} />
      </View>
      <View>
        <Text style={{ paddingBottom: 8 }}>{name}</Text>
        <Text note>{`${contacts.length} partecipanti`}</Text>
      </View>
    </View>
  </TouchableHighlight>
      ))}
      {/* <List
        style={{ backgroundColor: 'white' }}
        dataArray={groups}
        renderRow={({
 id, name, expense, contacts, image,
}) => (
  <ListItem avatar onPress={() => onPress(id)}>
    <Left>
      <Thumbnail source={image} />
    </Left>
    <Body style={{ paddingTop: 16, paddingBottom: 16 }}>
      <Text style={{ paddingBottom: 8 }}>{name}</Text>
      <Text note>{`${contacts.length} partecipanti`}</Text>
    </Body>
    <Right style={{ paddingTop: 16, paddingBottom: 16 }} />
  </ListItem>
        )}
      /> */}
    </Content>
  </Container>
);

export default Groups;
