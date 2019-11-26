<template>
	<layout title="Refund">
		<div class="px-4 py-6 md:py-16 relative">
			<div class="max-w-5xl mx-auto">
				<heading size="display" class="mb-12 text-center">Cancellation & Refund Policy</heading>
				<p
					class="mb-3"
				>You can cancel your payment only if it has not been posted to the the website, and your order is in pending status. Once your order is completed, and the listings are approved, you will not be able to cancel the same order anyways. You can cancel the same order within 24 hours, provided your listings are not approved or live.</p>
				<p class="mb-3">
					In case, you have sent a request for a cancellation, and if your cancellation request is denied, then you will get a confirmation email from us regarding this. For cancellation of an order, you will need to send the Order Number, listing name, date or time of placing the order to
					<mail-to to="support@jobsharbour.com" subject="Payment related query">support@jobsharbour.com</mail-to>.
				</p>
				<p
					class="mb-3"
				>In case of a cancellation is accepted, then the refund will be credited to the users bank account electronically. Users need to provide the mode of payments and list their bank account information in the email for cancellation.</p>
			</div>
		</div>
	</layout>
</template>

<script>
const MailtoUI = require("mailtoui/dist/mailtoui-min.js");

import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Icon from "@/Shared/tuis/Icon";
import LinkTo from "@/Shared/tuis/LinkTo";
import Card from "@/Shared/tuis/Card";
import List from "@/Shared/tuis/List";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import MailTo from "@/Shared/tuis/MailTo";

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		List,
		LoadingButton,
		MailTo
	},

	mounted() {
		MailtoUI.run();
	}
};
</script>
