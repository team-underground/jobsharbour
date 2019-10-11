<template>
	<div class="bg-white shadow rounded-lg border">
		<div class="flex items-center justify-between px-4 py-2 bg-gray-100 overflow-hidden rounded-t-lg">
			<h2 class="text-sm text-gray-600 font-semibold uppercase tracking-wide">
				<slot name="title"></slot>
			</h2>
			<div>
				<svg
					class="fill-current text-gray-500"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						d="M8.293 6.293L2.586 12 8.293 17.707 9.707 16.293 5.414 12 9.707 7.707zM15.707 17.707L21.414 12 15.707 6.293 14.293 7.707 18.586 12 14.293 16.293z"
					/>
				</svg>
			</div>
		</div>
		<div class="p-4">
			<slot name="body"></slot>
		</div>
	</div>
</template>
