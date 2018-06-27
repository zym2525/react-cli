import * as actionTypes from '../constants/actionType';

const sequenceList = {};
const minPendingTime = 200;

export default function ({ dispatch }) {
  return next => (action) => {
    const { meta = {}, payload } = action;
    const { sequence = {}, pending, pendingTime = minPendingTime } = meta;
    if (pending === true) {
      if (sequence.type == 'start') {
        sequenceList[sequence.id] = {
          start: new Date().getTime()
        };
        return next(action);
      }
      if (sequence.type == 'next' && sequenceList[sequence.id]) {
        const start = sequenceList[sequence.id].start;
        const end = new Date().getTime();
        const leftTime = pendingTime - (end - start);
        delete sequenceList[sequence.id];
        if (leftTime < 0) {
          return next(action);
        }
        return setTimeout(() => {
          next(action);
        }, leftTime);
      }
    }
    return next(action);
  };
}
