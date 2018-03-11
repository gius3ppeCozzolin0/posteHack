import React, { Component } from 'react';
import { Container, Content, Text, Thumbnail, View } from 'native-base';
import { StyleSheet } from 'react-native';

import Header from './Header';

const styles = StyleSheet.create({
  mainBG: {
    backgroundColor: '#f1f1f1',
  },
  parentItemRow: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
  },
  itemRow: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
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
    this.state = {
      transaction: props.transactions[props.match.params.transactionId],
      expense: props.expenses[props.match.params.expenseId],
    };

    this.renderDescription = this.renderDescription.bind(this);
    this.renderCardInfo = this.renderCardInfo.bind(this);

    this.renderUserTransactions = this.renderUserTransactions.bind(this);
    this.renderUserTransaction = this.renderUserTransaction.bind(this);
  }

  renderDescription() {
    const { expense, transaction } = this.state;

    return (
      <View>
        <View
          style={{
            backgroundColor: '#EEDD00',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          <Thumbnail source={expense.image} />
          <View
            style={{
              paddingTop: 16,
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
      <View style={styles.parentItemRow} key={userTransactionId}>
        <View style={styles.itemRow} avatar>
          <Text style={{ flex: 1, paddingTop: 10, paddingBottom: 4 }}>
            {`${contact.name} ${contact.lastname}`}
          </Text>
          {userTransaction.failed ? (
            <Text style={{ flex: 1, textAlign: 'right', color: 'rgb(255,44,81)' }}>Non pagato</Text>
          ) : (
            <Text style={{ flex: 1, textAlign: 'right', color: 'rgb(0,200,83)' }}>Pagato</Text>
          )}
        </View>
      </View>
    );
  }

  renderCardInfo() {
    const {
      transaction: {
        card, date, quantity, category,
      },
    } = this.state;
    const CardNumbers = card.split(' ')[card.split(' ').length - 1];
    return (
      <View style={styles.parentItemRow}>
        <View style={styles.itemRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.note}>Con</Text>
            <Text style={{ paddingTop: 8 }}>{`Carta(${CardNumbers})`}</Text>
          </View>
          <View style={{ flex: 1, alignSelf: 'flex-end' }}>
            <Text
              style={{
                flex: 1,
                textAlign: 'right',
                paddingTop: 28,
                alignSelf: 'flex-end',
              }}
            >
              {quantity}
            </Text>
          </View>
        </View>
        <View style={styles.itemRow}>
          <View>
            <Text style={styles.note}>Tipo di transazione</Text>
            <Text style={{ paddingTop: 8 }}>{category}</Text>
          </View>
        </View>
        <View style={styles.itemRow}>
          <View>
            <Text style={styles.note}>Quando</Text>
            <Text style={{ paddingTop: 8 }}>{date}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderUserTransactions() {
    const { transaction } = this.state;

    return (
      <View>
        <Text
          style={{
            color: 'rgb(66, 66, 66)',
            fontSize: 13,
            padding: 16,
            paddingTop: 24,
            paddingBottom: 20,
          }}
        >
          Dettagli pagamento
        </Text>

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
          {this.renderCardInfo()}
          {this.renderUserTransactions()}
        </Content>
      </Container>
    );
  }
}

export default TransactionDetails;
