import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
const todo = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};

export default todo;
