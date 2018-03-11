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
      name: 'Veronica',
      lastname: 'Rossi',
      date: '14.02.2018',
      avatar: require('../images/contacts/personas_01.png'),
    },
    2: {
      id: 2,
      name: 'Mario',
      lastname: 'Gialli',
      date: '14.02.2018',
      avatar: require('../images/contacts/personas_02.png'),
    },
    3: {
      id: 3,
      name: 'Caterina',
      lastname: 'Verdi',
      date: '14.02.2018',
      avatar: require('../images/contacts/personas_03.png'),
    },
    4: {
      id: 4,
      name: 'Meghan',
      lastname: 'Bianchi',
      date: '14.02.2018',
      avatar: require('../images/contacts/personas_04.png'),
    },
    5: {
      id: 5,
      name: 'Vito',
      lastname: 'Marroni',
      date: '14.02.2018',
      avatar: require('../images/contacts/personas_05.png'),
    },
    6: {
      id: 6,
      name: 'Joshua',
      lastname: 'Schwarz',
      date: '14.02.2018',
      avatar: require('../images/contacts/personas_06.png'),
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
