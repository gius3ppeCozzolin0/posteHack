const initialState = {
  items: {
    1: {
      id: 1,
      title: 'Pagamento 01',
      date: '18.02.2018',
      quantity: '6,70€',
      image: require('../images/logos/netflix.png'),
      card: '4242 4242 4242 4242',
      category: 'Abbonamento',
      userTransactions: [1, 4, 7, 10, 13, 16],
    },
    2: {
      id: 2,
      title: 'Pagamento 02',
      date: '14.02.2018',
      quantity: '55€',
      image: require('../images/logos/netflix.png'),
      card: '4242 4242 4242 4242',
      category: 'Acquisto',
      userTransactions: [2, 5, 8, 14, 17],
    },
    3: {
      id: 3,
      title: 'Pagamento 03',
      date: '11.02.2018',
      quantity: '5,10€',
      image: require('../images/logos/netflix.png'),
      card: '4242 4242 4242 4242',
      category: 'Acquisto',
      userTransactions: [3, 6, 9, 15, 18],
    },
  },
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default transactionsReducer;
