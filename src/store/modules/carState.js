const state = {
    engineOn: false,
    doorsLocked: false,
    baseUrl: 'http://localhost/api/v1/'
};

const getters = {
    'engineOn': state => state.engineOn,
    'doorsLocked': state => state.doorsLocked,
};

const mutations = {
    SET_LOCK_STATUS(state, status) {
        state.doorsLocked = status;
    }
};

const actions = {
    lockStatus({ commit }, status){
        commit('SET_LOCK_STATUS', status);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
