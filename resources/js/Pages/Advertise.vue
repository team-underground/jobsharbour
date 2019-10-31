<template>
	<layout>
		<div
			class="bg-blue-600 flex items-center justify-center bg-cover bg-center"
			style="background-image:url('/duotone.png'); height:400px;"
		>
			<div class="text-center">
				<h2 class="text-3xl md:text-5xl text-white font-bold tracking-tight">Advertise With Us</h2>
				<p class="text-white text-lg mb-8">connect with the largest audience of active.</p>
				<loading-button
					variant="white"
					class="shadow-md"
					tag="a"
					to="#"
					v-scroll-to="'#contactform'"
				>Get Started</loading-button>
			</div>
		</div>
		<div class="py-10">
			<div class="max-w-5xl mx-auto flex flex-wrap">
				<flash-message class="w-full mx-4"></flash-message>
				<div class="w-full md:w-1/3">
					<div class="p-2 md:p-6 m-2">
						<div
							class="w-12 h-12 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
						>
							<icon name="trending" class="w-6 h-6"></icon>
						</div>
						<heading size="large" class="mb-2">Get Quality Traffics</heading>
						<p>We have a daily traffic of more than 20,000+ users from all over North-East</p>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="p-2 md:p-6 m-2">
						<div
							class="w-12 h-12 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
						>
							<icon name="target" class="w-6 h-6"></icon>
						</div>
						<heading size="large" class="mb-2">Target Audience</heading>
						<p>Connect with the largest audience of active, influencial job creators, job seekers and workaholics</p>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="p-2 md:p-6 m-2">
						<div
							class="w-12 h-12 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
						>
							<icon name="database" class="w-6 h-6"></icon>
						</div>
						<heading size="large" class="mb-2">Drive Conversions</heading>
						<p>Put up the right deal & make it viral among our users, gain exceptional traffic leading to high conversions</p>
					</div>
				</div>
			</div>
			<div class="max-w-5xl mx-auto p-8 pb-0">
				<heading size="heading" class="mb-2">Basic Ad</heading>
				<p
					class="mb-3"
				>This ad choice is great for businesses that don't have a web page but still want to be represented. The ad will appear under the appropriate category in the "Homepage" section.</p>
				<p class="mb-3 text-lg font-semibold">Ad Features:</p>
				<list
					unordered-list-color="text-blue-600"
					:lists="['Your company name and contact information.','Customized text describing your company and services. 20 words limit.','&#x20b9; 299.00 monthly. Six-month minimum contract. Payable quarterly, semi annually and annually.']"
				></list>

				<heading size="heading" class="mt-8 mb-2">Active Ad</heading>
				<p class="mb-3">This ad will appear under the appropriate category in the "Homepage" section.</p>
				<p class="mb-3 text-lg font-semibold">Ad Features:</p>
				<list
					unordered-list-color="text-blue-600"
					:lists="['Your company name in BOLD.','Active Link to you company web page','Customized text describing your company and services. 50 word limit.','&#x20b9; 599.00 monthly. Six-month minimum contract. Payable quarterly, semi annually and annually.']"
				></list>

				<alert class="mt-8">
					If none of these options suits your needs please email us
					<mail-to
						subject="Query for advertisement details"
						to="hello@jobsharbour.com"
					>hello@jobsharbour.com</mail-to>with your requests. Customized ads are subject to additional fees. Ads may be edited for clarity. We normally do not charge a set up fee. Additional fees may be charged if graphics or text requires additional time. We will contact you if that appears necessary. Ad text and graphics may be changed during the life of the contract for a nominal fee. No refunds will be given in the event of early cancellation of ads.
				</alert>
			</div>

			<div class="max-w-2xl mx-auto py-8" id="contactform">
				<heading size="heading" class="mb-8 text-center">Ready to reach our Audience? Get in Touch</heading>
				<card>
					<text-input
						class="mb-4"
						label="Name"
						v-model="query.name"
						:errors="errors['name']"
						@keydown="delete errors['name']"
					></text-input>
					<text-input
						class="mb-4"
						label="E-mail"
						v-model="query.email"
						:errors="errors['email']"
						@keydown="delete errors['email']"
					></text-input>
					<text-input
						class="mb-4"
						label="Phone"
						v-model="query.phone"
						:errors="errors['phone']"
						@keydown="delete errors['phone']"
					></text-input>
					<text-input
						class="mb-4"
						label="Company"
						v-model="query.company"
						:errors="errors['company']"
						@keydown="delete errors['company']"
					></text-input>
					<textarea-input
						class="mb-6"
						label="How can we help?"
						v-model="query.how_can_we_help"
						:errors="errors['how_can_we_help']"
						@keydown="delete errors['how_can_we_help']"
					></textarea-input>
					<div class="mb-4">
						<vue-recaptcha
							:sitekey="sitekey"
							:loadRecaptchaScript="true"
							ref="recaptcha"
							@verify="onVerify"
							@expired="onExpired"
						></vue-recaptcha>
						<div
							v-if="!verified"
							class="text-gray-600 mt-1 text-sm"
						>Before sending query, please verify that you are a human</div>
					</div>

					<loading-button
						size="small"
						ref="advertiseRequestButton"
						class="mt-2 md:mt-0"
						@click="saveAdvertiseRequest"
					>Send Query</loading-button>
				</card>
			</div>
		</div>
	</layout>
</template>

<script>
const MailtoUI = require("mailtoui/dist/mailtoui-min.js");

import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Card from "@/Shared/tuis/Card";
import TextInput from "@/Shared/tuis/TextInput";
import TextareaInput from "@/Shared/tuis/TextareaInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Icon from "@/Shared/tuis/Icon";
import List from "@/Shared/tuis/List";
import Alert from "@/Shared/tuis/Alert";
import MailTo from "@/Shared/tuis/MailTo";
import FlashMessage from "@/Shared/tuis/FlashMessage";
import VueRecaptcha from "vue-recaptcha";

export default {
	props: ["errors"],
	components: {
		Layout,
		Heading,
		Card,
		TextInput,
		TextareaInput,
		LoadingButton,
		Icon,
		List,
		Alert,
		MailTo,
		FlashMessage,
		VueRecaptcha
	},
	data() {
		return {
			verified: false,
			query: {},
			sitekey: "6LcsZMAUAAAAAGCFWIRru-E4gq8s23vp1o5HHZSX"
		};
	},
	mounted() {
		MailtoUI.run();
	},
	methods: {
		onVerify: function(response) {
			this.verified = true;
		},
		onExpired: function() {
			this.verified = false;
		},
		resetRecaptcha() {
			this.$refs.recaptcha.reset(); // Direct call reset method
		},
		saveAdvertiseRequest() {
			if (!this.verified) {
				return;
			}
			this.$refs.advertiseRequestButton.startLoading();

			this.$inertia
				.post(this.route("advertise.query"), this.query)
				.then(() => {
					this.$refs.advertiseRequestButton.stopLoading();
					if (Object.keys(this.$page.errors).length === 0) {
						this.query = {};
					}
				})
				.catch(() => {
					this.$refs.advertiseRequestButton.stopLoading();
				});
		}
	}
};
</script>
