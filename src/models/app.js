
export default {

  namespace: 'example',

  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
       
      })
    },
  },

  effects: {

  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    }
  },

};
