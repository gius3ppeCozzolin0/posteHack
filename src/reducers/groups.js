/**
 * @typedef {Object} group
 * @property {number} id
 * @property {string} name
 * @property {Contact[]} contacts
 * @property {number} expense
 */

const initialState = {
  selectedGroup: null,
  items: {
    1: {
      id: 1,
      name: 'my super group',
      contacts: [1, 2, 3, 4],
      expenses: [1, 2, 3],
      image: require('../images/faccia_di_merda.jpg'),
    },
    2: {
      id: 2,
      name: 'my super group',
      contacts: [1, 2, 5],
      expenses: [1, 2, 3],
      image: require('../images/faccia_di_merda.jpg'),
    },
    3: {
      id: 3,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6],
      expenses: [1, 2, 3],
      image: require('../images/faccia_di_merda.jpg'),
    },
    4: {
      id: 4,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5],
      expenses: [1, 2, 3],
      image: require('../images/faccia_di_merda.jpg'),
    },
    5: {
      id: 5,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6],
      expenses: [1, 2, 3],
      image: require('../images/faccia_di_merda.jpg'),
    },
    6: {
      id: 6,
      name: 'my super group',
      contacts: [1, 2, 4],
      expenses: [1, 2, 3],
      image: require('../images/faccia_di_merda.jpg'),
    },
    7: {
      id: 7,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6],
      expenses: [1, 2, 3],
      image: require('../images/faccia_di_merda.jpg'),
    },
  },
  order: [1, 2, 3, 4, 5, 6, 7],
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GROUPS/SELECT_GROUP': {
      return {
        ...state,
        selectedGroup: action.groupId,
      };
    }
    default:
      return state;
  }
};

export default groupsReducer;
