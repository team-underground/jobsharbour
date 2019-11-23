<template>
	<div class="flex p-4 rounded-lg border-2" role="alert" :class="getAlertClass">
		<slot name="icon" v-if="withIcon">
			<svg
				v-if="variant == 'info'"
				class="flex-shrink-0 fill-current text-blue-500 mr-3"
				width="32"
				height="32"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
				/>
			</svg>

			<svg
				v-if="variant == 'danger'"
				class="flex-shrink-0 fill-current text-red-500 mr-3"
				width="32"
				height="32"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
				/>
			</svg>

			<svg
				v-if="variant == 'success'"
				class="flex-shrink-0 fill-current text-green-500 mr-3"
				width="32"
				height="32"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path d="M0 0h24v24H0z" fill="none" />
				<path
					d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
				/>
			</svg>
		</slot>
		<div class="pt-1">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "Alert",

	props: {
		variant: {
			type: String,
			default: "info"
		},
		withIcon: {
			type: Boolean,
			default: true
		}
	},

	computed: {
		getAlertClass() {
			return {
				"bg-blue-100 text-blue-800 border-blue-200":
					this.variant == "info",
				"bg-red-100 text-red-800 border-red-200":
					this.variant == "danger",
				"bg-green-100 text-green-800 border-green-200":
					this.variant == "success",

				"bg-orange-100 text-gray-600 border-orange-200":
					this.variant == "warning"
			};
		}
	}
};
</script>

<style scoped>
.alert-custom {
	border-radius: 10px;
}
.fill-current {
	fill: currentColor;
}
.text-alert-danger {
	color: #dc3545;
}
</style>