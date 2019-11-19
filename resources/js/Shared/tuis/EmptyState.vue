<template>
	<div
		class="text-center bg-white py-6 flex w-full items-center justify-center flex-row shadow rounded-lg"
		:class="{'shadow-none': noShadow == true}"
		:style="{'min-height': height}"
	>
		<div class="w-100">
			<slot></slot>
		</div>
	</div>
</template>
 
<script>
export default {
	props: {
		noShadow: {
			type: Boolean,
			default: false
		},
		height: {
			type: String,
			default: "400px"
		}
	}
};
</script>