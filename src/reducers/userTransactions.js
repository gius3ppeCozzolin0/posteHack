
const initialState = {
  items: {
    1: {
      id: 1,
      userId: 1,
      transactionId: 1,
      failed: true,
    },
    2: {
      id: 2,
      userId: 1,
      transactionId: 2,
      failed: true,
    },
    3: {
      id: 3,
      userId: 1,
      transactionId: 3,
      failed: true,
    },
    4: {
      id: 4,
      userId: 2,
      transactionId: 1,
      failed: true,
    },
    5: {
      id: 5,
      userId: 2,
      transactionId: 2,
      failed: true,
    },
    6: {
      id: 6,
      userId: 2,
      transactionId: 3,
      failed: true,
    },
    7: {
      id: 7,
      userId: 3,
      transactionId: 1,
      failed: true,
    },
    8: {
      id: 8,
      userId: 3,
      transactionId: 2,
      failed: true,
    },
    9: {
      id: 9,
      userId: 3,
      transactionId: 3,
      failed: true,
    },
    10: {
      id: 10,
      userId: 4,
      transactionId: 1,
      failed: true,
    },
    11: {
      id: 11,
      userId: 4,
      transactionId: 2,
      failed: true,
    },
    12: {
      id: 12,
      userId: 4,
      transactionId: 3,
      failed: true,
    },
    13: {
      id: 13,
      userId: 5,
      transactionId: 1,
      failed: true,
    },
    14: {
      id: 14,
      userId: 5,
      transactionId: 2,
      failed: true,
    },
    15: {
      id: 15,
      userId: 5,
      transactionId: 3,
      failed: true,
    },
    16: {
      id: 16,
      userId: 6,
      transactionId: 1,
      failed: true,
    },
    17: {
      id: 17,
      userId: 6,
      transactionId: 2,
      failed: true,
    },
    18: {
      id: 18,
      userId: 6,
      transactionId: 3,
      failed: true,
    },
  },
};

const userTransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userTransactionsReducer;
