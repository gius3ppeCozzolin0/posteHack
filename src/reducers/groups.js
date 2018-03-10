/**
 * @typedef {Object} group
 * @property {number} id
 * @property {string} name
 * @property {Contact[]} contacts
 * @property {number} expense
 */

const initialState = {
  items: {
    1: {
      id: 1,
      name: 'my super group',
      contacts: [1, 2, 3, 4],
      expense: 100,
    },
    2: {
      id: 2,
      name: 'my super group',
      contacts: [1, 2],
      expense: 100,
    },
    3: {
      id: 3,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      expense: 100,
    },
    4: {
      id: 4,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5],
      expense: 100,
    },
    5: {
      id: 5,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6, 7, 8],
      expense: 100,
    },
  },
  order: [1, 2, 3, 4, 5],
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default groupsReducer;
