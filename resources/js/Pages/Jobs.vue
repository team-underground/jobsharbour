<template>
	<layout>
		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<div class="md:flex -mx-4">
					<div class="hidden md:block md:w-1/5 px-4">
						<heading size="large" class="mb-4">Filter By</heading>

						<heading class="mb-2 text-gray-700" size="small-caps">Job Type</heading>
						<div class="mb-5">
							<checkbox-input
								v-model="form.jobtype"
								v-for="option in jobtypes"
								:key="option"
								:model-value="option"
								:value="option"
								class
							>{{ option }}</checkbox-input>
						</div>

						<heading class="mb-2 text-gray-700" size="small-caps">Salary</heading>
						<div class="mb-5">
							<checkbox-input
								v-model="form.salary"
								v-for="(option, key) in salaries"
								:key="key"
								:model-value="key"
								:value="key"
								class
							>{{ option }}</checkbox-input>
						</div>

						<heading class="mb-2 text-gray-700" size="small-caps">Category</heading>
						<div class="mb-5">
							<checkbox-input
								:title="option"
								v-model="form.category"
								v-for="option in categories"
								:key="option"
								:model-value="option"
								:value="option"
								class="truncate inline-block"
							>{{ option | truncate(20) }}</checkbox-input>
						</div>
					</div>
					<div class="md:w-3/5 px-4">
						<div class="flex items-center mb-5">
							<search-input placeholder="Search by job title..." class="flex-1" v-model="form.search"></search-input>
							<div class="ml-4">
								<loading-button
									class="bg-white md:hidden"
									variant="secondary"
									variant-type="outline"
									type="button"
									size="small"
									@click="$modal.show('filter-modal')"
								>
									<icon name="filter"></icon>
									<span class="ml-1 hidden md:block">Filters</span>
								</loading-button>
								<span>
									<loading-button
										class="bg-white"
										size="small"
										variant="secondary"
										variant-type="outline"
										@click="reset"
									>
										<icon name="refresh"></icon>
										<span class="ml-1 hidden md:block">Reset</span>
									</loading-button>
								</span>
							</div>
						</div>

						<template v-if="jobposts.data.length > 0">
							<card v-for="(post, idx) in jobposts.data" :key="idx" class="mb-4 relative">
								<div
									v-if="post.job_new === 'yes'"
									class="bg-red-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2"
								>New</div>
								<div class="flex">
									<div v-if="post.company.company_logo == null" class="mr-5 flex-shrink-0 w-16 h-16">
										<avatar :name="post.company.company_name" color="blue" shape="rounded" size="xlarge"></avatar>
									</div>
									<div
										v-else
										class="flex-shrink-0 w-16 h-16 p-1 rounded-lg bg-gray-100 border-2 block mr-5 overflow-hidden"
									>
										<img
											:src="post.company.company_logo_path"
											alt="company-logo"
											class="object-contain w-full h-full rounded-lg"
										/>
									</div>

									<div class="flex-1">
										<div class="flex mb-4">
											<div class="flex-1">
												<div class="mb-1 pr-3">
													<!-- <badge class="mr-1" variant="danger">New</badge> -->
													<heading size="large" class="inline-block">{{ post.job_title }}</heading>
												</div>
												<heading size="small" class="mb-1 font-semibold">{{ post.company.company_name }}</heading>
												<heading size="small" class="mb-1">in {{post.job_category}}</heading>
											</div>
											<div class="md:w-48 flex-col justify-between mt-1">
												<div class="md:mb-1 md:flex-1 flex items-center">
													<icon class="mr-2 text-gray-400" :width="20" :height="20" name="map-pin"></icon>
													<heading size="small">{{ post.job_location }}</heading>
												</div>
												<div class="md:mb-1 md:flex-1 flex items-center">
													<icon class="mr-2 text-gray-400" name="wallet" :width="20" :height="20"></icon>
													<heading size="small">Rs. {{ post.job_salary }}/m</heading>
												</div>
												<div class="md:mb-1 md:flex-1 flex items-center">
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
						</template>

						<template v-else>
							<empty-state height="330px">
								<div
									class="p-4 inline-flex justify-center items-center bg-blue-100 text-blue-600 rounded-full mb-3"
								>
									<icon name="search" class="w-6 h-6"></icon>
								</div>
								<heading size="large" class="mb-1">No job posts found.</heading>
								<heading
									class="md:w-2/3 mx-auto"
								>We could not find any job posts. Please search again with different keywords.</heading>
							</empty-state>
						</template>

						<div
							class="flex items-center justify-between mt-8"
							v-if="jobposts.prev_page_url != null || jobposts.next_page_url != null"
						>
							<div>
								<loading-button
									v-if="jobposts.prev_page_url == null"
									tag="a"
									:to="jobposts.prev_page_url"
									size="small"
									variant="secondary"
									variant-type="outline"
									class="cursor-not-allowed"
								>
									<icon name="chevron-left"></icon>Previous
								</loading-button>
								<loading-button
									class="bg-secondary-400 border-secondary-400 hover:bg-secondary-500 hover:border-secondary-500"
									v-else
									tag="a"
									:to="jobposts.prev_page_url"
									size="small"
								>
									<icon name="chevron-left"></icon>Previous
								</loading-button>
							</div>
							<div>
								<heading size="small">
									{{ jobposts.from }} to
									{{ jobposts.to }}
								</heading>
							</div>
							<div>
								<loading-button
									v-if="jobposts.next_page_url == null"
									tag="a"
									:to="jobposts.next_page_url"
									size="small"
									variant="secondary"
									variant-type="outline"
									class="cursor-not-allowed"
								>
									Next
									<icon name="chevron-right"></icon>
								</loading-button>
								<loading-button
									class="bg-secondary-400 border-secondary-400 hover:bg-secondary-500 hover:border-secondary-500"
									v-else
									tag="a"
									:to="jobposts.next_page_url"
									:disabled=" jobposts.next_page_url == null"
									size="small"
								>
									Next
									<icon name="chevron-right"></icon>
								</loading-button>
							</div>
						</div>
					</div>

					<div class="md:w-1/5 px-4 pt-5 md:pt-16">
						<card class="mb-5 relative bg-orange-100 px-5 py-5" :is-padding="false">
							<div
								class="p-3 inline-flex justify-center items-center bg-orange-200 text-orange-800 rounded-full mb-3"
							>
								<icon name="briefcase" class="w-6 h-6"></icon>
							</div>
							<heading
								class="mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold"
							>Employers?</heading>

							<heading class="mb-2">Still struggling to communicate with job seekers?</heading>

							<heading class="mb-5">Your quest is over.</heading>

							<loading-button
								to="/register"
								tag="a"
								variant="secondary"
								size="small"
								class="shadow bg-white hover:shadow-md text-gray-700"
							>Join us now!</loading-button>
						</card>

						<card class="mb-5 relative bg-blue-100 px-5 py-5" :is-padding="false">
							<div
								class="p-3 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
							>
								<icon name="bulb" class="w-6 h-6"></icon>
							</div>
							<heading
								class="mb-2 leading-tight text-gray-700 tracking-tight text-xl font-semibold"
							>Advertise with us</heading>

							<heading
								class="mb-5"
							>Connect with the largest audience of active, influencial job creators, job seekers and workaholics</heading>

							<loading-button
								tag="a"
								to="/advertise"
								variant="secondary"
								size="small"
								class="shadow bg-white hover:shadow-md text-gray-700"
							>Get in touch</loading-button>
						</card>
					</div>
				</div>
			</div>
		</div>

		<modal
			name="filter-modal"
			height="auto"
			:scrollable="true"
			classes="rounded-t-large bg-white"
			:adaptive="true"
			:pivot-y="1"
		>
			<div class="px-8 pt-5 pb-8 relative" style="height: 480px; overflow-y: auto">
				<heading size="heading" class="mb-4">Filter By</heading>
				<div class="flex flex-wrap">
					<div class="w-1/2 mb-4">
						<heading class="mb-2 text-gray-700" size="small-caps">Job Type</heading>

						<checkbox-input
							v-model="form.jobtype"
							v-for="option in jobtypes"
							:key="option"
							:model-value="option"
							:value="option"
							class
						>{{ option }}</checkbox-input>
					</div>
					<div class="w-1/2 mb-4 pl-5">
						<heading class="mb-2 text-gray-700" size="small-caps">Salary</heading>

						<checkbox-input
							v-model="form.salary"
							v-for="(option, key) in salaries"
							:key="key"
							:model-value="key"
							:value="key"
							class
						>{{ option }}</checkbox-input>
					</div>
					<div class="w-full">
						<heading class="mb-2 text-gray-700" size="small-caps">Job Categories</heading>

						<div class="column-count-2">
							<checkbox-input
								:title="option"
								v-model="form.category"
								v-for="option in categories"
								:key="option"
								:model-value="option"
								:value="option"
								class="truncate"
							>{{ option | truncate(14) }}</checkbox-input>
						</div>
					</div>
				</div>
			</div>
			<div
				class="bg-gray-200 text-gray-600 px-8 py-4 font-semibold cursor-pointer text-center"
				@click="$modal.hide('filter-modal')"
			>Click to Close</div>
		</modal>
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
import Avatar from "@/Shared/tuis/Avatar";
import CheckboxInput from "@/Shared/tuis/CheckboxInput";
import EmptyState from "@/Shared/tuis/EmptyState";

import _ from "lodash";

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
		Avatar,
		CheckboxInput,
		EmptyState
	},

	props: {
		jobposts: Object,
		filters: Object,
		jobtypes: Array,
		categories: Array
	},

	watch: {
		form: {
			handler: _.throttle(function() {
				let query = _.pickBy(this.form);
				this.$inertia.replace(
					this.route(
						"jobs",
						Object.keys(query).length
							? query
							: { remember: "forget" }
					)
				);
			}, 150),
			deep: true
		}
	},

	data() {
		return {
			form: {
				search: this.filters.search,
				jobtype: this.filters.jobtype || [],
				salary: this.filters.salary || [],
				category: this.getCategoryParam()
			},
			salaries: {
				"10k-15k": "10k-15k",
				"15k-20k": "15k-20k",
				"20k-40k": "20k-40k",
				"40k+": "40k+"
			}
		};
	},

	methods: {
		reset() {
			// this.form = _.mapValues(this.form, () => null);
			this.form.search = null;
			this.form.jobtype = [];
			this.form.salary = [];
			this.form.category = [];
		},
		getCategoryParam() {
			let params = window.location.search;
			if (params) {
				let searchParams = new URLSearchParams(params);
				if (searchParams.has("category")) {
					let array = [];
					array.push(searchParams.get("category"));
					return array;
				}
			} else {
				return this.filters.category || [];
			}
		}
	},

	filters: {
		truncate: function(value, limit) {
			if (value.length > limit) {
				value = value.substring(0, limit - 3) + "...";
			}
			return value;
		}
	}
};
</script>

<style>
.column-count-2 {
	column-count: 2;
	column-gap: 40px;
}
</style>