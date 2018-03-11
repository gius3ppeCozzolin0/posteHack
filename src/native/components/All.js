import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class All extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      entries: [
        {
          title: 'Beautiful and dramatic Antelope Canyon',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/UYiroysl.jpg',
        },
        {
          title: 'Earlier this morning, NYC',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
        },
        {
          title: 'White Pocket Sunset',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
          illustration: 'https://i.imgur.com/MABUbpDl.jpg',
        },
        {
          title: 'Acrocorinth, Greece',
          subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
          illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
        },
        {
          title: 'The lone tree, majestic landscape of New Zealand',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
        },
        {
          title: 'Middle Earth, Germany',
          subtitle: 'Lorem ipsum dolor sit amet',
          illustration: 'https://i.imgur.com/lceHsT6l.jpg',
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
    return (

      <View key={index}>
        <Text>{item.title}</Text>
        <TouchableHighlight onPress={Actions.payments}>
          <Image source={require('../../images/meme-1.png')} />
        </TouchableHighlight>
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
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots
        carouselRef={this.carousel}
      />
    );
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Carousel
            ref={(c) => {
              this.carousel = c;
            }}

            data={this.state.entries}
            renderItem={this.renderItem}
            sliderWidth={450}
            siderHeight={600}
            itemWidth={450}
            itemHeight={580}
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
export default All;
