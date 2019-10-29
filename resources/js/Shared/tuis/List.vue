<template>
	<component :is="theme">
		<li v-for="(list, listIdx) in lists" :key="listIdx" :class="classes" class="flex">
			<div v-if="theme === 'ul'" class="w-10">
				<svg
					class="fill-current"
					:class="unorderedListColor"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path
						d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M10.001,16.413l-3.713-3.705 L7.7,11.292l2.299,2.295l5.294-5.294l1.414,1.414L10.001,16.413z"
					/>
				</svg>
			</div>
			<div class="flex-1" v-html="list"></div>
		</li>
	</component>
</template>

<script>
export default {
	name: "List",

	props: {
		theme: {
			type: String,
			default: "ul"
		},

		lists: {
			type: Array,
			default: () => []
		},

		unorderedListColor: {
			type: String
		}
	},

	computed: {
		classes() {
			return [{ "list-none list-style-ul": this.theme === "ul" }];
		}
	}
};
</script>

<style>
/* .list-style-one::before {
	content: "";
	width: 8px;
	height: 8px;
	background-color: blue;
	display: inline-block;
	vertical-align: middle;
	border-radius: 50%;
} */

.list-style-ul:not(:last-child) {
	margin-bottom: 0.75rem;
}
</style>