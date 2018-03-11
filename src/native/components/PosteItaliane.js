import React from 'react';
import { Text, View } from 'native-base';
import { Image, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

class PosteItaliane extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={Actions.home}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../images/poste.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
export default PosteItaliane;
