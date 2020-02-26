const state = {
  projectDetail: []
};

const mutations = {
  setProjectDetail(state, payload) {
    state.projectDetail = payload;
  }
};

export const store = {
  state,
  mutations
};
