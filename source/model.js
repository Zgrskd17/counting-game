export default {
  namespace: 'example',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {
      // Your subscription logic here
    },
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save', payload });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
