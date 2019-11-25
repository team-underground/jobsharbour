<template>
	<a
		:href="`mailto:${to}?subject=${subject || ''}`"
		class="mailtoui inline-flex"
		:class="[{ 'text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400': styled == true}]"
	>
		<slot></slot>
	</a>
</template>

<script>
const MailtoUI = require("mailtoui/dist/mailtoui-min.js");

export default {
	props: {
		to: {
			type: String,
			default: "hello@jobsharbour.com"
		},
		subject: {
			type: String,
			default: "Subject goes here"
		},
		styled: {
			type: Boolean,
			default: true
		}
	},

	mounted() {
		MailtoUI.run();
	}
};
</script>

