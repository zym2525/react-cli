import {
  ERROR_MESSAGE,
  LOADING
} from '../constants/actionType';

const initialState = {
  loading: false,
  error: ''
};

export default function (state = initialState, action) {
  const { meta = {}, error } = action;
  switch (action.type) {
    case ERROR_MESSAGE:
      return { ...state, error: action.payload };
    case LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
