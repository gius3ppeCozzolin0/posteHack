/**
 * @typedef {Object} Contact
 * @property {number} id
 * @property {string} name
 * @property {Contact[]} contacts
 * @property {number} expense
 */

const initialState = {
  items: {
    1: {
      id: 1,
      name: 'Piero',
      lastname: 'Rossi',
      date: '14.02.2018',
      avatar: require('../images/faccia_di_merda.jpg'),
    },
    2: {
      id: 2,
      name: 'Martina',
      lastname: 'Gialli',
      date: '14.02.2018',
      avatar: require('../images/faccia_di_merda.jpg'),
    },
    3: {
      id: 3,
      name: 'Mario',
      lastname: 'Verdi',
      date: '14.02.2018',
      avatar: require('../images/faccia_di_merda.jpg'),
    },
    4: {
      id: 4,
      name: 'Meghan',
      lastname: 'Bianchi',
      date: '14.02.2018',
      avatar: require('../images/faccia_di_merda.jpg'),
    },
    5: {
      id: 5,
      name: 'Vito',
      lastname: 'Lapalestra',
      date: '14.02.2018',
      avatar: require('../images/faccia_di_merda.jpg'),
    },
    6: {
      id: 6,
      name: 'Francesca',
      lastname: 'Brufoli',
      date: '14.02.2018',
      avatar: require('../images/faccia_di_merda.jpg'),
    },
  },
  order: [1, 2, 3, 4, 5, 6],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactsReducer;
