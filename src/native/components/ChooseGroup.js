import React from 'react';
import { Container, Content, Form, Item, Input, View, Button, Text, Label } from 'native-base';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-check-box';
import { SegmentedControls } from 'react-native-radio-buttons';
import RadioButton from 'react-native-radio-button';
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    flex: 1,
  },
  label: {
    color: '#bdbdbd',
    fontSize: 13,
    marginBottom: 16,
  },
  section: {
    marginBottom: 36,
    height: 300,
  },
  radioBtn: {
    marginBottom: 36,
  },
  subtitle: {
    marginLeft: 38,
    marginTop: 8,
    paddingRight: 90,
    fontWeight: '300',
  },
  submit: {
    marginTop: 100,
  },
});

class ChooseGroup extends React.Component {
  state = {
    create: true,
  };
  onNextClick = () => {
    if (this.state.create) {
      Actions.createGroup();
      return;
    }
    Actions.selectGroup();
  };
  render() {
    return (
      <Container style={styles.mainBG}>
        <PosteHeader showExit title="Crea pagamento" />
        <StepHeader label="Creazione gruppo" step="1/2" />

        <Content contentContainerStyle={styles.content} padder>
          <View style={styles.section}>
            <Label style={styles.label}>Scegli il gruppo</Label>
            <View flex style={styles.radioBtn}>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <RadioButton
                  animation="bounceIn"
                  isSelected={this.state.create}
                  onPress={() => this.setState({ create: true })}
                />
                <Text style={{ marginLeft: 8, fontSize: 19, fontWeight: 'bold' }}>
                  Nuovo gruppo
                </Text>
              </View>
              <Text style={styles.subtitle}>
                La somma totale sarà suddivisa ugualmente fra tutti i partecipanti del gruppo
              </Text>
            </View>
            <View flex style={styles.radioBtn}>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <RadioButton
                  animation="bounceIn"
                  isSelected={!this.state.create}
                  onPress={() => this.setState({ create: false })}
                />
                <Text style={{ marginLeft: 8, fontSize: 19, fontWeight: 'bold' }}>
                  Gruppo esistente{' '}
                </Text>
              </View>
              <Text style={styles.subtitle}>
                La somma totale potrà essere divisa in percentuali tra i diversi partecipanti
              </Text>
            </View>
          </View>
          <View style={styles.submit}>
            <YellowButton label="INVITA" onPress={this.onNextClick} />
          </View>
        </Content>
      </Container>
    );
  }
}
export default ChooseGroup;
