const initialState = {
  flash: false,
  name: null,
};

const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANNELS/CHOOSE':
      return {
        ...state,
        name: action.name,
        flash: action.flash,
      };
    default:
      return state;
  }
};

export default channelsReducer;
