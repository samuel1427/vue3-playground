<template>
	<div>
		<router-link to="/">Home</router-link> |
		<router-link to="/todo">Todo</router-link>
	</div>
	<div class="responsive">
		<router-view />
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.responsive {
	margin: 20px 10%;
}

@media (max-width: 768px) {
	.responsive {
		margin: 20px 5%;
	}
}
</style>
