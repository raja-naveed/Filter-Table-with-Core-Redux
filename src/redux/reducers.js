// reducers.js
const initialState = {
    statesData: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_STATES_DATA':
        return {
          ...state,
          statesData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  