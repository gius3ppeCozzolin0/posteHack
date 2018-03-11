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
      name: 'Coinquilini',
      contacts: [1, 2, 3, 4],
      expenses: [1, 4, 6],
      image: require('../images/groups/coinquilini.jpg'),
    },
    2: {
      id: 2,
      name: 'Famiglia',
      contacts: [1, 2, 5],
      expenses: [6, 7],
      image: require('../images/groups/family.jpg'),
    },
    3: {
      id: 3,
      name: 'Colleghi',
      contacts: [1, 2, 3, 4, 5, 6],
      expenses: [3, 5],
      image: require('../images/groups/colleghi.jpg'),
    },
    4: {
      id: 4,
      name: 'Amici del cuore',
      contacts: [1, 2, 3, 4, 5],
      expenses: [2, 3, 5],
      image: require('../images/groups/amiciDelCuore.jpg'),
    },
    5: {
      id: 5,
      name: 'Condomini',
      contacts: [1, 2, 3, 4, 5, 6],
      expenses: [8],
      image: require('../images/groups/condomini.jpg'),
    },
  },
  order: [1, 2, 3, 4, 5],
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
