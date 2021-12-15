<template>
	<button class="customButton">{{ title }}</button>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "",
		},
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.customButton {
	font-size: 20px;
}
</style>
