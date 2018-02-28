const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED';
const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
};

const reducers = {
  [INCREMENT]: (state) => ({ ...state, count: state.count + 1, isIncrementing: false }),
  [DECREMENT]: (state) => ({ ...state, count: state.count - 1, isDecrementing: false }),
  [INCREMENT_REQUESTED]: (state) => ({ ...state, isIncrementing: true }),
  [DECREMENT_REQUESTED]: (state) => ({ ...state, isDecrementing: true }),
};

export default (state = initialState, action) => {
  return reducers[action.type] ? reducers[action.type](state) : state;
}

export const increment = () => {
  return dispatch => {
    dispatch({ type: INCREMENT_REQUESTED });
    dispatch({ type: INCREMENT });
  }
};

export const decrement = () => {
  return dispatch => {
    dispatch({ type: DECREMENT_REQUESTED });
    dispatch({ type: DECREMENT });
  }
};

export const incrementAsync = () => {
  return dispatch => {
    dispatch({ type: INCREMENT_REQUESTED })

    return setTimeout(() => dispatch({ type: INCREMENT }), 3000);
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({ type: DECREMENT_REQUESTED })

    return setTimeout(() => dispatch({ type: DECREMENT }), 3000);
  }
}
