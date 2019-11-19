<template>
	<label class="flex items-center mb-2">
		<!-- Input element for the checkbox -->
		<input
			:id="id"
			type="checkbox"
			class="check-custom"
			:checked="shouldBeChecked"
			:value="value"
			@change="updateInput"
		/>

		<!-- Customization element for the checkbox -->
		<span class="check-toggle"></span>

		<div class="ml-3 flex flex-1 item-center">
			<slot></slot>
		</div>
	</label>
</template>

<script>
export default {
	model: {
		prop: "modelValue",
		event: "change"
	},
	props: {
		id: {
			type: String,
			default() {
				return `text-input-${this._uid}`;
			}
		},
		value: {
			type: String
		},
		modelValue: {
			default: false
		},
		// label: {
		// 	type: String,
		// 	required: true
		// },
		// We set `true-value` and `false-value` to the default true and false so
		// we can always use them instead of checking whether or not they are set.
		// Also can use camelCase here, but hyphen-separating the attribute name
		// when using the component will still work
		trueValue: {
			default: true
		},
		falseValue: {
			default: false
		}
	},

	computed: {
		shouldBeChecked() {
			if (this.modelValue instanceof Array) {
				return this.modelValue.includes(this.value);
			}
			// Note that `true-value` and `false-value` are camelCase in the JS
			return this.modelValue === this.trueValue;
		}
	},
	methods: {
		updateInput(event) {
			let isChecked = event.target.checked;

			if (this.modelValue instanceof Array) {
				let newValue = [...this.modelValue];

				if (isChecked) {
					newValue.push(this.value);
				} else {
					newValue.splice(newValue.indexOf(this.value), 1);
				}

				this.$emit("change", newValue);
			} else {
				this.$emit(
					"change",
					isChecked ? this.trueValue : this.falseValue
				);
			}
		}
	}
};
</script>

<style scoped>
/* Styles for hiding the native checkbox */
input[type="checkbox"].check-custom {
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
}

/* Styles for the basic appearance of the custom checkbox */
input[type="checkbox"].check-custom ~ .check-toggle {
	min-width: 1.25rem;
	height: 1.25rem;
	position: relative;
	display: inline-block;
	vertical-align: middle;
	border: 2px solid #969696;
	border-radius: 4px;
	cursor: pointer;
	box-sizing: border-box;
}

/* Styles for the hover state appearance of the custom checkbox */
input[type="checkbox"].check-custom:hover ~ .check-toggle {
	border-color: #4a4a4a;
}

/* Styles for the focus state appearance of the custom checkbox */
input[type="checkbox"].check-custom:focus ~ .check-toggle {
	border-color: #b0d5ff;
	box-shadow: 0 0 0 2px rgba(23, 133, 255, 0.25);
}

/* Styles for the checked state appearance of the custom checkbox */
input[type="checkbox"].check-custom:checked ~ .check-toggle {
	border-color: #29a9c9;
	background: #29a9c9
		url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=)
		center no-repeat;
	background-size: 75%;
}
</style>
