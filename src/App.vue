<template>
	<div>
		<router-link to="/">Home</router-link> |
		<router-link to="/todo">Todo</router-link>
	</div>
	<router-view />
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
