<template>
	<input type="text" :placeholder="placeholder" class="inputText" />
</template>

<script>
export default {
	props: {
		placeholder: {
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
.inputText {
	height: 25px;
	font-size: 20px;
	&:focus {
		box-shadow: -2px 2px 4px #999;
	}
}
</style>
