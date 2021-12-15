<template>
	<div class="container">
		<input type="checkbox" :value="todo.isFinished" @input="$emit('check')" />

		<span :class="{ del: todo.isFinished }">
			{{ todo.task }}
		</span>

		<button @click="$emit('delete')">delete</button>
	</div>
</template>

<script>
export default {
	props: {
		todo: {
			type: Object,
			default: () => ({ task: "", isFinished: false }),
		},
	},
	emits: ["delete", "check"],
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.del {
	text-decoration: line-through;
}
.container {
	border: 1px solid #333;
	padding: 20px;
    display:grid;
    grid-template-columns: 15% auto 15%;
}
</style>
