import React from "react";
import PropTypes from "prop-types";
import {
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Image
} from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Button
} from "native-base";
import { Actions } from "react-native-router-flux";
import Spacer from "./Spacer";

const Groups = () => {
  return (
    <Container>
      <Content padder>
        <FlatList
          numColumns={2}
          data={[{ image: "whatever", title: "CIAONEEE" }]}
          renderItem={({ item }) => (
            <Text>ciao</Text>
            /* <Card transparent style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody>
                <TouchableOpacity
                  style={{ flex: 1 }}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      borderRadius: 5
                    }}
                  />
                </TouchableOpacity>
              </CardItem>
              <CardItem cardBody>
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: "800" }}>{item.title}</Text>
                  <Spacer size={15} />
                  <Button block bordered small onPress={() => onPress(item)}>
                    <Text>View Recipe</Text>
                  </Button>
                  <Spacer size={5} />
                </Body>
              </CardItem>
            </Card> */
          )}
          // keyExtractor={keyExtractor}
          // refreshControl={
          //   <RefreshControl refreshing={loading} onRefresh={reFetch} />
          // }
        />

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

export default Groups;
