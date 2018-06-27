import {ERROR_MESSAGE} from '../constants/actionType';

export default function common ({dispatch}) {
  return next => action => {
    const { payload, error, meta = {}, type } = action;
    if (error === true && payload && type != ERROR_MESSAGE) {
      // dispatch(commonAction.errorMessage(payload));
    }
    next(action);
  };
}
