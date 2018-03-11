import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, Text, View } from 'native-base';
import Header from './Header';
import { Actions } from 'react-native-router-flux';

class Group extends Component {
  constructor(props) {
    console.log('props', props);
    super(props);
    this.state = {
      tabs: ['PAGAMENTI', 'PARTECIPANTI'],
      group: props.groups.find(({ id }) => id === props.match.params.id),
    };
  }
  render() {
    const { tabs, group } = this.state;
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
                <View>
                  <Text>{tab}</Text>
                </View>
              </Tab>
            ))}
          </Tabs>
        </Content>
      </Container>
    );
  }
}

export default Group;
