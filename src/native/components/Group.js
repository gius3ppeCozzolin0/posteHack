import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Text, Thumbnail, View } from 'native-base';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
  parentItemRow: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
  },
  itemRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomColor: 'rgb(224,224,224)',
    borderBottomWidth: 1,
  },
  note: {
    fontSize: 13,
    color: 'rgb(189,189,189)',
    flex: 1,
  },
});

const onPress = (groupId, expenseId) =>
  Actions.transactions({ match: { params: { groupId, expenseId } } });

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['PAGAMENTI', 'PARTECIPANTI'],
      group: props.groupss[props.match.params.id],
    };

    this.renderExpense = this.renderExpense.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress(expenseId) {
    Actions.transactions({ match: { params: { expenseId } } });
  }

  renderExpense(expenseId) {
    const { expenses } = this.props;
    const expense = expenses[expenseId];

    return (
      <TouchableHighlight key={expense.id} onPress={() => this.onPress(expense.id)}>
        <View style={styles.parentItemRow} avatar>
          <View style={styles.itemRow} avatar>
            <View style={{ width: 100 }}>
              <Thumbnail source={expense.image} />
            </View>
            <View>
              <Text style={{ paddingBottom: 8 }}>{expense.title}</Text>
              <Text note>{expense.subtitle}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    const { tabs, group } = this.state;
    const { contacts, expenses } = this.props;
    return (
      <Container style={styles.mainBG}>
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
                  <View style={{ paddingTop: 20, backgroundColor: '#f1f1f1' }}>
                    {group.expenses.map(this.renderExpense)}
                  </View>
                )}
                {tab === 'PARTECIPANTI' && (
                  <View style={{ paddingTop: 20, backgroundColor: '#f1f1f1' }}>
                    {group.contacts.map(id => (
                      <View key={id} style={styles.parentItemRow} avatar>
                        <View style={styles.itemRow} avatar>
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
