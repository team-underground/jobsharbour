<template>
	<a
		:href="`mailto:${to}?subject=${subject || ''}`"
		class="inline-flex text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400"
	>
		<slot></slot>
	</a>
</template>

<script>
export default {
	props: {
		to: {
			type: String
		},
		subject: {
			type: String
		}
	}
};
</script>

