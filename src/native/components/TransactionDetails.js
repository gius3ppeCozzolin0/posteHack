import React, { Component } from 'react';
import { Container, Content, Text, Thumbnail, View } from 'native-base';
import { StyleSheet } from 'react-native';

import Header from './Header';

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

class TransactionDetails extends Component {
  constructor(props) {
    super(props);

    console.log('hehehehehehhehe', props.match.params);
    console.log('propspspspsp', props);
    this.state = {
      transaction: props.transactions[props.match.params.transactionId],
      expense: props.expenses[props.match.params.expenseId],
    };

    this.renderDescription = this.renderDescription.bind(this);
    this.renderUserTransactions = this.renderUserTransactions.bind(this);
    this.renderUserTransaction = this.renderUserTransaction.bind(this);
  }

  renderDescription() {
    const { expense, transaction } = this.state;

    return (
      <View>
        <View style={{
        backgroundColor: '#EEDD00',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
}}
        >
          <Thumbnail source={transaction.image} />
          <View style={{
paddingTop: 16,
textAlign: 'center',
flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
}}
          >
            <Text style={{ fontSize: 18 }}>{`Hai pagato ${transaction.quantity}`}</Text>
            <Text style={{ fontSize: 18 }}>{`a ${expense.recipient}`}</Text>
          </View>
        </View>
        <View />
      </View>
    );
  }

  renderUserTransaction(userTransactionId) {
    const { userTransactions, contacts } = this.props;
    const userTransaction = userTransactions[userTransactionId];
    const contact = contacts[userTransaction.userId];

    return (
      <View key={userTransactions.id} style={styles.itemRow} avatar >
        <View>
          <Text style={{ paddingBottom: 8 }}>{`${contact.name} ${contact.lastname}`}</Text>
          {
            userTransaction.failed ?
              <Text style={{ flex: 1 }}>Non pagato</Text> : <Text>Pagato</Text>
          }
        </View>
      </View>
    );
  }

  renderUserTransactions() {
    const { transaction } = this.state;

    return (
      <View style={{ paddingTop: 20 }}>
        {transaction.userTransactions.map(this.renderUserTransaction)}
      </View>
    );
  }

  render() {
    const { transaction } = this.state;

    return (
      <Container style={styles.mainBG}>
        <Header title={transaction.title} showBack />
        <Content>
          {this.renderDescription()}
          {this.renderUserTransactions()}
        </Content>
      </Container>
    );
  }
}

export default TransactionDetails;
