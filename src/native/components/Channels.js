import React from 'react';
import { Container, Content, Text, View, Label } from 'native-base';
import { Image, TouchableHighlight, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PosteHeader from './Header';

const { width, height } = Dimensions.get('window');
const slideWidthBig = width * 0.52;
const slideWidthSmall = width * 0.31;

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
  slideBig: {
    width: slideWidthBig + 8,
    height: 143,
    // other styles for the item container
  },
  slideInnerContainerBig: {
    width: slideWidthBig,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#424242',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: 'hidden',
    borderRadius: 6,
    backgroundColor: '#fff',
    // other styles for the inner container
  },
  logoBig: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  slideSmall: {
    width: slideWidthSmall + 8,
    height: slideWidthSmall,
    // other styles for the item container
  },
  slideInnerContainerSmall: {
    width: slideWidthSmall,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#424242',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 6,
    // other styles for the inner container
  },
  logoSmall: {
    width: 100,
    resizeMode: 'contain',
  },
  content: {
    marginTop: 30,
    flex: 1,
  },
  label: {
    color: '#424242',
    fontSize: 16,
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
  },
  flashBox: {
    width: '100%',
    height: height * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#424242',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    overflow: 'hidden',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  flashLogo: {
    width: 102,
    height: 72,
    marginBottom: 8,
    resizeMode: 'contain',
  },
});
class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entertaiment: [
        {
          illustration: require('../../images/logos/netflix.png'),
        },
        {
          illustration: require('../../images/logos/spotify.png'),
        },
        {
          illustration: require('../../images/logos/apple_music.png'),
        },
      ],
      utenze: [
        {
          illustration: require('../../images/logos/enel.png'),
        },
        {
          illustration: require('../../images/logos/fastweb.png'),
        },

        {
          illustration: require('../../images/logos/a2a.png'),
        },
      ],
    };
  }
  renderItemBig({ item, index }) {
    return (
      <View key={index} style={styles.slideBig}>
        <View style={styles.slideInnerContainerBig}>
          <TouchableHighlight onPress={Actions.form}>
            <Image style={styles.logoBig} source={item.illustration} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  renderItemSmall({ item, index }) {
    return (
      <View key={index} style={styles.slideSmall}>
        <View style={styles.slideInnerContainerSmall}>
          <TouchableHighlight onPress={Actions.form}>
            <Image style={styles.logoSmall} source={item.illustration} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
  render() {
    return (
      <Container style={styles.mainBG}>
        <PosteHeader showBack title="Nuovo pagamento" />
        <Content contentContainerStyle={styles.content} padder>
          <View style={styles.section}>
            <Label style={styles.label}>Crea un pagamento da zero</Label>
            <TouchableHighlight onPress={Actions.form}>
              <View style={styles.flashBox}>
                <Image style={styles.flashLogo} source={require('../../images/logos/card.png')} />
                <Text style={{ fontSize: 19 }}>Gestisci un gruppo</Text>
                <Text style={{ fontSize: 19 }}>fai pagamenti immediati</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.section}>
            <Label style={styles.label}>Entertaiment</Label>
            <FlatList
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.entertaiment}
              renderItem={this.renderItemBig}
            />
          </View>
          <View style={styles.section}>
            <Label style={styles.label}>Utenze</Label>
            <FlatList
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.utenze}
              renderItem={this.renderItemSmall}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
export default Channels;
