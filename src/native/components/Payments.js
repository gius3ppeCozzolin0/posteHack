import React, { Component } from 'react';
import {
  Body,
  Container,
  Content,
  Left,
  List,
  ListItem,
  Right,
  Text,
  Thumbnail,
  Tab,
  Tabs,
  View,
} from 'native-base';
import Header from './Header';

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['TUTTI', 'APERTI', 'COMPLETATI'],
    };
  }
  render() {
    const { tabs } = this.state;
    return (
      <Container>
        <Header title="Lista dei pagamenti" />
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

export default Payments;
