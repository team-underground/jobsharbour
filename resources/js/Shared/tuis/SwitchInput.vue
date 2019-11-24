<template>
	<div class="switch-button-control">
		<div
			class="switch-button"
			:class="{ enabled: isEnabled }"
			@click="toggle"
			:style="{ '--color': color }"
		>
			<div class="button"></div>
		</div>
		<div class="switch-button-label">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "SwitchInput",
	model: {
		prop: "isEnabled",
		event: "toggle"
	},
	props: {
		isEnabled: {
			type: Boolean,
			default: true
		},
		color: {
			type: String,
			required: false,
			default: "#4D4D4D"
		}
	},
	methods: {
		toggle() {
			this.$emit("toggle", !this.isEnabled);
		}
	}
};
</script>