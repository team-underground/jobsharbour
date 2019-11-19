<template>
	<div class="border-b overflow-hidden">
		<div class="accordian__header">
			<a
				href="#"
				class="accordian__link py-5 block no-underline flex justify-between"
				@click.prevent="active = !active"
			>
				<slot name="title"></slot>

				<span class="down-Arrow" v-show="!active">
					<svg
						class="fill-current text-gray-500 w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
				</span>
				<span class="up-Arrow" v-show="active">
					<svg
						class="fill-current text-gray-500 w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
					</svg>
				</span>
			</a>
		</div>
		<div class="accordian__content pb-5" v-show="active">
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			active: false
		};
	}
};
</script>

<style scoped>
.border-b.last {
	border-bottom: 0 !important;
}
</style>