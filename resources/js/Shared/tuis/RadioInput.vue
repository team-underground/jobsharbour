<template>
	<div>
		<label
			v-if="label"
			class="form-label block mb-1 font-semibold text-gray-700"
			:for="id"
		>{{ label }}</label>
		<label
			class="items-center mb-2 clearfix relative"
			:class="[{'inline-flex mr-4': stacked == false, 'flex w-full': stacked == true}, classes, { 'border-blue-500': modelValue == option.value && customActive == true && customActiveClass == 'text-blue-500','border-red-500': modelValue == option.value && customActive == true && customActiveClass == 'text-red-500', 'border-teal-500': modelValue == option.value && customActive == true && customActiveClass == 'text-teal-500'}]"
			v-for="option in options"
			:key="option.value"
			:for="option.value"
		>
			<template v-if="customActive == false">
				<!-- Input element for the radio button -->
				<input
					:id="option.value"
					type="radio"
					class="check-custom"
					:name="name"
					:checked="modelValue == option.value ? true : false"
					@change="$emit('change', option.value)"
				/>
				<!-- Customization element for the radio button -->
				<span class="check-toggle flex-shrink-0" :class="sizeClass"></span>
			</template>

			<template v-else>
				<!-- Input element for the radio button -->
				<input
					:id="option.value"
					type="radio"
					class="check-custom"
					:name="name"
					:checked="modelValue == option.value ? true : false"
					@change="$emit('change', option.value)"
				/>
				<span
					class="position-absolute"
					:class="customActiveClass"
					v-if="customActive"
					style="top: 15px; right: 22px; z-index: 1"
				>
					<svg
						v-if="modelValue == option.value"
						xmlns="http://www.w3.org/2000/svg"
						class="fill-current"
						width="24"
						height="24"
						viewBox="0 0 24 24"
					>
						<path
							d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.794-5.794l1.414,1.414L10.001,16.413z"
						/>
					</svg>
				</span>
			</template>

			<span class="ml-2">
				<slot :row="option"></slot>
			</span>
		</label>

		<small v-if="helpText" class="block text-sm text-gray-600">{{ helpText }}</small>
	</div>
</template>

<script>
// https://hackernoon.com/hacking-custom-checkboxes-and-radios-5d48230440d
export default {
	name: "RadioInput",
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
		modelValue: {
			type: [String, Number],
			default: ""
		},
		name: {
			type: String,
			default: ""
		},
		label: {
			type: String,
			default: ""
		},
		stacked: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: "medium"
		},
		options: {
			type: [Array, Object]
		},
		helpText: {
			type: String,
			default: ""
		},
		classes: {
			type: String
		},
		customActive: {
			type: Boolean,
			default: false
		},
		customActiveClass: {
			type: String,
			default: "text-blue-500"
		}
	},

	computed: {
		sizeClass() {
			return {
				medium: this.size == "medium",
				large: this.size == "large"
			};
		}
	}
};
</script>