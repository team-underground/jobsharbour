<template>
	<layout>
		<div class="px-4 py-6 md:py-16 relative">
			<div class="max-w-3xl mx-auto">
				<alert v-if="$page.flash.success" class="mb-4">{{ $page.flash.success }}</alert>
				<heading size="heading2" class="mb-2">We have removed your email address from our list.</heading>
				<heading>We are sorry to see you go.</heading>

				<contact-us />
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Alert from "@/Shared/tuis/Alert";
import ContactUs from "@/Pages/ContactUs";

export default {
	components: {
		Layout,
		Heading,
		Alert,
		ContactUs
	}
};
</script>
