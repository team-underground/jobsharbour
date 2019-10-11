<template>
	<div class="flex px-8 py-4">
		<slot name="listbody"></slot>

		<div v-if="action" class="w-20 text-center flex items-start justify-center">
			<slot name="listaction"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		action: {
			type: Boolean,
			default: true
		}
	}
};
</script>

<style>
.list-group li:last-child {
	border-bottom: 0;
}
</style>
