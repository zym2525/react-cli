'use strict';

import {
  LOGIN
} from '../constants/actionType';

let initialState = {
  user: null,
  error: null
};

export default function (state = initialState, action) {
  const { meta = {}, error } = action;
  const { sequence = {} } = meta;
  if (sequence.type === 'start' || error) {
    return {
      ...state
    };
  }
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
