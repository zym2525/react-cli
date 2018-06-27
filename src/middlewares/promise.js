import { isFSA } from 'flux-standard-action';
import _ from 'lodash';

function isPromise (val) {
  return val && typeof val.then === 'function';
}

export default function promise ({ dispatch }) {
  return next => action => {
    if (!isFSA(action)) {
      return isPromise(action)
        ? action.then(dispatch)
        : next(action);
    }
    const { meta = {}, payload } = action;

    const {needLoading = true} = meta;

    const uniqueid = _.uniqueId();
    if (isPromise(payload)) {
      dispatch({
        ...action,
        payload: undefined,
        meta: {
          ...meta,
          loading: needLoading,
          sequence: {
            type: 'start',
            uniqueid
          }
        }
      });
      return payload.then(
        result => {
          return dispatch({
            ...action,
            payload: result,
            meta: {
              ...meta,
              loading: false,
              sequence: {
                type: 'next',
                uniqueid
              }
            }
          });
        },
        error => dispatch({
          ...action,
          payload: error,
          error: true,
          meta: {
            ...meta,
            loading: false,
            sequence: {
              type: 'next',
              uniqueid
            }
          }
        })
      );
    }

    return next(action);
  };
}
