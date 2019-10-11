<template>
	<div>
		<label
			:for="id"
			v-if="label"
			class="form-label block mb-1 font-semibold text-gray-700"
		>{{ label }}</label>

		<div class="relative">
			<textarea
				:id="id"
				:rows="rows"
				ref="input"
				class="px-2 py-2 leading-normal block w-full border-2 text-gray-800 bg-white font-sans rounded-lg text-left appearance-none focus:border-blue-600 outline-none"
				v-bind="$attrs"
				:value="value"
				:disabled="disabled"
				:class="{ 'border-red-400': errors.length }"
				@input="$emit('input', $event.target.value)"
				@keydown="$emit('keydown', $event)"
				@blur="$emit('blur', $event)"
				@keyup="$emit('keyup', $event)"
			></textarea>

			<div class="textarea-stats my-1" v-if="stats">
				<ul class="no-bullet flex text-muted mb-0">
					<li class="mr-2">Lines: {{ linesCount || 0 }}</li>
					<li class="mr-2">Words: {{ wordsCount || 0 }}</li>
					<li class="mr-2">Characters: {{ charactersCount || 0 }}</li>
				</ul>
			</div>

			<small v-if="helpText" class="d-block form-text text-muted">{{ helpText }}</small>

			<div v-if="errors.length" class="text-red-600 mt-1 text-sm">{{ errors[0] }}</div>

			<svg
				class="absolute text-red-600 fill-current"
				style="top: 12px; right: 12px"
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
import autosize from "autosize";

export default {
	inheritAttrs: false,

	props: {
		id: {
			type: String,
			default() {
				return `textarea-input-${this._uid}`;
			}
		},
		label: {
			type: String
		},
		value: {
			type: String
		},
		disabled: {
			type: Boolean,
			default: false
		},
		helpText: {
			type: String
		},
		stats: {
			type: Boolean,
			default: false
		},
		rows: {
			type: Number,
			default: 4
		},
		errors: {
			type: Array,
			default: () => []
		},
		autosize: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			textareaValue: ""
		};
	},

	mounted() {
		if (this.autosize) {
			autosize(this.$refs.input);
		}

		this.$on("input", e => {
			this.textareaValue = e;
		});

		setTimeout(() => {
			autosize(this.$refs.textarea);
		}, 0);

		// on update
		// setTimeout(() => {
		// 	autosize.update(this.$refs.textarea);
		// }, 0);
	},

	watch: {
		textareaValue() {}
	},

	computed: {
		linesCount() {
			if (this.textareaValue) {
				// Count the number of new line characters
				return this.textareaValue.split(/\r\n|\r|\n/).length;
			} else {
				return 0;
			}
		},

		wordsCount() {
			if (this.textareaValue) {
				let s = this.textareaValue;
				// Turn new line cahracters into white-spaces
				s = s.replace(/\n/g, " ");
				// Exclude start and end white-spaces
				s = s.replace(/(^\s*)|(\s*$)/gi, "");
				// Turn 2 or more duplicate white-spaces into 1
				s = s.replace(/\s\s+/gi, " ");
				// Return the number of spaces
				return s.split(" ").length;
			} else {
				return 0;
			}
		},

		charactersCount() {
			if (this.textareaValue) {
				return this.textareaValue.split("").length;
			} else {
				return 0;
			}
		}
	}
};
</script>