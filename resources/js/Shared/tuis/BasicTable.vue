<template>
	<div class="overflow-x-auto bg-white rounded-lg shadow">
		<table class="w-full whitespace-no-wrap bg-white overflow-hidden" :class="classes">
			<thead>
				<tr class="text-left">
					<th
						:class="{'text-right': heading.align === 'right' && typeof heading.align != 'undefined', 'text-center': heading.align === 'center' && typeof heading.align != 'undefined'}"
						class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
						v-for="(heading, headingIndex) in headings"
						:key="headingIndex"
					>
						<template v-if="typeof heading.title != 'undefined'">{{ heading.title }}</template>
						<template v-else>{{ heading }}</template>
					</th>
				</tr>
			</thead>
			<tbody>
				<slot></slot>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		datas: {
			type: Array,
			default: () => []
		},

		headings: {
			type: Array,
			default: () => []
		},

		theme: {
			type: String,
			default: "normal"
		}
	},

	computed: {
		classes() {
			return {
				"table-striped": this.theme === "striped"
			};
		}
	}
};
</script>

<style>
.table-striped tbody tr:nth-child(even) {
	background-color: #f7fafc;
}
</style>
