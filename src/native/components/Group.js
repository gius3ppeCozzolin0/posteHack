import React, { Component } from 'react';
import {
  Container,
  Content,
  Tab,
  Tabs,
  Text,
  View,
  Body,
  Left,
  List,
  ListItem,
  Right,
  Thumbnail,
} from 'native-base';
import { StyleSheet, TouchableHighlight } from 'react-native';
import Header from './Header';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  itemRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: 'rgb(224,224,224)',
    borderBottomWidth: 1,
  },
  note: {
    fontSize: 13,
    color: 'rgb(189,189,189)',
    flex: 1,
  },
});

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['PAGAMENTI', 'PARTECIPANTI'],
      group: props.groups.find(({ id }) => id === props.match.params.id),
    };
  }
  render() {
    const { tabs, group } = this.state;
    const { contacts } = this.props;
    return (
      <Container>
        <Header title={group.name} showBack />
        <Content>
          <Tabs
            edgeHitWidth={0.2}
            springTension={0.2}
            springFriction={0.2}
            tabBarUnderlineStyle={{ backgroundColor: 'rgb(0,71,187)', height: 2 }}
          >
            {tabs.map(tab => (
              <Tab
                key={tab}
                heading={tab}
                tabStyle={{ backgroundColor: '#fff' }}
                activeTabStyle={{ backgroundColor: '#fff', borderBottomColor: '#000' }}
                textStyle={{ color: 'rgb(66,66,66)' }}
                activeTextStyle={{ color: 'rgb(66,66,66)' }}
              >
                {tab === 'PAGAMENTI' && (
                  <View>
                    {group.expenses.map(({
 id, title, subtitle, image,
}) => (
  <TouchableHighlight key={id} onPress={() => onPress(id)}>
    <View style={styles.itemRow} avatar onPress={() => console.log(id)}>
      <View style={{ width: 100 }}>
        <Thumbnail source={image} />
      </View>
      <View>
        <Text style={{ paddingBottom: 8 }}>{title}</Text>
        <Text note>{subtitle}</Text>
      </View>
    </View>
  </TouchableHighlight>
                    ))}
                  </View>
                )}
                {tab === 'PARTECIPANTI' && (
                  <View>
                    {group.contacts.map(id => (
                      <View key={id} style={styles.itemRow} avatar onPress={() => console.log(id)}>
                        <View style={{ width: 100 }}>
                          <Thumbnail source={contacts[id].avatar} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ flex: 1 }}>
                            {`${contacts[id].name} ${contacts[id].lastname}`}
                          </Text>
                          <Text style={styles.note}>{contacts[id].date}</Text>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </Tab>
            ))}
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default Group;
