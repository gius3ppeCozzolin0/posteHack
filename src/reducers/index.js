import groupsReducer from './groups';
import contactsReducer from './contacts';

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
};
