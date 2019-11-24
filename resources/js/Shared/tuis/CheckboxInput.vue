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
