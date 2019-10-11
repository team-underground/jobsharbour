<template>
	<component :is="tag" :class="cssClasses" :href="to">
		<slot></slot>
	</component>
</template>

<script>
export default {
	props: {
		tag: {
			type: String,
			default: "p"
		},
		size: {
			type: String,
			default: "normal"
		},
		color: {
			type: String,
			default: ""
		},
		to: {
			type: String
		}
	},

	computed: {
		cssClasses() {
			return [
				{
					"text-sm text-gray-600 leading-normal":
						this.size == "small",
					"text-base text-gray-600 leading-normal":
						this.size == "normal",
					"text-lg text-gray-700 font-semibold leading-normal font-serif":
						this.size == "large",
					"text-xl md:text-2xl text-gray-700 font-bold leading-tight tracking-tight font-serif":
						this.size == "heading",
					"text-2xl md:text-3xl text-gray-700 font-bold leading-tight tracking-tight font-serif":
						this.size == "heading2",
					"text-gray-500 text-xs font-bold tracking-wider uppercase":
						this.size == "small-caps",
					"text-2xl md:text-5xl text-gray-700 leading-none font-bold tracking-tight font-serif":
						this.size == "display",
					"text-4xl md:text-6xl text-gray-700 leading-none font-bold tracking-tight font-serif":
						this.size == "display2"
				},
				this.color
			];
		}
	}
};
</script>