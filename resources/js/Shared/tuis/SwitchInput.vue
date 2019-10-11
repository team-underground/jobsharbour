<template>
	<div class="switch-button-control">
		<div
			class="switch-button"
			:class="{ enabled: isEnabled }"
			@click="toggle"
			:style="{'--color': color}"
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

<style>
.switch-button-control {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.switch-button-control .switch-button {
	height: 1.6em;
	width: calc(1.6em * 2);
	/* border: 2px solid #ddd; */
	/* box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.33); */
	border-radius: 1.6em;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
	background: #ddd;
	box-sizing: border-box;
}
.switch-button-control .switch-button .button {
	height: 1.6em;
	width: 1.6em;
	border: 2px solid #ddd;
	border-radius: 1.6em;
	background-color: #fff;
	transition: all 0.3s ease-in-out;
	box-sizing: border-box;
}
.switch-button-control .switch-button.enabled {
	background-color: var(--color);
	box-shadow: none;
}
.switch-button-control .switch-button.enabled .button {
	background: white;
	border: 2px solid var(--color);
	transform: translateX(calc(calc(1.6em - (2 * 2px)) + (2 * 2px)));
}
.switch-button-control .switch-button-label {
	margin-left: 10px;
}
</style>