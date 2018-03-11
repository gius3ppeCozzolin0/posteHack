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
      expenses: [
        {
          id: 1,
          title: 'Abbonamento Netflix',
          image: require('../images/logos/netflix.png'),
          subtitle: 'ricorrenza',
        },
      ],
      image: require('../images/faccia_di_merda.jpg'),
    },
    2: {
      id: 2,
      name: 'my super group',
      contacts: [1, 2],
      expenses: [
        {
          id: 2,
          title: 'Abbonamento Netflix',
          image: require('../images/logos/netflix.png'),
          subtitle: 'ricorrenza',
        },
      ],
      image: require('../images/faccia_di_merda.jpg'),
    },
    3: {
      id: 3,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      expenses: [
        {
          id: 3,
          title: 'Abbonamento Netflix',
          image: require('../images/logos/netflix.png'),
          subtitle: 'ricorrenza',
        },
      ],
      image: require('../images/faccia_di_merda.jpg'),
    },
    4: {
      id: 4,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5],
      expenses: [
        {
          id: 4,
          title: 'Abbonamento Netflix',
          image: require('../images/logos/netflix.png'),
          subtitle: 'ricorrenza',
        },
      ],
      image: require('../images/faccia_di_merda.jpg'),
    },
    5: {
      id: 5,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6, 7, 8],
      expenses: [
        {
          id: 5,
          title: 'Abbonamento Netflix',
          image: require('../images/logos/netflix.png'),
          subtitle: 'ricorrenza',
        },
      ],
      image: require('../images/faccia_di_merda.jpg'),
    },
    6: {
      id: 6,
      name: 'my super group',
      contacts: [1, 2],
      expenses: [
        {
          id: 6,
          title: 'Abbonamento Netflix',
          image: require('../images/logos/netflix.png'),
          subtitle: 'ricorrenza',
        },
      ],
      image: require('../images/faccia_di_merda.jpg'),
    },
    7: {
      id: 7,
      name: 'my super group',
      contacts: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      expenses: [
        {
          id: 7,
          title: 'Abbonamento Netflix',
          image: require('../images/logos/netflix.png'),
          subtitle: 'ricorrenza',
        },
      ],
      image: require('../images/faccia_di_merda.jpg'),
    },
  },
  order: [1, 2, 3, 4, 5, 6, 7],
};

const groupsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default groupsReducer;
