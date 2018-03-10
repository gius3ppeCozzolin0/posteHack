import React from 'react';
import {FlatList,} from 'react-native';
import {Container, Content, Text,} from 'native-base';
import Spacer from './Spacer';

const Groups = () => (
  <Container>
    <Content padder>
      <FlatList
        numColumns={2}
        data={[{ image: 'whatever', title: 'CIAONEEE' }]}
        renderItem={({ item }) => {
            console.log('item', item);
            return (
              <Text>{item.title}</Text>
            );
          }}
      />

      <Spacer size={20} />
    </Content>
  </Container>
);

export default Groups;
