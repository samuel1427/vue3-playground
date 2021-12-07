import { createStore } from "vuex";
import utility from "@/store/utility";
import todo from "@/store/todo";

const store = createStore({
	modules: {
		utility,
		todo,
	},
});

export default store;
