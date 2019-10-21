<template>
	<div class="relative">
		<button type="button" @click="toggle" class="inline-flex focus:outline-none">
			<slot name="trigger"></slot>
		</button>

		<transition
			enter-class="opacity-0 scale-90"
			enter-active-class="ease-out transition-fastest"
			enter-to-class="opacity-100 scale-100"
			leave-class="opacity-100 scale-100"
			leave-active-class="ease-in transition-fastest"
			leave-to-class="opacity-0 scale-90"
		>
			<div v-if="isOpen">
				<button
					@click="isOpen = false"
					type="button"
					class="z-30 block fixed inset-0 w-full h-full cursor-default"
				></button>
				<div class="absolute z-50 right-0 origin-top-right">
					<slot name="dropdown"></slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: false
		};
	},

	mounted() {
		const onEscape = e => {
			if (!this.isOpen || e.key !== "Escape") {
				return;
			}
			this.isOpen = false;
		};
		document.addEventListener("keydown", onEscape);
		this.$on("hook:destroyed", () => {
			document.removeEventListener("keydown", onEscape);
		});
	},

	methods: {
		toggle() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>
