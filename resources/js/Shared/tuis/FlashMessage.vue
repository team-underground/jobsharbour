<template>
	<div>
		<div
			 
			class="mb-8 flex items-center justify-between bg-green-400 rounded-lg"
		>
			<div class="flex items-center">
				<svg
					class="ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"
					/>
				</svg>
				<div class="py-4 text-white text-sm font-medium">$page.flash.success</div>
			</div>
			<button type="button" class="group mr-2 p-2">
				<svg class="block w-8 h-8 text-gray-200 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
			</button>
		</div>
		<div
			 
			class="mb-8 flex items-center justify-between bg-red-400 rounded-lg"
		>
			<div class="flex items-center">
				<svg
				class="ml-4 mr-2 flex-no-shrink w-8 h-8 text-white fill-current"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path
					d="M11.953,2C6.465,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.493,2,11.953,2z M13,17h-2v-2h2V17z M13,13h-2V7h2V13z"
				/>
			</svg>
				<div class="py-4 text-white text-sm font-medium">
					<span v-if="Object.keys($page.errors).length === 1">There is one form error.</span>
					<span v-else>There are {{ Object.keys($page.errors).length }} form errors.</span>
				</div>
			</div>
			<button type="button" class="group mr-2 p-2">
				<svg class="block w-8 h-8 text-gray-200 fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: true
		};
	},
	watch: {
		"$page.flash": {
			handler() {
				this.show = true;
			},
			deep: true
		}
	}
};
</script>
