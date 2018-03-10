import React, { Component } from 'react';
import { Button, Container, Content, Text } from 'native-base';
import { Dimensions } from 'react-native';

import { Actions } from 'react-native-router-flux';
import Header from './Header';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Image } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      entries: [
        {
          title: 'Netflix',
          illustration: 'https://i.imgur.com/UYiroysl.jpg',
        },
        {
          title: 'Earlier this morning, NYC',
          illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
        },
        {
          title: 'White Pocket Sunset',
          illustration: 'https://i.imgur.com/MABUbpDl.jpg',
        },
        {
          title: 'Acrocorinth, Greece',
          illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
        },
        {
          title: 'The lone tree, majestic landscape of New Zealand',
          illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
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
      <View key={index}>
        <Text
          style={{
            marginBottom: 30,
            textAlign: 'center',
            color: '#0047BB',
            fontSize: 21,
          }}
        >
          {item.title}
        </Text>
        <Image style={{ width, height: height - 260 }} source={{ uri: item.illustration }} />
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
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          marginHorizontal: 1,
          backgroundColor: 'rgba(0, 71, 187, 0.7)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(0, 71, 187, 0.2)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={false}
      />
    );
  }

  render() {
    const { height, width } = Dimensions.get('window');
    console.log(height, 'cjdhf');
    return (
      <Container>
        <Header title="Home" />
        <Content contentContainerStyle={{ alignItems: 'center' }} padder>
          <Carousel
            ref={(c) => {
              this.carousel = c;
            }}
            data={this.state.entries}
            renderItem={this.renderItem}
            sliderWidth={width}
            siderHeight={height - 260}
            itemWidth={width}
            itemHeight={height - 260}
            onSnapToItem={(index) => {
              this.updateCurrentSlide(index);
            }}
          />
          {this.pagination()}
        </Content>
      </Container>
    );
  }
}
export default Home;
