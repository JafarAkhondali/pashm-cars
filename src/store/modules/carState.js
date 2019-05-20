const state = {
    engineOn: false,
    doorsLocked: false
};

const getters = {
    'engineOn': state => state.engineOn,
    'doorsLocked': state => state.doorsLocked,
};

const mutations = {
    SET_LOCK_STATUS(state, status) {
        state.doorsLocked = status;
    },
    SET_ENGINE_STATUS(state, status) {
        state.engineOn = status;
    }
};

const actions = {
    lockStatus({ commit }, status){
        commit('SET_LOCK_STATUS', status);
    },
    engineStatus({ commit }, status){
        commit('SET_ENGINE_STATUS', status);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
