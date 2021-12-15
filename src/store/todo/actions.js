const actions = {
	addItem({ commit }, payload) {
		commit("addItem", payload);
	},
	removeItem({ commit }, index) {
		commit("removeItem", index);
	},
	checkItem({ commit }, index) {
		commit("checkItem", index);
	},
};

export default actions;
