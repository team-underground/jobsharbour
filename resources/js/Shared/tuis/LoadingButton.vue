<template>
	<component
		:is="tag"
		:type="type"
		v-on="$listeners"
		:disabled="disableButton"
		:class="btnClass"
		:variant="variant"
		:variant-type="variantType"
		:size="size"
		:href="to"
	>
		<slot />
	</component>
</template>

<script>
export default {
	name: "LoadingButton",
	props: {
		tag: {
			type: String,
			default: "button"
		},
		disabled: {
			type: Boolean,
			default: false
		},
		variant: {
			type: String,
			default: "primary"
		},
		variantType: {
			type: String,
			default: ""
		},
		size: {
			type: String,
			default: "normal"
		},
		rounded: {
			type: String,
			default: "medium"
		},
		type: {
			type: String,
			default: ""
		},
		to: {
			type: String
		}
	},

	data() {
		return {
			loading: false,
			disableButton: this.disabled
		};
	},

	methods: {
		startLoading() {
			this.loading = true;
			this.disableButton = true;
		},
		stopLoading() {
			this.loading = false;
			this.disableButton = false;
		}
	},

	computed: {
		btnClass() {
			return {
				"base-spinner": this.loading == true,
				"base-button inline-flex align-middle align-items-center justify-center font-medium focus:outline-none": true,

				rounded: this.rounded === "small",
				"rounded-lg": this.rounded === "medium",
				"rounded-full": this.rounded === "large",

				"px-6 py-3": this.size == "normal",
				"px-4 py-2": this.size == "small",
				"border-2 border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700 text-white":
					this.variant == "success" && this.variantType == "",

				"border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 hover:border-blue-700 text-white":
					this.variant == "primary" && this.variantType == "",

				"border-2 border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white":
					this.variant == "danger" && this.variantType == "",

				"border border-orange-600 bg-orange-600 hover:bg-orange-700 hover:border-orange-700 text-white":
					this.variant == "warning" && this.variantType == "",

				"border-2 border-white bg-white bg-white text-blue-600 hover:text-blue-800":
					this.variant == "white" && this.variantType == "",

				"border-2 border-gray-200 text-green-500 hover:text-green-700":
					this.variant == "success" && this.variantType == "outline",

				"border-2 border-gray-200 text-blue-500 hover:text-blue-700":
					this.variant == "primary" && this.variantType == "outline",

				"border-2 border-gray-200 text-red-500 hover:text-red-600":
					this.variant == "danger" && this.variantType == "outline",

				"border-2 border-gray-300 text-gray-500 hover:text-blue-500":
					this.variant == "secondary" && this.variantType == "outline"
			};
		}
	}
};
</script>