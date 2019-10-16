<template>
	<div>
		<label
			v-if="label"
			class="form-label block mb-1 font-semibold text-gray-700"
			:for="id"
		>{{ label }}</label>
		<div class="relative">
			<select
				:id="id"
				ref="input"
				v-bind="$attrs"
				v-model="selectedOption"
				@input="event => { $emit('input', event.target.value) }"
				class="form-select px-2 py-2 h-12 leading-normal block w-full border-2 text-gray-800 bg-white font-sans rounded-lg text-left appearance-none focus:border-blue-600 outline-none relative pr-6 font-normal"
				:class="{ 'border-red-400': errors.length }"
			>
				<slot></slot>
				<template v-if="selectValue == 'value'">
					<option v-for="option in options" :value="option.value">{{ option.label }}</option>
				</template>
				<template v-else>
					<option v-for="(option, key) in options" :value="key">{{ option }}</option>
				</template>
			</select>
			<div v-if="errors.length" class="text-red-600 mt-1 text-sm">{{ errors[0] }}</div>
			<svg
				class="absolute text-red-600 fill-current"
				style="top: 12px; right: 30px"
				v-if="errors.length"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
				/>
			</svg>
		</div>
	</div>
</template>


<script>
export default {
	inheritAttrs: false,

	props: {
		id: {
			type: String,
			default() {
				return `select-input-${this._uid}`;
			}
		},
		value: null,
		options: {
			type: [Object, Array],
			required: true
		},
		label: String,
		errors: {
			type: Array,
			default: () => []
		},
		selectValue: String
	},

	data() {
		return {
			selectedOption: null
		};
	},

	mounted() {
		this.selectedOption = this.value;
	},

	watch: {
		value: function(newValue) {
			this.selectedOption = newValue;
		}
	},

	methods: {
		focus() {
			this.$refs.input.focus();
		},
		select() {
			this.$refs.input.select();
		}
	}
};
</script>

<style>
.form-select {
	background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAABGdBTUEAALGPC/xhBQAAAQtJREFUOBG1lEEOgjAQRalbGj2OG9caOACn4ALGtfEuHACiazceR1PWOH/CNA3aMiTaBDpt/7zPdBKy7M/DCL9pGkvxxVp7KsvyJftL5rZt1865M+Ucq6pyyF3hNcI7Cuu+728QYn/JQA5yKaempxuZmQngOwEaYx55nu+1lQh8GIatMGi+01NwBcEmhxBqK4nAPZJ78K0KKFAJmR3oPp8+Iwgob0Oa6+TLoeCvRx+mTUYf/FVBGTPRwDkfLxnaSrRwcH0FWhNOmrkWYbE2XEicqgSa1J0LQ+aPCuQgZiLnwewbGuz5MGoAhcIkCQcjaTBjMgtXGURMVHC1wcQEy0J+Zlj8bKAnY1/UzDe2dbAVqfXn6wAAAABJRU5ErkJggg==");
	background-size: 0.7rem;
	background-repeat: no-repeat;
	background-position: right 0.75rem center;
}
</style>