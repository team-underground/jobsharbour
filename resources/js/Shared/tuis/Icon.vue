<template>
	<div :style="{ width: width + 'px', height: height + 'px'}">
		<svg
			v-if="name === 'edit'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-edit"
		>
			<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
		</svg>

		<svg
			v-if="name === 'clock'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-clock"
		>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</svg>

		<svg
			v-else-if="name === 'filter'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-filter"
		>
			<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
		</svg>

		<svg
			v-else-if="name === 'briefcase'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-briefcase"
		>
			<rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
			<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
		</svg>

		<svg
			v-else-if="name === 'map-pin'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-map-pin"
		>
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
			<circle cx="12" cy="10" r="3" />
		</svg>

		<svg
			v-else-if="name === 'user'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-user"
		>
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>

		<svg
			v-else-if="name === 'chevron-left'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-chevron-left"
		>
			<polyline points="15 18 9 12 15 6" />
		</svg>

		<svg
			v-else-if="name === 'chevron-right'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-chevron-right"
		>
			<polyline points="9 18 15 12 9 6" />
		</svg>

		<svg
			v-else-if="name === 'globe'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-globe"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="2" y1="12" x2="22" y2="12" />
			<path
				d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
			/>
		</svg>

		<svg
			v-else-if="name === 'users'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-users"
		>
			<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>

		<svg
			v-else-if="name === 'info'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-info"
		>
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="16" x2="12" y2="12" />
			<line x1="12" y1="8" x2="12" y2="8" />
		</svg>

		<svg
			v-else-if="name === 'credit-card'"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="feather feather-credit-card"
		>
			<rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
			<line x1="1" y1="10" x2="23" y2="10" />
		</svg>

		<svg
			v-else-if="name === 'wallet'"
			class="fill-current"
			xmlns="http://www.w3.org/2000/svg"
			:width="width"
			:height="height"
			viewBox="0 0 24 24"
		>
			<path d="M16 12H18V16H16z" />
			<path
				d="M20,7V5c0-1.103-0.897-2-2-2H5C3.346,3,2,4.346,2,6v12c0,2.201,1.794,3,3,3h15c1.103,0,2-0.897,2-2V9 C22,7.897,21.103,7,20,7z M5,5h13v2H5C4.448,7,4,6.551,4,6S4.448,5,5,5z M20,19H5.012C4.55,18.988,4,18.805,4,18V8.815 C4.314,8.928,4.647,9,5,9h15V19z"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	props: {
		name: String,
		width: {
			type: Number,
			default: 24
		},
		height: {
			type: Number,
			default: 24
		}
	}
};
</script>