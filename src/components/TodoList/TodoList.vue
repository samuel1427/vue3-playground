<template>
	<TodoRow
		v-for="(todo, index) in todoList"
		:key="index"
		:todo="todo"
		@delete="handleDelete(index)"
		@check="handleCheck(index)"
	/>
</template>

<script>
import TodoRow from "@/components/TodoList/TodoRow";
import { useStore } from "vuex";
export default {
	components: {
		TodoRow,
	},
	props: {
		todoList: {
			type: Array,
			default: () => [],
		},
	},
	setup() {
		const store = useStore();
		const handleDelete = (index) => {
			store.dispatch("todo/removeItem", index);
		};
		const handleCheck = (index) => {
			store.dispatch("todo/checkItem", index);
		};
		return { handleDelete, handleCheck };
	},
};
</script>

<style lang="scss" scoped></style>
