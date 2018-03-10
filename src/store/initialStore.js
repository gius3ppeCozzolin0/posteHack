/**
 * @typedef {Object} group
 * @property {number} id
 * @property {string} name
 * @property {Contact[]} contacts
 * @property {number} expense
 */

const initialState = {
  groups: {
    1: {
      id: 1,
      name: 'my super group',
      contacts: [],
      expense: 100,
    },
    2: {
      id: 2,
      name: 'my super group',
      contacts: [],
      expense: 100,
    },
    3: {
      id: 3,
      name: 'my super group',
      contacts: [],
      expense: 100,
    },
    4: {
      id: 4,
      name: 'my super group',
      contacts: [],
      expense: 100,
    },
    5: {
      id: 5,
      name: 'my super group',
      contacts: [],
      expense: 100,
    },
  },
  groupsOrder: [1, 2, 3, 4, 5],
};

export default initialState;
