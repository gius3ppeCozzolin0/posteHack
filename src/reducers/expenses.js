const initialState = {
  items: {
    1: {
      id: 1,
      title: 'Abbonamento Netflix',
      recipient: 'Netflix',
      image: require('../images/expenses/netflix.png'),
      subtitle: 'ricorrente',
      transactions: [1, 2, 3],
    },
    2: {
      id: 2,
      title: 'Spotify con gli amici',
      recipient: 'Netflix',
      image: require('../images/expenses/spotify.png'),
      subtitle: 'ricorrente',
      transactions: [1, 2, 3],
    },
    3: {
      id: 3,
      title: 'Sabato sera pizza',
      recipient: 'Pizzeria Nazionale',
      image: require('../images/expenses/entertainment.png'),
      subtitle: 'occasionale',
      transactions: [1, 2, 3],
    },
    4: {
      id: 4,
      title: 'Internet super veloce',
      recipient: 'Fastweb',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrente',
      transactions: [1, 2, 3],
    },
    5: {
      id: 5,
      title: 'Schedine della domenica',
      recipient: 'Snai',
      image: require('../images/expenses/entertainment.png'),
      subtitle: 'ricorrente',
      transactions: [1, 2, 3],
    },
    6: {
      id: 6,
      title: 'Bolletta energia',
      recipient: 'Enel',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrente',
      transactions: [1, 2, 3],
    },
    7: {
      id: 7,
      title: 'Bolletta gas',
      recipient: 'a2a',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrente',
      transactions: [1, 2, 3],
    },
    8: {
      id: 8,
      title: 'Riparazione tetto',
      recipient: 'Tutti tetti s.r.l.',
      image: require('../images/logos/netflix.png'),
      subtitle: 'ricorrente',
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
