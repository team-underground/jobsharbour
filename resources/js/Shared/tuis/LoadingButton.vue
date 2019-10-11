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
				"base-button inline-flex align-middle align-items-center justify-center font-medium outline-none": true,

				rounded: this.rounded === "small",
				"rounded-lg": this.rounded === "medium",
				"rounded-full": this.rounded === "large",

				"px-6 py-3": this.size == "normal",
				"px-5 py-2": this.size == "small",

				"border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white":
					this.variant == "primary" && this.variantType == "",
				"border border-red-600 bg-red-600 hover:bg-red-700 text-white":
					this.variant == "danger" && this.variantType == "",
				"border border-orange-600 bg-orange-600 hover:bg-orange-700 text-white":
					this.variant == "warning" && this.variantType == "",

				"border border-gray-400 text-blue-500 hover:text-blue-700":
					this.variant == "primary" && this.variantType == "outline",

				"border border-gray-400 text-red-500 hover:text-red-700":
					this.variant == "danger" && this.variantType == "outline",

				"border border-gray-400 text-gray-600 hover:text-blue-500":
					this.variant == "secondary" && this.variantType == "outline"
			};
		}
	}
};
</script>

<style lang="scss" scoped>
.base-button + .base-button {
	margin-left: 1em;
}

// Spinner
@keyframes spinner {
	to {
		transform: rotate(360deg);
	}
}

.base-spinner {
	position: relative;
	overflow: hidden;
}

.base-spinner:before {
	content: "";
	box-sizing: border-box;
	position: absolute;
	background-color: inherit;
	width: 100%;
	height: 100%;
	display: block;
	z-index: 1;
	top: 0;
	left: 0;
}

.base-spinner:after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 20px;
	height: 20px;
	margin-top: -10px;
	margin-left: -10px;
	border-radius: 50%;
	border: 2px solid rgba(255, 255, 255, 0.45);
	border-top-color: inherit;
	animation: spinner 0.6s linear infinite;
	z-index: 2;
}
</style>