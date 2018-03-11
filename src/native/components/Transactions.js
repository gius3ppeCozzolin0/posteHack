import React, { Component } from 'react';
import { Container, Content, Text, View } from 'native-base';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const onPress = (expenseId, transactionId) => Actions.transactionDetails({
  match: {
    params: {
      expenseId,
      transactionId,
    },
  },
});

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
  itemRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: 'rgb(224,224,224)',
    borderBottomWidth: 1,
  },
  note: {
    fontSize: 13,
    color: 'rgb(189,189,189)',
    flex: 1,
  },
});

class Transactions extends Component {
  constructor(props) {
    super(props);
    console.log('-----Transactions props.match', props.match, props.groupss);
    this.state = {
      expense: props.expenses[props.match.params.expenseId],
    };

    this.renderTransaction = this.renderTransaction.bind(this);
  }

  renderTransaction(transactionId) {
    const { transactions } = this.props;
    const { expense } = this.state;
    const transaction = transactions[transactionId];

    return (
      <TouchableHighlight key={transaction.id} onPress={() => onPress(expense.id, transaction.id)}>
        <View style={styles.itemRow} avatar >
          <View>
            <Text style={{ paddingBottom: 8 }}>{transaction.title}</Text>
            <Text note>{transaction.date}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    const { expense } = this.state;

    return (
      <Container style={styles.mainBG}>
        <Header title={expense.title} showBack />
        <Content style={{ paddingTop: 20 }}>
          {expense.transactions.map(this.renderTransaction)}
        </Content>
      </Container>
    );
  }
}

export default Transactions;
