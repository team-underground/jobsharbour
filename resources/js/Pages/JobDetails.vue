<template>
	<layout>
		<div class="bg-white px-4 pt-6 pb-4 shadow-sm z-20 relative">
			<div class="max-w-6xl mx-auto">
				<link-to to="/jobs" class="mb-4">
					<icon name="chevron-left" class="-ml-2"></icon>Back to Jobs
				</link-to>

				<div class="md:flex -mx-4">
					<div class="md:w-2/3 px-4">
						<heading size="heading2" class="inline-block mb-2">{{ post.job_title}}</heading>
						<heading class="mb-4">{{ post.company.company_name }} / {{ post.job_position }}</heading>

						<div class="flex justify-between mb-4">
							<div class="md:flex-1 flex items-center">
								<icon class="mr-2 text-gray-400" name="map-pin"></icon>
								<heading>{{ post.job_location }}</heading>
							</div>
							<div class="md:flex-1 flex items-center">
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
						<div class="mr-1 flex-1">
							<loading-button type="button" size="small" class="md:w-64 mb-2" rounded="large">Apply Now</loading-button>
						</div>
						<div class="mr-1 flex-1">
							<loading-button
								type="button"
								size="small"
								variant="secondary"
								variant-type="outline"
								class="md:w-64 mb-2"
								rounded="large"
							>Share on Facebook</loading-button>
						</div>
						<div class="flex-1">
							<loading-button
								type="button"
								size="small"
								variant="secondary"
								class="md:w-64 mb-2"
								variant-type="outline"
								rounded="large"
							>Share on LinkedIn</loading-button>
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

							<div class="mb-4" v-if="!readMoreActivated" v-html="longText.slice(0, 150) + ' [...]'"></div>
							<div class="mb-4" v-if="readMoreActivated" v-html="longText"></div>

							<a
								class="mb-4 text-sm inline-flex text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400"
								href="#"
								@click="readMoreActivated = !readMoreActivated"
							>{{ readMoreActivated == false ? '+ Read more' : '- Read less'}}</a>

							<!-- <div class="mb-4">{{ longText }}</div> -->

							<heading size="large" class="mb-1">Skills</heading>
							<badge v-for="(skill, idx) in post.job_skills" :key="idx" class="mr-2">{{ skill }}</badge>
						</card>

						<!-- <card class="mb-10">
							<heading size="large" class="mb-1">About Zendesk</heading>
							<div class="flex">
								<heading>
									A working atmosphere that enables you to shape a growing e-commerce business - Dreamlines will continue its successful growth and you can be a critical part of it!
									Responsibility from Day One, flat hierarchies and quick decision-making
								</heading>
								<div class="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 border block ml-5">
									<img
										src="/zd.png"
										alt="company-logo"
										class="object-fit object-center w-full h-full rounded-lg"
									/>
								</div>
							</div>

							<div class="md:flex justify-between my-5">
								<div class="md:flex-1 flex items-center mb-4 md:mb-0">
									<div class="p-4 rounded-full mr-2 flex-shrink-0 bg-gray-100">
										<icon class="text-blue-500" name="info"></icon>
									</div>
									<div>
										<heading size="small-caps">Industry</heading>
										<heading size="small">IT/Software</heading>
									</div>
								</div>
								<div class="md:flex-1 flex items-center mb-4 md:mb-0">
									<div class="p-4 rounded-full mr-2 flex-shrink-0 bg-gray-100">
										<icon class="text-blue-500" name="users"></icon>
									</div>
									<div>
										<heading size="small-caps">No. of Employees</heading>
										<heading size="small">50+</heading>
									</div>
								</div>
								<div class="md:flex-1 flex items-center">
									<div class="p-4 rounded-full mr-2 flex-shrink-0 bg-gray-100">
										<icon class="text-blue-500" name="globe"></icon>
									</div>
									<div>
										<heading size="small-caps">Website</heading>
										<heading size="small">http://zendesk.com</heading>
									</div>
								</div>
							</div>

							<heading size="large" class="mb-1">Benefits</heading>
							<list
								class="mb-4"
								unordered-list-color="text-blue-400"
								:lists="['Free Lunch', 'Health Care', 'Laptop', 'Career Growth', 'Flexible Holidays']"
							></list>
						</card>-->
					</div>

					<div class="md:w-1/3 px-4 flex flex-col">
						<card class="mb-10 flex-1">
							<heading size="large" class="mb-1">About {{ post.company.company_name }}</heading>
							<div class="flex">
								<heading>{{ post.company.company_description }}</heading>
								<div v-if="post.company.company_logo == null" class="mt-2 ml-5 flex-shrink-0 w-16 h-16">
									<avatar :name="post.company.company_name" color="blue" shape="rounded" size="xlarge"></avatar>
								</div>
								<div v-else class="mt-2 flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 border block ml-5">
									<img
										:src="post.company.company_logo"
										alt="company-logo"
										class="object-fit object-center w-full h-full rounded-lg"
									/>
								</div>
							</div>

							<div class="my-5">
								<!-- <div class="md:flex-1 flex items-center border-b justify-between mb-2">
									<div class="p-4 rounded-full mr-2 flex-shrink-0 bg-gray-100">
										<icon class="text-blue-500" name="users"></icon>
									</div>
									<div>
										<heading size="small-caps">No. of Employees</heading>
										<heading size="small">{{ post.company.company_no_of_employees }}</heading>
									</div>
								</div>
								<div class="md:flex-1 flex items-center border-b justify-between">
									<div class="p-4 rounded-full mr-2 flex-shrink-0 bg-gray-100">
										<icon class="text-blue-500" name="globe"></icon>
									</div>
									<div>
										<heading size="small-caps">Website</heading>
										<heading size="small">{{ post.company.company_website }}</heading>
									</div>
								</div>-->
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
										:href="`http://${post.company.company_website}`"
									>http://{{ post.company.company_website }}</a>
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
						<!-- <card class="mb-5 relative" :is-padding="false">
							<img src="/ad3.png" alt="ad" class="object-fit w-full" />
							<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
						</card>

						<card class="mb-5 relative" :is-padding="false">
							<img src="/ad2.png" alt="ad" class="object-fit w-full" />
							<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
						</card>-->
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Card from "@/Shared/tuis/Card";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Heading from "@/Shared/tuis/Heading";
import Badge from "@/Shared/tuis/Badge";
import LinkTo from "@/Shared/tuis/LinkTo";
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

	methods: {}
};
</script>