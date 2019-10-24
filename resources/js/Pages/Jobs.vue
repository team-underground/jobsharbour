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
								v-model="form.category"
								v-for="option in categories"
								:key="option"
								:model-value="option"
								:value="option"
								class
							>{{ option }}</checkbox-input>
						</div>
					</div>
					<div class="md:w-3/5 px-4">
						<div class="flex items-center mb-5">
							<search-input placeholder="Search by job title..." class="flex-1" v-model="form.search"></search-input>
							<div class="ml-4">
								<loading-button
									class="bg-white"
									variant="secondary"
									variant-type="outline"
									type="button"
									size="small"
									@click="$modal.show('filter-modal')"
								>
									<icon name="filter"></icon>
									<span class="ml-1">Filters</span>
								</loading-button>
								<span>
									<loading-button
										class="bg-white"
										size="small"
										variant="secondary"
										variant-type="outline"
										@click="reset"
									>
										<icon name="refresh" class="mr-2"></icon>Reset
									</loading-button>
								</span>
							</div>
						</div>

						<card v-for="(post, idx) in jobposts.data" :key="idx" class="mb-4 relative">
							<div
								v-if="post.job_new === 'yes'"
								class="bg-red-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2"
							>New</div>
							<div class="flex">
								<div v-if="post.company.company_logo == null" class="mr-5 flex-shrink-0 w-16 h-16">
									<avatar :name="post.company.company_name" color="blue" shape="rounded" size="xlarge"></avatar>
								</div>
								<div v-else class="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 border block mr-5">
									<img
										:src="post.company.company_logo_path"
										alt="company-logo"
										class="object-fit object-center w-full h-full rounded-lg"
									/>
								</div>

								<div class="flex-1">
									<div class="flex mb-4">
										<div class="flex-1">
											<div class="mb-1 pr-3">
												<!-- <badge class="mr-1" variant="danger">New</badge> -->
												<heading size="large" class="inline-block">{{ post.job_title }}</heading>
											</div>
											<heading size="small" class="mb-1">{{ post.company.company_name }}</heading>
											<heading size="small" class="mb-1">{{categories[post.job_category]}}</heading>
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
										<link-to :to="`/jobs/${post.uuid}`" class="text-sm">View Details</link-to>
									</div>
								</div>
							</div>
						</card>

						<!-- <card v-for="(post, idx) in jobposts.data" :key="idx" class="mb-4">
							<div class="flex">
								<div v-if="post.company.company_logo == null" class="mr-5 flex-shrink-0 w-16 h-16">
									<avatar :name="post.company.company_name" color="blue" shape="rounded" size="xlarge"></avatar>
								</div>
								<div v-else class="flex-shrink-0 w-16 h-16 rounded-lg bg-gray-100 border block mr-5">
									<img
										src="/zd.png"
										alt="company-logo"
										class="object-fit object-center w-full h-full rounded-lg"
									/>
								</div>

								<div class="flex-1">
									<div class="mb-2">
										<badge class="mr-1" variant="danger">New</badge>
										<heading size="large" class="inline-block">{{ post.job_title }}</heading>
									</div>
									<heading size="small" class="mb-2">at {{ post.company.company_name }}</heading>

									<div class="flex justify-between mb-4 pb-4 border-b">
										<div class="md:flex-1 flex items-center">
											<icon class="mr-2 text-gray-400" name="map-pin"></icon>
											<heading size="small">{{ post.job_location }}</heading>
										</div>
										<div class="md:flex-1 flex items-center">
											<icon class="mr-2 text-gray-400" name="wallet"></icon>
											<heading size="small">Rs. {{ post.job_salary }}/m</heading>
										</div>
										<div class="md:flex-1 flex items-center">
											<icon class="mr-2 text-gray-400" name="clock"></icon>
											<heading size="small">{{ post.job_type }}</heading>
										</div>
									</div>

									<div class="flex justify-between">
										<heading size="small">{{ post.job_published_at }}</heading>
										<link-to :to="`/jobs/${post.uuid}`" class="text-sm">View Details</link-to>
									</div>
								</div>
							</div>
						</card>-->

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

					<div class="md:w-1/5 px-4 md:pt-20">
						<card class="mb-5 relative" :is-padding="false">
							<img src="/ad3.png" alt="ad" class="object-fit w-full" />
							<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
						</card>

						<card class="mb-5 relative" :is-padding="false">
							<img src="/ad2.png" alt="ad" class="object-fit w-full" />
							<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
						</card>
					</div>
				</div>
			</div>
		</div>

		<modal
			name="filter-modal"
			height="auto"
			:scrollable="true"
			classes="rounded-lg bg-white"
			:adaptive="true"
		>
			<div class="px-8 py-5">
				<heading size="heading" class="mb-4">Filters</heading>
				<div class="flex flex-wrap">
					<div class="w-1/2 mb-4">
						<heading class="mb-2 text-gray-700" size="small-caps">Job Type</heading>

						<ul class="no-bullet">
							<li class="mb-1" v-for="(jobtype, index) in jobtypes" :key="index">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox text-blue-500 h-4 w-4"
										v-model="form.jobtype"
										:value="jobtype"
									/>
									<span class="ml-2">{{ jobtype }}</span>
								</label>
							</li>
						</ul>
					</div>
					<div class="w-1/2 mb-4">
						<heading class="mb-2 text-gray-700" size="small-caps">Salary</heading>

						<ul class="no-bullet">
							<li class="mb-1" v-for="(salary, key) in salaries" :key="key">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox text-blue-500 h-4 w-4"
										v-model="form.salary"
										:value="key"
									/>
									<span class="ml-2">Rs. {{ salary }}</span>
								</label>
							</li>
						</ul>
					</div>
					<div class="w-full">
						<heading class="mb-2 text-gray-700" size="small-caps">Job Categories</heading>

						<ul class="no-bullet column-count-2">
							<li class="mb-1" v-for="(category, index) in categories" :key="index">
								<label class="inline-flex items-center">
									<input
										type="checkbox"
										class="form-checkbox text-blue-500 h-4 w-4"
										v-model="form.category"
										:value="category"
									/>
									<span class="ml-2">{{ category }}</span>
								</label>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="bg-gray-100 px-8 py-4 flex justify-between">
				<loading-button
					variant="secondary"
					variant-type="outline"
					size="small"
					@click="$modal.hide('filter-modal')"
				>Close</loading-button>
				<!-- <loading-button size="small">Apply Filter</loading-button> -->
			</div>
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
		CheckboxInput
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
				"5K-10K": "5K-10K",
				"10K-15K": "10K-15K",
				"15K-20K": "15K-20K",
				"20K-40K": "20K-40K",
				"40K+": "40K+"
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
	}
};
</script>

<style>
.column-count-2 {
	column-count: 2;
	column-gap: 40px;
}
</style>