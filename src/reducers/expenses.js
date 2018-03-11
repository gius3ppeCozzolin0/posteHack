const initialState = {
  items: {
    1: {
      id: 1,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrenza',
      transactions: [1, 2, 3],
    },
    2: {
      id: 2,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrenza',
      transactions: [1, 2, 3],
    },
    3: {
      id: 3,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrenza',
      transactions: [1, 2, 3],
    },
    4: {
      id: 4,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrenza',
      transactions: [1, 2, 3],
    },
    5: {
      id: 5,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrenza',
      transactions: [1, 2, 3],
    },
    6: {
      id: 6,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrenza',
      transactions: [1, 2, 3],
    },
    7: {
      id: 7,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrenza',
      transactions: [1, 2, 3],
    },
  },
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default expensesReducer;
