<template>
	<layout>
		<div class="bg-blue-200 px-4 py-10 md:py-20 relative overflow-hidden">
			<div class="max-w-2xl mx-auto text-center relative z-10">
				<heading size="display" class="mb-4">Hello Employers</heading>
				<heading
					class="mb-1 text-blue-800 md:text-xl"
				>Still struggling to communicate with job seekers? Your quest is over. Here we come with the best platform where you can showcase your job lists, communicate with a mass of potential candidates in no time and also pick up the best out of them.</heading>
			</div>

			<div class="hidden md:block">
				<div class="-mb-10 h-16 w-32 bg-blue-300 absolute left-0 bottom-0 skew_aa"></div>
				<div class="mb-6 h-12 w-48 bg-gray-200 absolute left-0 bottom-0 ml-10 skew_aa"></div>
				<div class="-mb-16 h-20 w-32 bg-orange-200 absolute left-0 bottom-0 ml-16 skew_aa"></div>

				<div class="mb-6 h-16 w-32 bg-blue-300 absolute right-0 bottom-0 skew_aa"></div>
				<div class="mb-6 h-12 w-48 bg-gray-200 absolute right-0 bottom-0 mr-10 skew_aa"></div>
				<div class="-mb-16 h-20 w-32 bg-orange-200 absolute right-0 bottom-0 mr-16 skew_aa"></div>
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="max-w-2xl mx-auto">
				<div class="mb-8 text-center">
					<heading size="heading2" class="mb-4">Simple. Fair Pricing</heading>
					<toggle-switch :options="myOptions" v-model="plan" />
				</div>

				<alert class="mb-10" v-if="plan === 'Company'">
					As
					<strong>Company</strong> we refer to an individual organization HR/Admin registering in our portal for job posting.
				</alert>

				<alert class="mb-10" v-if="plan === 'Recruiting Firm'">
					As
					<strong>Recruiting Firm</strong> we refer to a consultancy HR/Representative registering in our portal for job posting for the concerned company.
				</alert>

				<div class="md:flex -mx-4" v-if="plan === 'Company'">
					<div class="md:w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1 relative">
							<heading
								size="large"
								class="mb-2 text-blue-600 text-center"
							>{{pricing['company-basic'].display_name}}</heading>

							<heading size="heading" class="mb-5 text-center">Free Forever</heading>

							<list
								:lists="['Add 1 company', 'Unlimited job posts', 'Email Support', 'Analytics', 'Basic Promotion']"
								unorderedListColor="text-blue-400"
							></list>

							<div class="mt-5 md:mt-0 relative md:absolute left-0 right-0 block bottom-0 mx-8 mb-6">
								<loading-button size="small" rounded="large" class="w-full">Try for Free, Forever</loading-button>
							</div>
						</card>
					</div>
					<div class="md:w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1">
							<heading
								size="large"
								class="mb-2 text-orange-600 text-center"
							>{{pricing['company-pro'].display_name}}</heading>

							<heading
								size="heading"
								class="mb-5 text-center"
							>Rs. {{pricing['company-pro'].package_price}} /month</heading>

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

				<div class="md:flex -mx-4" v-if="plan === 'Recruiting Firm'">
					<div class="md:w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1 relative">
							<heading
								size="large"
								class="mb-2 text-blue-600 text-center"
							>{{pricing['consultancy-basic'].display_name}}</heading>

							<heading size="heading" class="mb-5 text-center">Free Forever</heading>

							<list
								:lists="['Add 5 company', 'Unlimited job posts', 'Email Support', 'Analytics', 'Basic Promotion']"
								unorderedListColor="text-blue-400"
							></list>

							<div class="mt-5 md:mt-0 relative md:absolute left-0 right-0 block bottom-0 mx-8 mb-6">
								<loading-button size="small" rounded="large" class="w-full">Try for Free, Forever</loading-button>
							</div>
						</card>
					</div>
					<div class="md:w-1/2 px-4 flex">
						<card class="mb-8 shadow-lg flex-1">
							<heading
								size="large"
								class="mb-2 text-orange-600 text-center"
							>{{pricing['consultancy-pro'].display_name}}</heading>

							<heading
								size="heading"
								class="mb-5 text-center"
							>Rs. {{pricing['consultancy-pro'].package_price}} /month</heading>

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

			<contact-us />

			<!-- <heading class="text-center">
				Questions? Drop us an email at
				<link-to to="mailto:hello@jobsharbour.com">hello@jobsharbour.com</link-to>.
				<br />We usually get back within 24 hours.
			</heading> -->
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
import Alert from "@/Shared/tuis/Alert";
import ContactUs from "@/Pages/ContactUs";

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		List,
		ToggleSwitch,
		LoadingButton,
		Alert,
		ContactUs
	},
	props: {
		pricing: Object
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

.skew_aa {
	-webkit-transform: skew(0deg, -20deg);
	-moz-transform: skew(0deg, -20deg);
	-ms-transform: skew(0deg, -20deg);
	-o-transform: skew(0deg, -20deg);
	transform: skew(0deg, -20deg);
	transform-origin: 0;
}
</style>