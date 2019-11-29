<template>
	<layout title="Home">
		<div
			class="bg-white border-t md:border-0 border-gray-200 md:bg-white overflow-hidden px-4 relative z-20 md:pt-5"
		>
			<div class="hidden">
				<div class="h-4 w-24 bg-blue-100 absolute left-0 top-0 mt-4 skew_aa"></div>
				<div class="h-8 w-full bg-gray-100 absolute left-0 top-0 mt-10 skew_aa"></div>
				<div class="h-4 w-10 bg-gray-100 absolute left-0 top-0 mt-20 skew_aa"></div>

				<div class="-mb-10 h-16 w-32 bg-blue-200 absolute left-0 bottom-0 skew_aa"></div>
				<div class="mb-4 h-12 w-32 bg-gray-100 absolute left-0 bottom-0 ml-10 skew_aa"></div>
				<div class="-mb-16 h-20 w-32 bg-orange-200 absolute left-0 bottom-0 ml-16 skew_aa"></div>

				<div class="h-10 w-10 bg-blue-400 absolute right-0 top-0 mt-16 mr-6 skew_aa"></div>
				<div class="h-10 w-10 bg-orange-200 absolute right-0 top-0 mt-10 mr-10 skew_aa"></div>

				<div class="mb-32 h-16 w-32 bg-blue-200 absolute right-0 bottom-0 skew_aa"></div>
				<div class="mb-12 h-12 w-48 bg-gray-100 absolute right-0 bottom-0 ml-4 skew_aa"></div>
				<div class="-mb-16 h-20 w-64 bg-orange-200 absolute right-0 bottom-0 ml-6 skew_aa"></div>
			</div>

			<div
				class="hidden md:block absolute top-0 right-0 mt-6"
				style="height: 100%; width: 45%; background: rgb(238, 248, 244); border-top-left-radius: 150px;"
			></div>

			<div class="md:flex relative max-w-6xl mx-auto">
				<div class="lg:w-3/5 md:flex mx-auto">
					<div class="py-10 md:pt-16 mb:pb-32 text-center md:text-left">
						<heading class="mb-1 text-blue-600 text-xl md:text-2xl">Struggling for jobs in North-East?</heading>
						<heading size="display" class="mb-8" tag="h1">
							<span class="block">Unveil job opportunities</span> in our harbour right now!
						</heading>
						<div class="mt-4 md:mt-0 w-64 md:w-auto mx-auto">
							<loading-button
								tag="a"
								to="/jobs"
								class="block w-full md:w-auto mx-auto shadow-dropdown"
							>Explore Jobs Now</loading-button>
							<div class="mt-4 hidden md:block md:inline-block md:ml-4">
								<loading-button
									tag="a"
									to="/categories"
									variant="white"
									class="block w-full md:w-auto shadow-dropdown"
								>Browse Categories</loading-button>
							</div>
						</div>

						<img src="/jh-banner.svg" alt="career" class="inline-block md:hidden mx-auto -mb-24 mt-8" />
					</div>
				</div>
				<div class="lg:w-2/5 relative hidden md:block">
					<div class="md:hidden rounded-t-full" style="background: rgb(238, 248, 244);">
						<div class="mx-auto md:hidden text-center" style="width: 200px">
							<lottie-player
								src="/lf30_editor_wJXeMM.json"
								background="transparent"
								speed="1"
								loop
								style="width: 200px; height: 200px;"
								autoplay
							></lottie-player>
						</div>
					</div>
					<lottie-player
						src="/lf30_editor_wJXeMM.json"
						background="transparent"
						speed="1"
						loop
						style="width: 420px; height: 420px;"
						class="mx-auto hidden md:block"
						autoplay
					></lottie-player>
				</div>
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<div class="md:flex -mx-4">
					<div class="md:w-2/3 px-4">
						<div class="flex items-center mb-4 justify-between">
							<heading size="heading">Latest Job Posts</heading>
							<link-to to="/jobs">View All</link-to>
						</div>

						<card
							tag="inertia-link"
							:to="`/jobs/${post.job_slug}`"
							v-for="(post, idx) in jobposts.data"
							:key="idx"
							class="mb-4 relative"
						>
							<div
								v-if="post.job_new === 'yes'"
								class="bg-red-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2"
							>New</div>
							<div class="flex">
								<div v-if="post.company.company_logo == null" class="mr-5 flex-shrink-0 w-16 h-16">
									<avatar :name="post.company.company_name" color="blue" shape="rounded" size="xlarge"></avatar>
								</div>
								<div v-else>
									<div
										class="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-lg bg-gray-100 block mr-5 overflow-hidden border p-1"
									>
										<img
											:src="post.company.company_logo_path"
											alt="company-logo"
											class="object-contain w-full h-full rounded-lg"
										/>
									</div>
								</div>

								<div class="flex-1">
									<div class="md:flex mb-4">
										<div class="flex-1">
											<div class="mb-1 pr-3">
												<heading size="large" class="inline-block" tag="h2">{{ post.job_title }}</heading>
											</div>
											<heading
												size="small"
												class="mb-1 font-semibold inline-block"
											>{{ post.company.company_name }}</heading>
											<heading size="small" class="mb-1 inline-block md:block">in {{ post.job_category }}</heading>
										</div>
										<div class="md:w-48 flex-col justify-between mt-1">
											<div class="mb-1 md:flex-1 flex items-center">
												<icon class="mr-2 text-gray-400" :width="20" :height="20" name="map-pin"></icon>
												<heading size="small">{{ post.job_location }}</heading>
											</div>
											<div class="mb-1 md:flex-1 flex items-center" v-if="post.organisation_type == 'Private'">
												<icon class="mr-2 text-gray-400" name="wallet" :width="20" :height="20"></icon>
												<heading size="small">Rs. {{ post.job_salary }}/m</heading>
											</div>
											<div class="mb-1 md:flex-1 flex items-center">
												<icon class="mr-2 text-gray-400" name="clock" :width="20" :height="20"></icon>
												<heading size="small">{{ post.job_type }}</heading>
											</div>
										</div>
									</div>

									<div class="flex justify-between">
										<heading size="small">{{ post.job_published_at_formatted }}</heading>
										<link-to :to="`/jobs/${post.job_slug}`" class="text-sm">View Details</link-to>
									</div>
								</div>
							</div>
						</card>

						<div class="text-center pt-5 pb-10">
							<loading-button tag="inertia-link" to="/jobs">See More Jobs</loading-button>
						</div>
					</div>
					<div class="md:w-1/3 px-4">
						<card class="mt-12 mb-5 relative px-5 py-5" :is-padding="false">
							<div class="flex justify-between items-center mb-2">
								<heading class="leading-tight text-gray-700 tracking-tight text-xl font-semibold">Categories</heading>

								<inertia-link
									href="/categories"
									class="inline-flex text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400"
								>View all</inertia-link>
							</div>

							<template v-for="category in category_wise_total">
								<inertia-link
									:href="`/jobs?category=${category.category_name}`"
									class="flex rounded-full py-2 hover:bg-blue-100 trigger-icon"
								>
									<div
										class="w-10 h-10 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full bg-blue-300-hover"
									>
										<icon name="users" class="w-5 h-5" v-if="category.category_name === 'Human Resources'"></icon>
										<icon
											name="edit2"
											class="w-5 h-5"
											v-if="category.category_name === 'Media Comm and Writing'"
										></icon>
										<icon name="briefcase" class="w-5 h-5" v-if="category.category_name === 'Business'"></icon>
										<icon
											name="paper-clip"
											class="w-5 h-5"
											v-if="category.category_name === 'Admin and Office'"
										></icon>
										<icon name="clipboard" class="w-5 h-5" v-if="category.category_name === 'Management'"></icon>
										<icon name="heart" class="w-5 h-5" v-if="category.category_name === 'Healthcare'"></icon>
										<icon
											name="headphones"
											class="w-5 h-5"
											v-if="category.category_name === 'Customer Service'"
										></icon>
										<icon
											name="trending"
											class="w-5 h-5"
											v-if="category.category_name === 'Accounting and Finance'"
										></icon>
										<icon name="monitor" class="w-5 h-5" v-if="category.category_name === 'Computer and IT'"></icon>
										<icon
											name="tv"
											class="w-5 h-5"
											v-if="category.category_name === 'Advertising and Marketing'"
										></icon>
										<icon name="award" class="w-5 h-5" v-if="category.category_name === 'Education'"></icon>
										<icon
											name="map-pin"
											class="w-5 h-5"
											v-if="category.category_name === 'Travel and Tourism'"
										></icon>
										<icon name="coffee" class="w-5 h-5" v-if="category.category_name === 'Food Services'"></icon>
										<icon name="tag" class="w-5 h-5" v-if="category.category_name === 'Sales and Retail'"></icon>
										<icon
											name="settings"
											class="w-5 h-5"
											v-if="category.category_name === 'Science and Engg'"
										></icon>
										<icon name="home" class="w-5 h-5" v-if="category.category_name === 'Property'"></icon>
										<icon name="tennis-ball" class="w-5 h-5" v-if="category.category_name === 'Sports'"></icon>
										<icon name="palette" class="w-5 h-5" v-if="category.category_name === 'Design and UX'"></icon>
										<icon
											name="construction"
											class="w-5 h-5"
											v-if="category.category_name === 'Construction'"
										></icon>
										<icon name="bulb" class="w-5 h-5" v-if="category.category_name === 'Consultancy'"></icon>
									</div>

									<div class="ml-3">
										<heading class="text-gray-700">{{ category.category_name }}</heading>
										<heading size="small-caps">{{ category.total }} jobs</heading>
									</div>
								</inertia-link>
							</template>
						</card>

						<card class="mb-5 relative bg-orange-100 px-5 py-5" :is-padding="false">
							<heading
								class="mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold"
							>Employers?</heading>

							<heading class="mb-2">Still struggling to communicate with job seekers?</heading>

							<heading class="mb-10">Your quest is over!</heading>

							<loading-button
								to="/register"
								tag="a"
								variant="secondary"
								size="small"
								class="shadow bg-white hover:shadow-md text-gray-700"
							>Join us now!</loading-button>

							<div class="absolute right-0 bottom-0 -mb-4">
								<img src="/RegisterAccountMobile.png" width="200" />
							</div>
						</card>

						<card class="mb-5 relative bg-blue-100 px-5 py-5" :is-padding="false">
							<heading
								class="mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold"
							>Advertise with us</heading>

							<heading
								class="mb-10 pr-10 md:pr-8"
							>Connect with the largest audience of active, influencial job creators, job seekers and workaholics.</heading>

							<loading-button
								tag="a"
								to="/advertise"
								variant="secondary"
								size="small"
								class="shadow bg-white hover:shadow-md text-gray-700"
							>Get in touch</loading-button>

							<div class="absolute right-0 bottom-0 -mb-4">
								<img src="/SearchEngineMarketing.png" width="180" />
							</div>
						</card>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-blue-800 px-4 pt-10 md:pt-16 border-b border-gray-200 relative" id="subscribe">
			<div class="max-w-3xl mx-auto mb-10">
				<h2
					class="md:text-center mb-4 text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
				>Job seekers! Sign up for our newsletter</h2>
				<p
					class="md:text-center mb-5 text-blue-300 md:text-lg"
				>Subscribe to our newsletter and get information related to jobs, careers, job resources and many more straight in your inbox. Whether you're looking for full-time, part-time, freelance, or internship opportunities, we've got you covered. No spam, guaranteed.</p>
			</div>

			<card class="max-w-4xl mx-auto bg-white shadow-md z-20 relative -mb-20">
				<div class="md:flex -mx-2">
					<div class="flex-1 px-2">
						<text-input
							label="Name"
							class="mb-4 md:mb-0"
							v-model="name"
							placeholder="eg. Iron Man"
							:errors="errors.name"
							@keydown="delete errors.name"
						></text-input>
					</div>
					<div class="flex-1 px-2">
						<text-input
							type="email"
							label="Email"
							class="mb-4 md:mb-0"
							v-model="email"
							placeholder="eg. ironman@marvel.comics"
							:errors="errors.email"
							@keydown="delete errors.email"
						></text-input>
					</div>
					<div class="px-2">
						<div class="mb-1 hidden md:block">&nbsp;</div>
						<loading-button
							ref="subscribeButton"
							class="shadow-md w-full md:w-auto md:-mt-1"
							@click.prevent="subscribe()"
						>Subscribe Now</loading-button>
					</div>
				</div>
				<p
					class="md:w-2/3 text-xs mt-4 text-gray-500"
				>By subscribing you agree to the Terms of Service and Privacy Policy. You also agree to recieve product related emails from Jobs Harbour, which you can unsubscribe from at any time.</p>
			</card>

			<div class="hidden md:block">
				<div style="bottom: 55%" class="-mb-10 h-16 w-32 bg-blue-300 absolute left-0 skew_aa"></div>
				<div style="bottom: 55%" class="mb-6 h-12 w-48 bg-gray-200 absolute left-0 ml-10 skew_aa"></div>
				<div style="bottom: 55%" class="-mb-16 h-20 w-32 bg-orange-200 absolute left-0 ml-16 skew_aa"></div>

				<div style="bottom: 10%" class="mb-6 h-16 w-32 bg-blue-300 absolute right-0 skew_aa"></div>
				<div style="bottom: 10%" class="mb-6 h-12 w-48 bg-gray-200 absolute right-0 mr-10 skew_aa"></div>
				<div style="bottom: 10%" class="-mb-16 h-20 w-32 bg-orange-200 absolute right-0 mr-16 skew_aa"></div>
			</div>
		</div>
		<div class="h-24 bg-white"></div>
	</layout>
</template>

<script>
const toCurrency = (n, curr, LanguageFormat = undefined) =>
	Intl.NumberFormat(LanguageFormat, {
		style: "currency",
		currency: curr
	}).format(n);

import Layout from "@/Shared/Layout";
import Card from "@/Shared/tuis/Card";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Heading from "@/Shared/tuis/Heading";
import Badge from "@/Shared/tuis/Badge";
import LinkTo from "@/Shared/tuis/LinkTo";
import Icon from "@/Shared/tuis/Icon";
import Avatar from "@/Shared/tuis/Avatar";
import SearchInput from "@/Shared/tuis/SearchInput";
import TextInput from "@/Shared/tuis/TextInput";
import Alert from "@/Shared/tuis/Alert";

export default {
	components: {
		Layout,
		Card,
		LoadingButton,
		Heading,
		Badge,
		LinkTo,
		Icon,
		Avatar,
		SearchInput,
		TextInput,
		Alert
	},
	data() {
		return {
			name: "",
			email: "",
			isSubscribed: false
		};
	},
	props: ["jobposts", "pages", "errors", "category_wise_total"],

	methods: {
		subscribe() {
			this.$refs.subscribeButton.startLoading();
			this.$inertia
				.post(
					"/subscriber",
					{
						name: this.name,
						email: this.email
					},
					{ preserveScroll: true }
				)
				.then(() => {
					this.$refs.subscribeButton.stopLoading();

					if (Object.keys(this.$page.errors).length === 0) {
						this.name = "";
						this.email = "";
						this.isSubscribed = true;

						this.$swal({
							type: "success",
							title: "Thank You!",
							html:
								"Now stay tuned for all the good things <br> related to jobs in your inbox."
						});
					}
				});
		},
		formatCurrency(amount) {
			return toCurrency(parseFloat(amount), "INR", "en-us");
		}
	}
};
</script>


<style>
.skew_aa {
	-webkit-transform: skew(0deg, -20deg);
	-moz-transform: skew(0deg, -20deg);
	-ms-transform: skew(0deg, -20deg);
	-o-transform: skew(0deg, -20deg);
	transform: skew(0deg, -20deg);
	transform-origin: 0;
}
.skew_bb {
	-webkit-transform: skew(20deg, -20deg);
	-moz-transform: skew(20deg, -20deg);
	-ms-transform: skew(20deg, -20deg);
	-o-transform: skew(20deg, -20deg);
	transform: skew(20deg, -20deg);
	transform-origin: 0;
}

.rotate-10 {
	transform: rotate(10deg);
	transform-origin: 0;
}

.trigger-icon:hover .bg-blue-300-hover {
	background-color: #3182ce;
	color: #ffffff;
}

.swal2-popup,
.swal2-styled.swal2-confirm {
	border-radius: 0.625em !important;
}
.swal2-content {
	color: #718096 !important;
	font-size: 1rem !important;
}
</style>