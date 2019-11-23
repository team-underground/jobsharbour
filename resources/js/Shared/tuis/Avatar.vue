<template>
	<div
		:class="classes"
		class="inline-flex flex-shrink-0 items-center justify-center font-bold shadow-inner"
	>{{ getName }}</div>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		size: {
			type: String,
			default: "normal"
		},
		shape: {
			type: String,
			default: "circle"
		},
		color: {
			type: String,
			default: "gray"
		}
	},

	computed: {
		getName() {
			return this.name.charAt(0);
		},

		classes() {
			return {
				"w-8 h-8 text-xl": this.size === "small",
				"w-10 h-10 text-2xl": this.size === "normal",
				"w-12 h-12 text-3xl": this.size === "large",
				"w-16 h-16 text-4xl": this.size === "xlarge",

				"rounded-lg": this.shape === "rounded",
				"rounded-full": this.shape === "circle",

				"bg-gray-100 text-gray-600": this.color === "gray",
				"bg-blue-100 text-blue-600": this.color === "blue",
				"bg-orange-100 text-orange-600": this.color === "orange"
			};
		}
	}
};
</script>