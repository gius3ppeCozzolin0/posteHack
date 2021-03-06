import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';
import { View, Image, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Header from './Header';
import YellowButton from './YellowButton';

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
  buttonStyle: { alignSelf: 'center' },
  textButton: {
    color: '#0047BB',
    fontSize: 16,
  },
  textButtonUnderline: {
    textDecorationLine: 'underline',
    color: '#0047BB',
    marginTop: 0,
    fontSize: 16,
  },
  sliderText: {
    marginBottom: 30,
    textAlign: 'center',
    color: '#0047BB',
    fontSize: 21,
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'rgba(0, 71, 187, 0.7)',
  },
  inactiveDots: {
    backgroundColor: 'rgba(0, 71, 187, 0.2)',
  },
  yellowBtn: {
    backgroundColor: '#EEDD00',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    flex: 1,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      entries: [
        {
          title: 'Netflix',
          illustration: require('../../images/pie_01.png'),
        },
        {
          title: 'Bolletta',
          illustration: require('../../images/pie_02.png'),
        },
        {
          title: 'Cena',
          illustration: require('../../images/pie_03.png'),
        },
        {
          title: 'Pranzo',
          illustration: require('../../images/pie_04.png'),
        },
      ],
    };
    this.pagination = this.pagination.bind(this);
    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
  }

  updateCurrentSlide(index) {
    this.setState({
      activeSlide: index,
    });
  }
  renderItem({ item, index }) {
    const { height, width } = Dimensions.get('window');
    return (
      <TouchableHighlight onPress={() => Actions.transactions({ match: { params: { groupId: 1, expenseId: 1 } } })}>

        <View
          style={{
          width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
          key={index}
        >
          <Text style={styles.sliderText}>{item.title}</Text>
          <Image style={{ width: 220, height: 220 }} source={item.illustration} />
        </View>
      </TouchableHighlight>
    );
  }

  pagination() {
    const { entries, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent' }}
        dotStyle={styles.dots}
        inactiveDotStyle={styles.inactiveDots}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        tappableDots={false}
      />
    );
  }

  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <Container style={styles.mainBG}>
        <Header showLogo />

        <Content contentContainerStyle={styles.content} padder>
          <Text style={{ paddingBottom: 12, fontSize: 16 }} note>
            Utlimi pagamenti
          </Text>
          <Carousel
            ref={(c) => {
              this.carousel = c;
            }}
            data={this.state.entries}
            renderItem={this.renderItem}
            sliderWidth={width}
            siderHeight={height - 300}
            itemWidth={width}
            itemHeight={height - 300}
            onSnapToItem={(index) => {
              this.updateCurrentSlide(index);
            }}
          />
          {this.pagination()}
          <Button transparent onPress={Actions.payments} style={styles.buttonStyle}>
            <Text style={styles.textButtonUnderline}>Vedi tutti</Text>
          </Button>
          <YellowButton small onPress={Actions.pay} label="Nuovo pagamento" />
        </Content>
      </Container>
    );
  }
}
export default Home;
