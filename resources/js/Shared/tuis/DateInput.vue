<template>
	<div>
		<label
			v-if="label"
			class="form-label block mb-1 font-semibold text-gray-700"
			:for="id"
		>{{ label }}</label>

		<div class="relative">
			<input
				:id="`date-input-${_uid}`"
				ref="input"
				v-bind="$attrs"
				class="pl-10 pr-2 py-2 h-12 leading-normal block w-full border-2 text-gray-800 bg-white font-sans rounded-lg text-left appearance-none focus:border-blue-600 outline-none"
				:class="{ 'border-red-400': errors.length }"
				type="text"
				:value="value"
				@change="change"
				@keyup="change"
			/>
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

			<svg
				class="absolute text-gray-400 fill-current"
				width="20"
				height="20"
				style="top: 14px; left: 12px"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path
					d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
				/>
			</svg>
		</div>
	</div>
</template>

<script>
import pikaday from "pikaday";

export default {
	name: "DateInput",

	props: {
		id: {
			type: String,
			default() {
				return `text-input-${this._uid}`;
			}
		},
		value: String,
		label: String,
		errors: {
			type: Array,
			default: () => []
		},
		format: {
			type: String,
			default: "DD/MM/YYYY"
		},
		minYear: {
			type: Number,
			default: 2019
		},
		maxYear: {
			type: Number,
			default: new Date().getFullYear()
		},
		defaultYear: {
			type: Number,
			default: null
		},
		defaultMonth: {
			type: Number,
			default: null
		}
	},

	mounted() {
		let picker = new pikaday({
			format: this.format,
			reposition: false,
			position: "bottom left",
			field: this.$refs.input,
			yearRange: [this.minYear, this.maxYear],
			theme: "date-input",
			keyboardInput: false,
			i18n: {
				previousMonth: "Prev",
				nextMonth: "Next",
				months: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec"
				],
				weekdays: [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday"
				],
				weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
			}
		});
		if (this.defaultYear) {
			picker.gotoYear(this.defaultYear);
		}
		if (this.defaultMonth) {
			picker.gotoMonth(this.defaultMonth - 1);
		}
	},

	methods: {
		focus() {
			this.$refs.input.focus();
		},
		select() {
			this.$refs.input.select();
		},
		change(e) {
			this.$emit("input", e.target.value);
		}
	}
};
</script>


<style scoped>
.date-input {
	background-color: #fff;
	border-radius: 10px;
	padding: 1rem;
	z-index: 2000;
	margin: 3px 0 0 0;
	border-top: 1px solid #eee;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.date-input.is-hidden {
	display: none;
}
.date-input .pika-title {
	padding: 0.5rem;
	width: 100%;
	text-align: center;
}
.date-input .pika-prev,
.date-input .pika-next {
	margin-top: 0;
	/* margin-top: 0.5rem; */
	padding: 0.25rem 0;
	cursor: pointer;
	color: #4299e1;
}
.date-input .pika-prev:hover,
.date-input .pika-next:hover {
	text-decoration: underline;
}
.date-input .pika-prev {
	float: left;
}
.date-input .pika-next {
	float: right;
}
.date-input .pika-label {
	display: inline-block;
	font-size: 0;
}
.date-input .pika-select-month,
.date-input .pika-select-year {
	display: inline-block;
	border: 1px solid #ddd;
	color: #444;
	background-color: #fff;
	border-radius: 10px;
	font-size: 0.9rem;
	padding-left: 0.5em;
	padding-right: 0.5em;
	padding-top: 0.25em;
	padding-bottom: 0.25em;
	appearance: none;
}
.date-input .pika-select-month:focus,
.date-input .pika-select-year:focus {
	border-color: #cbd5e0;
	outline: none;
}
.date-input .pika-select-month {
	margin-right: 0.25em;
}
.date-input table {
	width: 100%;
	border-collapse: collapse;
}
.date-input table th {
	width: 2em;
	height: 2em;
	font-weight: normal;
	color: #718096;
	text-align: center;
}
.date-input table th abbr {
	text-decoration: none;
}
.date-input table td {
	padding: 2px;
}
.date-input table td button {
	/* border: 1px solid #e2e8f0; */
	width: 2em;
	height: 2em;
	text-align: center;
	color: #555;
	border-radius: 10px;
}
.date-input table td button:hover {
	background-color: #bee3f8;
}
.date-input table td.is-today button {
	background-color: #90cdf4;
}
.date-input table td.is-selected button {
	background-color: #3182ce;
}
.date-input table td.is-selected button {
	color: white;
}
.date-input table td.is-selected button:hover {
	color: white;
}
</style>