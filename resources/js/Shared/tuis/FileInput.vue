<template>
	<div>
		<label v-if="label" class="form-label block mb-1 font-semibold text-gray-700">{{ label }}</label>
		<div class="form-input p-0" :class="{ error: errors.length }">
			<input ref="file" type="file" :accept="accept" class="hidden" @change="change" />
			<div v-if="!value" class="flex items-center">
				<div
					class="w-24 h-24 items-center justify-center rounded-full inline-flex bg-gray-100 mr-5 text-gray-400 shadow-inner"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-image"
					>
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
						<circle cx="8.5" cy="8.5" r="1.5" />
						<polyline points="21 15 16 10 5 21" />
					</svg>
				</div>
				<div>
					<button
						type="button"
						class="rounded-lg px-5 py-2 bg-gray-500 hover:bg-gray-600 text-sm font-medium text-white"
						@click="browse"
					>Browse</button>
					<p
						class="mt-1 text-gray-500 mb-0 text-sm"
					>Image must be atleast 200x200px as a png or jpeg file</p>
				</div>
			</div>
			<div v-else>
				<div class="flex">
					<div
						class="shadow-inner image-preview mb-2 bg-gray-100 rounded-full bg-gray-100 h-24 w-24 overflow-hidden"
						v-if="imageData.length > 0"
					>
						<img class="shadow-inner preview rounded-full h-24 w-24 object-contain" :src="imageData" />
					</div>

					<div class="flex flex-1 items-center justify-between ml-4">
						<div class="pr-4">
							<span class="block text-gray-700 w-32 truncate" :title="value.name">{{ value.name }}</span>
							<span class="block text-gray-500 text-xs">({{ filesize(value.size) }})</span>
						</div>
						<button
							type="button"
							class="inline-flex justify-center w-10 h-10 rounded-lg bg-red-100 hover:bg-red-200 text-sm"
							@click="remove"
						>
							<svg
								class="fill-current text-red-600"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<path
									fill="none"
									d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
								/>
								<path
									d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
								/>
								<path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z" />
							</svg>
						</button>
					</div>
				</div>
				<!-- <div class="flex items-center justify-between">
					<div class="pr-4">
						<span class="block text-gray-700">{{ value.name }}</span>
						<span class="block text-gray-500 text-xs">({{ filesize(value.size) }})</span>
					</div>
					<button
						type="button"
						class="inline-flex justify-center w-8 h-8 rounded-lg bg-red-100 hover:bg-red-200 text-sm"
						@click="remove"
					>
						<svg
							class="fill-current text-red-600"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
						>
							<path
								fill="none"
								d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
							/>
							<path
								d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"
							/>
							<path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z" />
						</svg>
					</button>
				</div>-->
			</div>
		</div>
		<div v-if="errors.length" class="form-error text-red-600 mt-2 text-sm">{{ errors[0] }}</div>
	</div>
</template>

<script>
export default {
	props: {
		value: File,
		label: String,
		accept: String,
		errors: {
			type: Array,
			default: () => []
		}
	},
	watch: {
		value(value) {
			if (!value) {
				this.$refs.file.value = "";
			}
		}
	},
	data() {
		return {
			imageData: ""
		};
	},
	methods: {
		filesize(size) {
			var i = Math.floor(Math.log(size) / Math.log(1024));
			return (
				(size / Math.pow(1024, i)).toFixed(2) * 1 +
				" " +
				["B", "kB", "MB", "GB", "TB"][i]
			);
		},

		browse() {
			this.$refs.file.click();
		},

		change(e) {
			this.$emit("input", e.target.files[0]);
			this.previewImage(e);
		},

		remove() {
			this.$emit("input", null);
			this.errors = [];
		},

		previewImage: function(event) {
			// Reference to the DOM input element
			var input = event.target;
			// Ensure that you have a file before attempting to read it
			if (input.files && input.files[0]) {
				// create a new FileReader to read this image and convert to base64 format
				var reader = new FileReader();
				// Define a callback function to run, when FileReader finishes its job
				reader.onload = e => {
					// Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
					// Read image as base64 and set to imageData
					this.imageData = e.target.result;
				};
				// Start the reader job - read file as a data url (base64 format)
				reader.readAsDataURL(input.files[0]);
			}
		}
	}
};
</script>
 