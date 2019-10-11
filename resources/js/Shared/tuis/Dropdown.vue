<template>
	<div class="relative">
		<button type="button" @click="toggle" class="inline-block">
			<slot name="trigger"></slot>
		</button>

		<div :class="[ isOpen ? 'block' : 'hidden']">
			<transition name="bounce">
				<div>
					<button
						@click="isOpen = false"
						type="button"
						class="z-30 block fixed inset-0 w-full h-full cursor-default"
					></button>
					<div class="absolute z-40 right-0">
						<slot name="dropdown"></slot>
					</div>
				</div>
			</transition>
		</div>
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