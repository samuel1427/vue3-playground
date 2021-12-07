<template>
	<button @click="onButtonClick">click</button>
	{{ count }}
	{{ doubleCount }}
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
	setup() {
		const store = useStore();

		const count = computed(() => store.state.utility.count);

		const doubleCount = computed(() => store.getters["utility/doubleCount"]);

		const onButtonClick = () => {
			store.dispatch("utility/increment", 1);
		};
		return { count, doubleCount, todoLength, onButtonClick };
	},
};
</script>
