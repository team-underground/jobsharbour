<template>
	<layout>
		<div class="px-4 py-6 md:py-16 relative">
			<div class="max-w-3xl mx-auto text-center">
				<heading size="display" class="mb-4">Your New Hire is Here</heading>
				<heading class="mb-1">
					Are you still figuring out where to post your next job post? Don't worry we are here to help you.
					We will make sure your job listing reaches to large number of potentials candidates, so that you can pick the best out of them. Try
					<strong>Jobs Harbour</strong> today.
				</heading>
			</div>
		</div>

		<div class="pb-10 min-h-screen px-4 z-30 relative">
			<div class="max-w-2xl mx-auto">
				<div class="mb-8 text-center">
					<heading size="heading2" class="mb-4">Simple. Fair Pricing</heading>
					<toggle-switch :options="myOptions" v-model="plan" />
				</div>

				<div class="flex -mx-4" v-if="plan === 'Company'">
					<div class="w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1 relative">
							<heading size="large" class="mb-2 text-blue-600 text-center">Basic</heading>

							<heading size="heading" class="mb-5 text-center">Free Forever</heading>

							<list
								:lists="['Add 1 company', 'Unlimited job posts', 'Email Support', 'Analytics', 'Basic Promotion']"
								unorderedListColor="text-blue-400"
							></list>

							<div class="absolute left-0 right-0 block bottom-0 mx-8 mb-6">
								<loading-button size="small" rounded="large" class="w-full">Try for Free, Forever</loading-button>
							</div>
						</card>
					</div>
					<div class="w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1">
							<heading size="large" class="mb-2 text-orange-600 text-center">Pro</heading>

							<heading size="heading" class="mb-5 text-center">Rs. 299 /month</heading>

							<list
								:lists="['Add 1 company', 'Unlimited job posts', 'Email Support', 'Analytics', 'Advance Promotion', 'Ads on Social Sites', 'Many more...']"
								unorderedListColor="text-orange-400"
							></list>

							<loading-button
								variant="warning"
								size="small"
								rounded="large"
								class="mt-5 w-full opacity-50"
							>Coming Soon</loading-button>
						</card>
					</div>
				</div>

				<div class="flex -mx-4" v-if="plan === 'Recruiting Firm'">
					<div class="w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1 relative">
							<heading size="large" class="mb-2 text-blue-600 text-center">Basic</heading>

							<heading size="heading" class="mb-5 text-center">Free Forever</heading>

							<list
								:lists="['Add 5 company', 'Unlimited job posts', 'Email Support', 'Analytics', 'Basic Promotion']"
								unorderedListColor="text-blue-400"
							></list>

							<div class="absolute left-0 right-0 block bottom-0 mx-8 mb-6">
								<loading-button size="small" rounded="large" class="w-full">Try for Free, Forever</loading-button>
							</div>
						</card>
					</div>
					<div class="w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1">
							<heading size="large" class="mb-2 text-orange-600 text-center">Pro</heading>

							<heading size="heading" class="mb-5 text-center">Rs. 399 /month</heading>

							<list
								:lists="['Add unlimited company', 'Unlimited job posts', 'Email Support', 'Analytics', 'Advance Promotion', 'Ads on Social Sites', 'Many more...']"
								unorderedListColor="text-orange-400"
							></list>

							<loading-button
								variant="warning"
								size="small"
								rounded="large"
								class="mt-5 w-full opacity-50"
							>Coming Soon</loading-button>
						</card>
					</div>
				</div>
			</div>

			<heading class="text-center">
				Questions? Drop us an email at
				<link-to to="mailto:hello@jobsharbour.com">hello@jobsharbour.com</link-to>.
				<br />We usually get back within 24 hours.
			</heading>
		</div>
	</layout>
</template>

<script>
import ToggleSwitch from "vuejs-toggle-switch";

import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Icon from "@/Shared/tuis/Icon";
import LinkTo from "@/Shared/tuis/LinkTo";
import Card from "@/Shared/tuis/Card";
import List from "@/Shared/tuis/List";
import LoadingButton from "@/Shared/tuis/LoadingButton";

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		List,
		ToggleSwitch,
		LoadingButton
	},
	data() {
		return {
			plan: "Company",

			myOptions: {
				layout: {
					color: "#666666",
					backgroundColor: "#ffffff",
					selectedColor: "white",
					selectedBackgroundColor: "#29a9c9",
					borderColor: "transparent",
					fontFamily: "Inter",
					fontWeight: "bold",
					fontWeightSelected: "bold",
					squareCorners: false,
					noBorder: true
				},
				size: {
					fontSize: 1,
					height: 3.2,
					padding: 0.7,
					width: 20
				},
				items: {
					delay: 0.4,
					preSelected: "Company",
					disabled: false,
					labels: [
						{
							name: "Company"
						},
						{
							name: "Recruiting Firm"
						}
					]
				}
			}
		};
	}
};
</script>

<style>
.toggle-switch {
	background-color: #ffffff;
	display: flex;
	height: 3.8rem !important;
	padding-left: 6px !important;
	padding-right: 6px !important;
	align-items: center;
}
.toggle-switch,
.toggle-switch li:first-child label,
.toggle-switch li:last-child label {
	border-radius: 1000px !important;
}
</style>