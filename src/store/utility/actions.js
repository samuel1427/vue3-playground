const actions = {
	increment({ commit }, payload = 1) {
		commit("increment", payload);
	},
};

export default actions;
