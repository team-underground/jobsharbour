<template>
	<layout :title="post.seo_title" :description="post.meta_description">
		<div class="bg-white px-4 pt-6 pb-4 shadow-sm z-20 relative">
			<div class="max-w-6xl mx-auto">
				<link-to to="/jobs" class="mb-4">
					<icon name="chevron-left" class="-ml-2"></icon>Back to Jobs
				</link-to>

				<div class="md:flex -mx-4">
					<div class="md:w-2/3 px-4">
						<heading size="heading2" class="inline-block mb-2">{{ post.job_title}}</heading>
						<heading class="mb-4">
							{{ post.company.company_name }}
							<span class="mx-2 text-gray-400">&bull;</span>
							<link-to :to="`/jobs?category=${post.job_category}`">{{ post.job_category }}</link-to>
						</heading>

						<div class="md:flex justify-between mb-4">
							<div class="md:flex-1 flex items-center mb-2 md:mb-0">
								<icon class="mr-2 text-gray-400" name="map-pin"></icon>
								<heading>{{ post.job_location }}</heading>
							</div>
							<div class="md:flex-1 flex items-center mb-2 md:mb-0">
								<icon class="mr-2 text-gray-400" name="wallet"></icon>
								<heading>Rs. {{ post.job_salary }} /m</heading>
							</div>
							<div class="md:flex-1 flex items-center">
								<icon class="mr-2 text-gray-400" name="clock"></icon>
								<heading>{{ post.job_type }}</heading>
							</div>
						</div>

						<heading size="small">{{ post.job_published_at_formatted }}</heading>
					</div>
					<div class="md:w-1/3 px-4 px-4 flex md:flex-col mt-4 md:mt-0">
						<div class="flex-1 mr-4 md:mr-0">
							<loading-button
								tag="a"
								:to="`mailto:${post.job_email}?subject=Apply for the post of ${post.job_title}&bcc=hello@jobsharbour.com`"
								class="mailtoui w-full md:w-64 mb-2"
								rounded="large"
								size="small"
							>Apply Now</loading-button>

							<div>
								<loading-button
									class="w-full md:w-64 hover:border-blue-400 bg-gray-100"
									size="small"
									variant="secondary"
									variant-type="outline"
									type="button"
									rounded="large"
									v-clipboard:copy="route('jobs.show', post.job_slug)"
									v-clipboard:success="onCopy"
									v-clipboard:error="onError"
								>Copy URL</loading-button>
							</div>
						</div>

						<div>
							<div class="flex md:w-64 items-center mt-2 -mb-3 justify-center">
								<div
									class="relative w-32 text-center uppercase bg-white text-xs tracking-wider font-semibold text-gray-500"
								>Or Share This</div>
							</div>

							<div
								class="flex items-center justify-center md:w-64 border-2 border-gray-300 px-4 pt-4 pb-5 md:pb-4 rounded-full"
							>
								<social-sharing
									:url="route('jobs.show', post.job_slug)"
									:title="`${post.job_title}`"
									:description="post.meta_description"
									:hashtags="post.meta_keywords.join(',')"
									twitter-user="jobs_harbour"
									inline-template
								>
									<div class="flex justify-between">
										<network network="facebook">
											<div class="cursor-pointer p-2 rounded-full bg-facebook text-white mr-2">
												<svg
													class="w-5 h-5 fill-current flex-shrink-0"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path
														d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"
													/>
												</svg>
											</div>
										</network>
										<network network="linkedin">
											<div class="cursor-pointer p-2 rounded-full bg-linkedin text-white mr-2">
												<svg
													class="w-5 h-5 fill-current flex-shrink-0"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<circle cx="4.983" cy="5.009" r="2.188" />
													<path
														d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z"
													/>
												</svg>
											</div>
										</network>

										<network network="whatsapp">
											<div class="cursor-pointer p-2 rounded-full bg-whatsapp text-white mr-2">
												<svg
													class="w-5 h-5 fill-current flex-shrink-0"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M18.403,5.633C16.708,3.936,14.454,3.001,12.053,3	c-4.948,0-8.976,4.027-8.978,8.977c0,1.582,0.413,3.126,1.198,4.488L3,21.116l4.759-1.249c1.312,0.715,2.788,1.092,4.29,1.093h0.004	l0,0c4.947,0,8.975-4.027,8.977-8.977C21.03,9.585,20.098,7.33,18.403,5.633 M12.053,19.445H12.05	c-1.339-0.001-2.652-0.36-3.798-1.041l-0.272-0.162l-2.824,0.741l0.753-2.753l-0.177-0.282c-0.747-1.188-1.141-2.561-1.141-3.971	c0.002-4.114,3.349-7.461,7.465-7.461c1.993,0.001,3.866,0.778,5.275,2.188c1.408,1.411,2.184,3.285,2.183,5.279	C19.512,16.097,16.165,19.445,12.053,19.445 M16.146,13.856c-0.225-0.113-1.327-0.655-1.533-0.73	c-0.205-0.075-0.354-0.112-0.504,0.112s-0.58,0.729-0.711,0.879s-0.262,0.168-0.486,0.056s-0.947-0.349-1.804-1.113	c-0.667-0.595-1.117-1.329-1.248-1.554s-0.014-0.346,0.099-0.458c0.101-0.1,0.224-0.262,0.336-0.393	c0.112-0.131,0.149-0.224,0.224-0.374s0.038-0.281-0.019-0.393c-0.056-0.113-0.505-1.217-0.692-1.666	C9.627,7.787,9.442,7.845,9.304,7.839c-0.13-0.006-0.28-0.008-0.429-0.008c-0.15,0-0.393,0.056-0.599,0.28	C8.07,8.336,7.491,8.878,7.491,9.982c0,1.104,0.804,2.171,0.916,2.321c0.112,0.15,1.582,2.415,3.832,3.387	c0.536,0.231,0.954,0.369,1.279,0.473c0.537,0.171,1.026,0.146,1.413,0.089c0.431-0.064,1.327-0.542,1.514-1.066	c0.187-0.524,0.187-0.973,0.131-1.067C16.52,14.025,16.369,13.968,16.146,13.856"
													/>
												</svg>
											</div>
										</network>

										<network network="twitter">
											<div class="cursor-pointer p-2 rounded-full bg-twitter text-white">
												<svg
													class="w-5 h-5 fill-current flex-shrink-0"
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
												>
													<path
														d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
													/>
												</svg>
											</div>
										</network>
									</div>
								</social-sharing>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<div class="md:flex -mx-4">
					<div class="md:w-2/3 px-4 flex flex-col">
						<card class="mb-10 pb-5 flex-1">
							<!-- <heading size="large" class="mb-1">Experience</heading>
							<heading class="mb-4">Freshers/1-2 Years Experience</heading>-->

							<heading size="large" class="mb-1">Job Description</heading>

							<!-- <div class="mb-4" v-if="!readMoreActivated" v-html="longText.slice(0, 150) + ' [...]'"></div>
							<div class="mb-4" v-if="readMoreActivated" v-html="longText"></div>-->

							<!-- <a
								class="mb-4 text-sm inline-flex text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400"
								href="#"
								@click="readMoreActivated = !readMoreActivated"
							>{{ readMoreActivated == false ? '+ Read more' : '- Read less'}}</a>-->

							<div class="mb-4 job-description" v-html="longText"></div>

							<heading size="large" class="mb-1">Skills</heading>
							<badge v-for="(skill, idx) in post.job_skills" :key="idx" class="mr-2">{{ skill }}</badge>
						</card>
					</div>

					<div class="md:w-1/3 px-4 flex flex-col">
						<card class="mb-10 flex-1">
							<heading size="large" class="mb-4">About {{ post.company.company_name }}</heading>

							<div v-if="post.company.company_logo == null" class="mb-4 flex-shrink-0 w-20 h-20 mx-auto">
								<avatar :name="post.company.company_name" color="blue" shape="rounded" size="xlarge"></avatar>
							</div>
							<div
								v-else
								class="mb-4 flex-shrink-0 flex items-center w-24 h-24 p-2 rounded-lg bg-gray-100 border-2 block mx-auto overflow-hidden"
							>
								<img
									:src="post.company.company_logo_path"
									alt="company-logo"
									class="object-contain w-full h-full"
								/>
							</div>

							<heading>{{ post.company.company_description }}</heading>

							<div class="my-5">
								<div class="py-2 md:flex-1 flex items-center border-b justify-between">
									<heading size="small-caps">Industry</heading>
									<heading size="small">{{ post.company.company_industry }}</heading>
								</div>
								<div class="py-2 md:flex-1 flex items-center border-b justify-between">
									<heading size="small-caps">Company Size</heading>
									<heading size="small">{{ post.company.company_no_of_employees }}</heading>
								</div>
								<div class="py-2 md:flex-1 flex items-center border-b justify-between">
									<heading size="small-caps">Website</heading>
									<a
										class="small text-blue-500 hover:text-blue-800"
										:href="post.company.company_website"
									>{{ post.company.company_website }}</a>
								</div>
							</div>

							<heading size="large" class="mb-1">Working Benefits</heading>
							<heading>{{ post.company.company_benefits }}</heading>
							<!-- <list
								class="mb-4"
								unordered-list-color="text-blue-400"
								:lists="['Free Lunch', 'Health Care', 'Laptop', 'Career Growth', 'Flexible Holidays']"
							></list>-->
						</card>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script>
const MailtoUI = require("mailtoui/dist/mailtoui-min.js");

import Layout from "@/Shared/Layout";
import Card from "@/Shared/tuis/Card";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Heading from "@/Shared/tuis/Heading";
import Badge from "@/Shared/tuis/Badge";
import LinkTo from "@/Shared/tuis/LinkTo";
import MailTo from "@/Shared/tuis/MailTo";
import SearchInput from "@/Shared/tuis/SearchInput";
import Icon from "@/Shared/tuis/Icon";
import List from "@/Shared/tuis/List";
import Avatar from "@/Shared/tuis/Avatar";

export default {
	components: {
		Layout,
		Card,
		LoadingButton,
		Heading,
		Badge,
		LinkTo,
		Icon,
		SearchInput,
		List,
		Avatar
	},

	props: ["post"],

	data() {
		return {
			longText: this.post.job_description,
			jobtypes: [
				"Full time",
				"Part time",
				"Internship",
				"Freelance",
				"Contract"
			],
			roles: [
				"Web Developer",
				"Graphic Designer",
				"Accountant",
				"Finance",
				"Human Resources",
				"Sales",
				"Marketing"
			],

			readMoreActivated: false
		};
	},

	mounted() {
		MailtoUI.run();
	},

	methods: {
		onCopy: function(e) {
			this.$snack.success("Job URL copied");
		},
		onError: function(e) {
			this.$snack.error("Failed to copy texts");
		}
	}
};
</script>

<style>
.bg-facebook {
	background-color: #3b5998 !important;
}
.bg-twitter {
	background-color: #38a1f3 !important;
}
.bg-linkedin {
	background-color: #0e76a8 !important;
}
.bg-whatsapp {
	background-color: #4fce5d !important;
}
.job-description ul {
	list-style-type: disc;
	margin-left: 1.5rem;
}
</style>