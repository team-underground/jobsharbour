<template>
	<layout>
		<ais-instant-search :index-name="`${scout_prefix}_jobposts`" :search-client="searchClient">
			<div class="py-10 px-4">
				<div class="max-w-6xl mx-auto">
					<div class="md:flex -mx-4">
						<div class="hidden md:block md:w-1/5 px-4">
							<div class="pt-2 pb-4">
								<div class="flex justify-between items-center w-full">
									<heading size="large" class="mb-0">Filters</heading>
									<ais-clear-refinements
										:class-names="{
                                            'ais-ClearRefinements-button':
                                                'rounded-full'
                                        }"
									>
										<span slot="resetLabel">Clear Filters</span>
									</ais-clear-refinements>
								</div>
								<hr class="mt-2 mb-5" />
								<div class="mb-5" v-for="(refinement,key) in refinements" :key="key">
									<heading class="mb-2 text-gray-700" size="small-caps">{{ refinement.label }}</heading>
									<ais-refinement-list :limit="6" show-more :attribute="refinement.value">
										<div
											slot-scope="{
                                        items,
                                        isShowingMore,
                                        isFromSearch,
                                        canToggleShowMore,
                                        refine,
                                        createURL,
                                        toggleShowMore
                                    }"
										>
											<checkbox-input
												v-for="(item) in items"
												:key="item.value"
												:model-value="item.isRefined"
												:value="item.value"
												@change="refine(item.value)"
											>
												<ais-highlight
													attribute="item"
													:hit="item"
													class="truncate text-sm text-left flex-1 w-10"
												/>

												<span class="text-gray-600 ml-2">
													({{
													item.count
													}})
												</span>
											</checkbox-input>
											<a
												class="mt-4 cursor-pointer text-xs uppercase tracking-wide text-link flex items-center inline-flex text-blue-600 border-b-2 border-blue-200 hover:text-blue-700 hover:border-blue-400"
												@click.prevent="toggleShowMore"
												v-if="canToggleShowMore"
											>
												<template v-if="!isShowingMore">
													<icon class="w-4 h-4 mr-1" name="plus"></icon>Show more
												</template>
												<template v-else>
													<icon class="w-4 h-4 mr-1" name="minus"></icon>Show less
												</template>
											</a>
										</div>
									</ais-refinement-list>
								</div>
								<ais-configure :hitsPerPage="10" />
							</div>
						</div>
						<div class="md:w-3/5 px-4">
							<div class="flex items-center">
								<ais-search-box class="w-full">
									<div
										slot-scope="{
                                        currentRefinement,
                                        isSearchStalled,
                                        refine
                                    }"
									>
										<div class="flex justify-between mb-4 items-center">
											<search-input
												v-model="currentRefinement"
												placeholder="Search by Job title, category..."
												class="flex-1"
												@input="refine(currentRefinement)"
											></search-input>
										</div>
										<div
											:hidden="!isSearchStalled"
											class="spinner spinner-md spinner-blue"
											style="height: 60px"
										></div>
									</div>
								</ais-search-box>
							</div>

							<ais-state-results>
								<template slot-scope="{ hits }">
									<div v-if="hits.length > 0">
										<ais-hits>
											<div slot-scope="{ items }">
												<card
													tag="a"
													:to="`/jobs/${post.job_slug}`"
													v-for="(post, idx) in items"
													:key="idx"
													class="mb-4 relative"
												>
													<div
														v-if="post.job_new === 'yes'"
														class="bg-red-500 text-white uppercase tracking-wide text-xs font-semibold rounded-bl-full absolute top-0 right-0 pl-4 pr-2 py-2"
													>New</div>
													<div class="flex">
														<div
															v-if="post.company.company_logo_path == null"
															class="mr-5 flex-shrink-0 w-16 h-16"
														>
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
											</div>
										</ais-hits>

										<ais-pagination
											:class-names="{
                            'ais-Pagination-item--selected': 'text-white',
                            'ais-Pagination-link':
                                'text-center mt-5 rounded-full py-0 inline-flex items-center justify-center'
                        }"
										></ais-pagination>
									</div>
									<div v-else>
										<card class="text-center py-5">
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
										</card>
									</div>
								</template>
							</ais-state-results>
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

								<heading class="mb-5">Your quest is over!</heading>

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
		</ais-instant-search>
	</layout>
</template>
<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading.vue";
import SearchInput from "@/Shared/tuis/SearchInput.vue";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";
import Card from "@/Shared/tuis/Card";
import Icon from "@/Shared/tuis/Icon";
import LinkTo from "@/Shared/tuis/LinkTo";
import Avatar from "@/Shared/tuis/Avatar";
import CheckboxInput from "@/Shared/tuis/CheckboxInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";

export default {
	props: ["scout_prefix"],
	components: {
		Layout,
		Heading,
		SearchInput,
		Card,
		Icon,
		LinkTo,
		Avatar,
		CheckboxInput,
		LoadingButton
	},
	data() {
		return {
			refinements: [
				{
					label: "ORGANISATION TYPE",
					value: "organisation_type"
				},
				{
					label: "JOB TYPE",
					value: "job_type"
				},
				{
					label: "SALARY",
					value: "job_salary"
				},
				{
					label: "CATEGORY",
					value: "job_category"
				}
			],
			searchClient: algoliasearch(
				"8G0ZANR2KG",
				"e571c9fdb5e10a920ed1dbcc05434e34"
			)
		};
	}
};
</script>

<style lang="scss">
.ais-RefinementList-labelText,
.ais-RefinementList-labelText span {
	margin-left: 0.7rem;
	font-size: 0.8rem !important;
	letter-spacing: 0.02rem;
}
.ais-RefinementList-showMore {
	background: transparent;
	&:hover,
	&:active,
	&:focus {
		background: transparent;
		color: #3490dc;
		outline: none;
	}
}
.ais-Pagination-item--selected .ais-Pagination-link {
	color: white !important;
	background-color: #5ebed6 !important;
	border-color: #5ebed6 !important;
}
.ais-Pagination-link {
	height: 1.5rem;
	width: 1.5rem;
	line-height: 1rem;
	padding: 1.2rem;
	display: inline-flex;
	border-radius: 10px;
}
.ais-ClearRefinements-button {
	background-color: #cae9f1 !important;
	color: #20859f !important;
	border-radius: 9999px;
	font-weight: 500;
	cursor: pointer !important;

	&:hover,
	&:focus {
		background-color: #87cfe0 !important;
	}
}
</style>
