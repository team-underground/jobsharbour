<template>
	<inertia-link
		:href="to"
		class="inline-flex text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400"
	>
		<slot></slot>
	</inertia-link>
</template>

<script>
export default {
	props: {
		to: {
			type: String
		}

		// tag: {
		//     type: String,
		//     default: "a"
		// },
		// display: {
		//     type: String,
		//     default: "inline-flex"
		// }
	}
};
</script>

