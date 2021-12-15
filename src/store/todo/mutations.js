const mutations = {
	addItem(state, payload) {
		state.todoList.push(payload);
	},
	removeItem(state, index) {
		state.todoList.splice(index, 1);
	},
	checkItem(state, index) {
		state.todoList[index].isFinished = !state.todoList[index].isFinished;
	},
};
export default mutations;
