import groupsReducer from './groups';
import contactsReducer from './contacts';
import expensesReducer from './expenses';
import transactionsReducer from './transactions';
import userTransactionsReducer from './userTransactions';
import channelsReducer from './channels';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default {
  groups: groupsReducer,
  contacts: contactsReducer,
  expenses: expensesReducer,
  transactions: transactionsReducer,
  userTransactions: userTransactionsReducer,
  channel: channelsReducer,
};
