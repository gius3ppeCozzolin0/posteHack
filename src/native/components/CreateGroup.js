import React from 'react';
import { Container, Content, Form, Item, Input, View, Text, Label, Icon } from 'native-base';
import { StyleSheet, FlatList, TouchableHighlight, Image, List } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-check-box';
import PosteHeader from './Header';
import YellowButton from './YellowButton';
import StepHeader from './StepHeader';

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#fff',
    paddingBottom: 36,
  },
  input: {
    marginBottom: 24,
  },
  checkbox: {},
  content: {
    marginTop: 30,
  },
  label: {
    color: '#bdbdbd',
    fontSize: 13,
    marginBottom: 16,
  },
  section: {
    marginBottom: 36,
  },
  radioBtn: {
    marginBottom: 24,
  },
  subtitle: {
    marginLeft: 38,
    marginTop: 8,
    paddingRight: 90,
    fontWeight: '300',
  },
  itemRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: 'rgb(224,224,224)',
    borderBottomWidth: 1,
  },
  list: {
    height: '50%',
  },
});

class CreateGroup extends React.Component {
  state = {
    contacts: [],
  };
  onRowClick = (id) => {
    this.setState({
      contacts: this.isSelected(id)
        ? this.state.contacts.filter(i => i !== id)
        : [...this.state.contacts, id],
    });
  };
  isSelected = id => this.state.contacts.includes(id);
  render() {
    return (
      <Container style={styles.mainBG}>
        <PosteHeader showExit title="Crea gruppo" />
        <StepHeader label="Nuovo gruppo" step="2/3" />
        <Content contentContainerStyle={styles.content} padder>
          <Form>
            <View style={styles.input}>
              <Item stackedLabel>
                <Label>Nome del gruppo</Label>
                <Input placeholderTextColor="#bdbdbd" />
              </Item>
            </View>
            <FlatList
              data={Object.values(this.props.contacts)}
              style={styles.list}
              renderItem={({ item: { id, name } }) => (
                <TouchableHighlight
                  key={id}
                  onPress={() => {
                      this.onRowClick(id);
                    }}
                >
                  <View style={styles.itemRow} avatar>
                    <View>
                      <Text style={{ paddingBottom: 8 }}>{name}</Text>
                    </View>
                    <View>
                      {this.isSelected(id) ? (
                        <Icon name="ios-checkbox" style={{ color: '#0047bb' }} />
                        ) : (
                          <Icon name="ios-checkbox-outline" style={{ color: '#0047bb' }} />
                        )}
                    </View>
                  </View>
                </TouchableHighlight>
                )}
            />

            <View style={styles.section}>
              <YellowButton label="Avanti" onPress={Actions.createPayment} />
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default CreateGroup;
