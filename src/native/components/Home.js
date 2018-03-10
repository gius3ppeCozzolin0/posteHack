import React, { Component } from 'react';
import { Container, Content, Text, Button } from 'native-base';
import { Dimensions, StyleSheet } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Header from './Header';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Image } from 'react-native';

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
  buttonStyle: { alignSelf: 'center' },
  textButton: {
    textDecorationLine: 'underline',
    color: '#0047BB',
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
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
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
          illustration: require('../../images/pie.png'),
        },
        {
          title: 'Earlier this morning, NYC',
          illustration: require('../../images/pie.png'),
        },
        {
          title: 'White Pocket Sunset',
          illustration: require('../../images/pie.png'),
        },
        {
          title: 'Acrocorinth, Greece',
          illustration: require('../../images/pie.png'),
        },
        {
          title: 'The lone tree, majestic landscape of New Zealand',
          illustration: require('../../images/pie.png'),
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
      <View
        style={{
          width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        key={index}
      >
        <Text style={styles.sliderText}>{item.title}</Text>
        <Image style={{ width: width - 114, height: width - 114 }} source={item.illustration} />
      </View>
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
        <Header title="Home" />
        <Content contentContainerStyle={styles.content} padder>
          <Carousel
            ref={(c) => {
              this.carousel = c;
            }}
            data={this.state.entries}
            renderItem={this.renderItem}
            sliderWidth={width}
            siderHeight={height - 400}
            itemWidth={width}
            itemHeight={height - 400}
            onSnapToItem={(index) => {
              this.updateCurrentSlide(index);
            }}
          />
          {this.pagination()}
          <Button
            transparent
            onPress={() => {
              console.log('vedi tutti');
            }}
            style={styles.buttonStyle}
          >
            <Text style={styles.textButton}>Vedi tutti</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default Home;
