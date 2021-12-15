<template>
	<div class="inputRow">
		<InputText class="inputText" placeholder="New Task" :value="newTask" @input="handleTextChange" />
		<CustomButton title="Add" @click="handleSubmit" />
	</div>
	<div class="todoListWrapper">
		<TodoList :todoList="todoList" />
	</div>
</template>

<script>
import InputText from "@/components/InputText/InputText";
import CustomButton from "@/components/CustomButton/CustomButton";
import TodoList from "@/components/TodoList/TodoList";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
	components: {
		CustomButton,
		InputText,
		TodoList,
	},

	setup() {
		const newTask = ref("");
		const store = useStore();
		const todoList = computed(() => {
			return store.state.todo.todoList;
		});
		const handleTextChange = (event) => {
			newTask.value = event.target.value;
		};
		const handleSubmit = () => {
			if (newTask.value) {
				store.dispatch("todo/addItem", { task: newTask.value, isFinished: false });
				newTask.value = "";
			}
		};
		return { newTask, todoList, handleTextChange, handleSubmit };
	},
};
</script>

<style lang="scss" scoped>
.inputText {
	width: 100%;
}
.inputRow {
	width: 100%;
	display: flex;
	gap: 10%;
}
.todoListWrapper{
	padding:5% 0 0;
}
</style>
