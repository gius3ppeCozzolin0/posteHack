import React from 'react';
import { connect } from 'react-redux';

import groupsActions from '../actions/groups';

const GroupsContainer = ({
  Layout,
  groups,
  groupss,
  contacts,
  match,
  expenses,
  transactions,
  userTransactions,
}) => (
  <Layout
    match={match}
    contacts={contacts}
    groups={groups}
    groupss={groupss}
    expenses={expenses}
    transactions={transactions}
    userTransactions={userTransactions}
  />
);

const mapStateToProps = (state) => {
  const groups = { ...state.groups.items };
  const contacts = { ...state.contacts.items };
  const groupsOrder = [...state.groups.order];
  const expenses = { ...state.expenses.items };
  const transactions = { ...state.transactions.items };
  const userTransactions = { ...state.userTransactions.items };

  return {
    groupss: groups,
    groups: groupsOrder.map(groupId => groups[groupId]),
    contacts,
    expenses,
    transactions,
    userTransactions,
  };
};

const mapDispatchToProps = dispatch => ({
  myAction: dispatch(groupsActions.myAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer);
