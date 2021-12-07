import state from "./state.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
const utility = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};

export default utility;
