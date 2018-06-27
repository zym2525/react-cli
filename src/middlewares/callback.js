export default function callback () {
  return next => (action) => {
    const { meta = {}, error, payload } = action;
    const {
      sequence = {}, resolved, rejected, resolvedCondition = true
    } = meta;
    if (sequence.type !== 'next') return next(action);
    error && resolvedCondition ? (rejected && rejected(payload, meta)) : (resolved && resolved(payload, meta));
    next(action);
  };
}
