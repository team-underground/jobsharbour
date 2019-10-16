<template>
	<span
		class="px-2 rounded-full text-sm uppercase tracking-wide font-semibold inline-block"
		:class="badgeClasses"
		:variant="variant"
		:bordered="bordered"
	>
		<slot />
	</span>
</template>

<script>
export default {
	name: "Badge",

	props: {
		variant: {
			type: String,
			default: "info"
		},
		bordered: {
			type: Boolean,
			default: true
		}
	},
	computed: {
		badgeClasses() {
			return {
				"bg-blue-100 text-blue-500": this.variant === "info",
				"bg-green-100 border-green-200 text-green-500":
					this.variant === "success",
				"bg-red-100 border-red-200 text-red-500":
					this.variant === "danger",
				"bg-orange-100 border-orange-200 text-orange-500":
					this.variant === "warning",

				"border-2": this.bordered == true,
				"border-blue-200":
					this.variant === "info" && this.bordered == true,
				"border-green-200":
					this.variant === "success" && this.bordered == true,
				"border-red-200":
					this.variant === "danger" && this.bordered == true,
				"border-orange-200":
					this.variant === "warning" && this.bordered == true
			};
		}
	}
};
</script>
