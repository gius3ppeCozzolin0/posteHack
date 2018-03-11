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
import { Dimensions, StyleSheet } from 'react-native';
import Header from './Header';

const styles = StyleSheet.create({
  title: { fontSize: 16 },
  subtitle: { color: 'rgb(189,189,189)', fontSize: 13, marginTop: 8 },
  quantity: { fontSize: 16, textAlign: 'right' },
  innerInfo: {
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomColor: 'rgb(224,224,224)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
  },
});

class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: ['TUTTI', 'APERTI', 'COMPLETATI'],
      content: [
        [
          { title: 'Abbonamento Netflix', subtitle: '18.02.2018', quantity: '6,70€' },
          { title: 'Pagamento bolletta', subtitle: '11.02.2018', quantity: '16,30€' },
          { title: 'Pagamento cena', subtitle: '18.01.2018', quantity: '40€' },
          { title: 'Pagamento pranzo', subtitle: '17.01.2018', quantity: '23,50€' },
          { title: 'Viaggio', subtitle: '15.01.2018', quantity: '665,75€' },
          { title: 'Spesa', subtitle: '13.01.2018', quantity: '45,33€' },
          { title: 'Pagamenti generici', subtitle: '03.01.2018', quantity: '50€' },
        ],
        [{ title: 'Abbonamento Netflix', subtitle: 'subscription', quantity: '6,70€' }],
        [
          { title: 'Pagamento bolletta', subtitle: '11.02.2018', quantity: '16,30€' },
          { title: 'Pagamento cena', subtitle: '18.01.2018', quantity: '40€' },
          { title: 'Pagamento pranzo', subtitle: '17.01.2018', quantity: '23,50€' },
          { title: 'Viaggio', subtitle: '15.01.2018', quantity: '665,75€' },
          { title: 'Spesa', subtitle: '13.01.2018', quantity: '45,33€' },
          { title: 'Pagamenti generici', subtitle: '03.01.2018', quantity: '50€' },
        ],
      ],
    };
  }
  render() {
    const { tabs } = this.state;
    const { height } = Dimensions.get('window');

    return (
      <Container>
        <Header title="Lista dei pagamenti" showBack />
        <Content>
          <Tabs
            edgeHitWidth={0.2}
            springTension={0.2}
            springFriction={0.2}
            tabBarUnderlineStyle={{ backgroundColor: 'rgb(0,71,187)', height: 2 }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={tab}
                heading={tab}
                tabStyle={{ backgroundColor: '#fff' }}
                activeTabStyle={{ backgroundColor: '#fff', borderBottomColor: '#000' }}
                textStyle={{ color: 'rgb(189,189,189)', fontSize: 14 }}
                activeTextStyle={{ color: 'rgb(66,66,66)', fontSize: 14 }}
              >
                <View style={{ height: height - 100, backgroundColor: '#f1f1f1', paddingTop: 16 }}>
                  {this.state.content[index].map(({ title, subtitle, quantity }, index) => (
                    <View key={`${title}-${index}`} style={styles.info}>
                      <View style={styles.innerInfo}>
                        <View style={{ width: '70%' }}>
                          <Text style={styles.title}>{title}</Text>
                          <Text style={styles.subtitle}>{subtitle}</Text>
                        </View>
                        <View style={{ width: '30%' }}>
                          <Text style={styles.quantity}>{quantity}</Text>
                        </View>
                      </View>
                    </View>
                  ))}
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
