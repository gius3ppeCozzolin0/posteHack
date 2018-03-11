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
});

class CreatePayment extends React.Component {
  state = {
    ricorrente: false,
    selectedSegment: null,
    equal: true,
  };

  onRicorrenteClick = () => {
    this.setState({ ricorrente: !this.state.ricorrente });
  };
  onUq = () => {
    this.setState({ equal: true });
  };
  onNotUq = () => {
    this.setState({ equal: false });
  };
  setSelectedOption = (selectedSegment) => {
    this.setState({
      selectedSegment,
    });
  };

  renderOption = (option, selected, onSelect, index) => {
    const style = selected ? { fontWeight: 'bold' } : {};

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <View>
          <Text style={style}>{option}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  renderContainer = optionNodes => <View>{optionNodes}</View>;
  renderReapet() {
    const { channel } = this.props;
    const options = ['Settimanale', 'Mensile', 'Annuale'];

    return !channel.flash ? (
      <View style={styles.section}>
        <Label style={styles.label}>Tipologia di pagamento</Label>
        <CheckBox
          checkBoxColor="#0047bb"
          rightTextView={
            <Text style={{ fontSize: 19, fontWeight: 'bold', marginLeft: 5 }}>Ricorrente</Text>
          }
          isChecked={this.state.ricorrente}
          onClick={this.onRicorrenteClick}
        />
        <Text
          style={{
            marginLeft: 30,
            marginBottom: 36,
            marginTop: 8,
            paddingRight: 50,
            fontWeight: '300',
          }}
        >
          La cadenza del pagamento avverrà con una frequenza mesile
        </Text>
        {this.state.ricorrente && (
          <SegmentedControls
            options={options}
            onSelection={this.setSelectedOption}
            selectedOption={this.state.selectedSegment}
          />
        )}
      </View>
    ) : null;
  }
  render() {
    return (
      <Container style={styles.mainBG}>
        <PosteHeader showExit title="Crea pagamento" />
        <StepHeader label="Imposta il pagamento" step="2/2" />
        <Content contentContainerStyle={styles.content} padder>
          <Form>
            <View style={styles.input}>
              <Item stackedLabel>
                <Label>Titolo</Label>
                <Input placeholderTextColor="#bdbdbd" placeholder="Inserisci un titolo" />
              </Item>
            </View>
            <View style={styles.input}>
              <Item stackedLabel>
                <Label>Quanto vuoi richiedere?</Label>
                <Input placeholderTextColor="#bdbdbd" placeholder="Inserisci l'importo" />
              </Item>
            </View>
            {this.renderReapet()}

            <View style={styles.section}>
              <Label style={styles.label}>Suddivisione del pagamento</Label>
              <View flex style={styles.radioBtn}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <RadioButton
                    animation="bounceIn"
                    isSelected={this.state.equal}
                    onPress={this.onUq}
                  />
                  <Text style={{ marginLeft: 8, fontSize: 19, fontWeight: 'bold' }}>
                    Parti uguali
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
                    isSelected={!this.state.equal}
                    onPress={this.onNotUq}
                  />
                  <Text style={{ marginLeft: 8, fontSize: 19, fontWeight: 'bold' }}>
                    Divisi per quote
                  </Text>
                </View>
                <Text style={styles.subtitle}>
                  La somma totale potrà essere divisa in percentuali tra i diversi partecipanti
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <YellowButton label="Avanti" onPress={Actions.chooseGroup} />
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default CreatePayment;
