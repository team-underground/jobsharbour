<template>
	<div>
		<input
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			class="search-input px-4 py-2 leading-normal block w-full text-gray-800 bg-white font-sans text-left appearance-none outline-none"
			:class="[searchClass, classes]"
		/>
	</div>
</template>

<script>
export default {
	name: "SearchInput",
	inheritAttrs: false,

	data() {
		return {
			search: ""
		};
	},

	props: {
		value: {
			type: String
		},
		searchClass: {
			type: String
		},
		rounded: {
			type: String,
			default: "medium"
		},
		bordered: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: "normal"
		}
	},

	computed: {
		classes() {
			return {
				rounded: this.rounded === "small",
				"rounded-lg": this.rounded === "medium",
				"rounded-full": this.rounded === "large",

				"border-2 focus:border-blue-600": this.bordered === true,
				"border bg-gray-200 focus:bg-white": this.bordered === false

				// "h-10": this.size === "small",
				// "h-12 ": this.size === "normal"
			};
		}
	}
};
</script>