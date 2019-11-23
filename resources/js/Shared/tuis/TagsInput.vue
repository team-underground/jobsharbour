<template>
	<div>
		<label
			v-if="label"
			class="form-label block mb-1 font-semibold text-gray-700"
			:for="id"
		>{{ label }}</label>

		<div
			class="tags-input relative"
			:class="[
                { 'border-red-400': errors.length, 'pl-12': withIcon === true },
                classes
            ]"
		>
			<span v-for="(tag, idx) in value" class="tags-input-tag" :key="idx">
				<span>{{ tag }}</span>
				<button
					type="button"
					class="tags-input-remove"
					@click="removeTag(tag)"
					:disabled="disabled"
				>&times;</button>
			</span>
			<input
				class="tags-input-text"
				:placeholder="placeholder"
				@keydown.enter.prevent="addTag"
				v-model="newTag"
				:readonly="disabled"
			/>

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

			<div class="absolute left-0 top-0 bottom-0 w-10 block ml-2" v-if="withIcon">
				<slot name="icon"></slot>
			</div>
		</div>
		<div v-if="errors.length" class="text-red-600 mt-1 text-sm">{{ errors[0] }}</div>
	</div>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			default() {
				return `text-input-${this._uid}`;
			}
		},
		disabled: {
			type: Boolean,
			default: false
		},
		value: Array,
		label: String,
		errors: {
			type: Array,
			default: () => []
		},
		withIcon: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: "Add a tag"
		}
	},

	data() {
		return {
			newTag: ""
		};
	},

	methods: {
		addTag() {
			if (
				this.newTag.trim().length === 0 ||
				this.value.includes(this.newTag.trim())
			) {
				return;
			}
			this.$emit("input", [...this.value, this.newTag.trim()]);
			this.newTag = "";
		},
		removeTag(tag) {
			this.$emit("input", this.value.filter(t => t !== tag));
		}
	},
	computed: {
		classes() {
			return {
				"border-2 focus:border-blue-600 focus:border-blue-600":
					this.bordered === true,
				"border bg-gray-200 focus:bg-white": this.bordered === false
			};
		}
	}
};
</script>

<style scoped>
.tags-input {
	display: flex;
	flex-wrap: wrap;
	background-color: #fff;
	border-width: 2px;
	border-radius: 0.625rem;
	padding-left: 0.5rem;
	padding-right: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.25rem;
}

.tags-input-tag {
	display: inline-flex;
	line-height: 1;
	align-items: center;
	font-size: 0.875rem;
	background-color: #e5f4f8;
	color: #2598b5;
	border-radius: 0.625rem;
	user-select: none;
	padding: 0.25rem 0.35rem;
	margin-right: 0.5rem;
	margin-bottom: 0.25rem;
}

.tags-input-tag:last-of-type {
	margin-right: 0;
}

.tags-input-remove {
	color: #2598b5;
	font-size: 1.125rem;
	line-height: 1;
}

.tags-input-remove:first-child {
	margin-right: 0.25rem;
}

.tags-input-remove:last-child {
	margin-left: 0.25rem;
}

.tags-input-remove:focus {
	outline: 0;
}

.tags-input-text {
	flex: 1;
	outline: 0;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;
	margin-left: 0.5rem;
	margin-bottom: 0.25rem;
	min-width: 10rem;
}

.py-16 {
	padding-top: 4rem;
	padding-bottom: 4rem;
}
</style>
