<template>
	<layout>
		<div class="bg-white px-4 relative shadow-sm z-20">
			<div class="md:max-w-6xl mx-auto">
				<div class="flex flex-wrap md:justify-center">
					<a
						class="w-1/3 md:w-1/6 border-b md:border-transparent py-4 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/companies"
					>
						<icon name="briefcase"></icon>
						<div class="mt-2 mb-1 text-sm">Companies</div>
					</a>

					<a
						class="w-1/3 md:w-1/6 border-l border-b md:border-transparent py-4 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/jobs"
					>
						<icon name="edit2"></icon>
						<div class="mt-2 mb-1 text-sm">Job Posts</div>
					</a>

					<a
						class="w-1/3 md:w-1/6 border-l border-b md:border-transparent py-4 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/users"
					>
						<icon name="users"></icon>
						<div class="mt-2 mb-1 text-sm">Users</div>
					</a>

					<a
						class="w-1/3 md:w-1/6 md:border-transparent py-4 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/users"
					>
						<icon name="bell"></icon>
						<div class="mt-2 mb-1 text-sm">Notifications</div>
					</a>

					<a
						class="w-1/3 md:w-1/6 border-l md:border-transparent py-4 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/users"
					>
						<icon name="message"></icon>
						<div class="mt-2 mb-1 text-sm">Feedback</div>
					</a>

					<a
						class="w-1/3 md:w-1/6 border-l md:border-transparent py-4 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/settings"
					>
						<icon name="settings"></icon>
						<div class="mt-2 mb-1 text-sm">Settings</div>
					</a>
				</div>

				<!-- <link-to to="/jobs" class="mb-4">
					<icon name="chevron-left" class="-ml-2"></icon>Back Links
				</link-to>-->

				<!-- <heading size="large">
					<span class="font-normal">Welcome</span>
					, {{$page.auth.user.name}}
				</heading>-->
				<!-- <div class="md:flex">
					<a
						href="/dashboard"
						class="py-3 flex items-center mr-8 md:mr-12 text-blue-600 active"
					>Dashboard</a>

					<a
						href="/admin/jobs"
						class="py-3 flex items-center mr-8 md:mr-12 text-gray-500 hover:text-blue-600"
					>Jobs</a>

					<a
						href="/jobs"
						class="py-3 flex items-center mr-8 md:mr-12 text-gray-500 hover:text-blue-600"
					>Users</a>

					<a
						href="/jobs"
						class="py-3 flex items-center mr-8 md:mr-12 text-gray-500 hover:text-blue-600"
					>Notifications</a>

					<a
						href="/jobs"
						class="py-3 flex items-center mr-8 md:mr-12 text-gray-500 hover:text-blue-600"
					>Emails</a>

					<a
						href="/jobs"
						class="py-3 flex items-center mr-8 md:mr-12 text-gray-500 hover:text-blue-600"
					>Feedback</a>

					<a
						href="/settings"
						class="py-3 flex items-center mr-8 md:mr-12 text-gray-500 hover:text-blue-600"
					>Settings</a>
				</div>-->
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<heading size="heading" class="mb-6" v-if="posts.length">Unique views Analytics</heading>
				<card class="mb-10">
					<page-views :total="total_counts" :unique="unique_counts"></page-views>
				</card>

				<heading size="heading" class="mb-6" v-if="posts.length">Page Views</heading>

				<div class="relative mb-10">
					<div class="absolute fixed top-0 bottom-0 right-0 w-6 bg-white-linear rounded-r-lg opacity-75"></div>
					<basic-table :headings="headings" v-if="posts.length">
						<tr
							v-for="(data, dataIndex) in posts"
							:key="dataIndex"
							class="focus-within:bg-gray-200 overflow-hidden"
						>
							<td class="border-t">
								<!-- <span
										:title="data.job_title"
										class="text-gray-700 px-6 py-4 items-center block w-64 truncate pr-3"
								>{{ data.job_title }}</span>-->
								<link-to
									:to="`/admin/jobs/${data.uuid}/edit`"
									class="inline-block truncate mr-2 mx-6"
								>{{ data.job_title }}</link-to>
							</td>
							<td class="border-t">
								<span
									class="text-gray-700 px-6 py-4 flex items-center"
								>{{ data.job_published_at_formatted }}</span>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.total_page_views }}</span>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.unique_page_views }}</span>
							</td>
						</tr>
					</basic-table>
					<empty-state class="lg:py-32" v-else>
						<div
							class="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-center mx-auto"
						>
							<icon name="search" class="w-8 h-8"></icon>
						</div>

						<heading class="mt-5 mb-1" size="heading">No Job posts</heading>
						<p>Please create atleast one company/organization details to add a job post.</p>

						<loading-button tag="a" to="/admin/jobs/create" size="small" class="mt-6">
							<icon name="plus" class="mr-1"></icon>Create Job
						</loading-button>
					</empty-state>
				</div>
			</div>
		</div>

		<!-- <div class="py-10 min-h-screen px-4">
		<div class="max-w-6xl mx-auto">-->
		<!-- <card class="mb-8">
					<heading size="small-caps" class="mb-2">Quote of the day</heading>

					<heading
						size="large"
						class="italic mb-2"
					>Laziness is nothing more than the habit of resting before you get tired.</heading>
					<div class="italic text-sm">&mdash; Jules Renard</div>
		</card>-->

		<!-- <div class="flex flex-wrap -mx-4">
					<div class="w-1/2 md:w-1/4 mb-8 px-4 flex flex-col">
						<card class="flex-1 hover:shadow-md" to="/admin/companies" tag="a">
							<div
								class="mx-auto bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center"
							>
								<icon name="briefcase" class="text-blue-600"></icon>
							</div>

							<heading size="large" class="text-center mt-5 mb-1">Companies</heading>
							<heading class="text-center hidden">For Job Posting related stuffs visit here.</heading>
						</card>
					</div>

					<div class="w-1/2 md:w-1/4 mb-8 px-4 flex flex-col">
						<card class="flex-1 hover:shadow-md" to="/admin/jobs" tag="a">
							<div
								class="mx-auto bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center"
							>
								<icon name="edit" class="text-blue-600"></icon>
							</div>

							<heading size="large" class="text-center mt-5 mb-1">Job Post</heading>
							<heading class="text-center hidden">For Job Posting related stuffs visit here.</heading>
						</card>
					</div>

					<div
						class="w-1/2 md:w-1/4 mb-8 px-4 flex flex-col"
						v-if="$page.auth.user.type == 'Consultancy'"
					>
						<card class="flex-1 hover:shadow-md" to="/admin/users" tag="a">
							<div
								class="mx-auto bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center"
							>
								<icon name="users" class="text-blue-600"></icon>
							</div>

							<heading size="large" class="text-center mt-5 mb-1">Users</heading>
							<heading class="text-center hidden">List of all users registered in your portals.</heading>
						</card>
					</div>

					<div class="w-1/2 md:w-1/4 mb-8 px-4 flex flex-col">
						<card class="flex-1 hover:shadow-md" to="/admin/jobs" tag="a">
							<div
								class="mx-auto bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center"
							>
								<icon name="bell" class="text-blue-600"></icon>
							</div>

							<heading size="large" class="text-center mt-5 mb-1">Notifications</heading>
							<heading
								class="text-center hidden"
							>For changing passwords and notification settings visit here.</heading>
						</card>
					</div>

					<div class="w-1/2 md:w-1/4 mb-8 px-4 flex flex-col">
						<card class="flex-1 hover:shadow-md" to="/admin/jobs" tag="a">
							<div
								class="mx-auto bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center"
							>
								<icon name="message" class="text-blue-600"></icon>
							</div>

							<heading size="large" class="text-center mt-5 mb-1">Feedback</heading>
							<heading
								class="hidden"
							>If you came across any issue or bug in our system kindly send us a feedback.</heading>
						</card>
					</div>

					<div class="w-1/2 md:w-1/4 mb-8 px-4 flex flex-col">
						<card class="flex-1 hover:shadow-md" to="/settings" tag="a">
							<div
								class="mx-auto bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center"
							>
								<icon name="settings" class="text-blue-600"></icon>
							</div>

							<heading size="large" class="text-center mt-5 mb-1">Settings</heading>
							<heading
								class="text-center hidden"
							>For changing passwords and notification settings visit here.</heading>
						</card>
					</div>
		</div>-->
		<!-- </div>
		</div>-->
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Icon from "@/Shared/tuis/Icon";
import LinkTo from "@/Shared/tuis/LinkTo";
import Card from "@/Shared/tuis/Card";
import BasicTable from "@/Shared/tuis/BasicTable";
import Badge from "@/Shared/tuis/Badge";
import EmptyState from "@/Shared/tuis/EmptyState";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import PageViews from "@/Pages/Charts/PageViews";

export default {
	props: {
		posts: Array,
		unique_counts: Object,
		total_counts: Object
	},
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		BasicTable,
		Badge,
		EmptyState,
		LoadingButton,
		PageViews
	},
	data() {
		return {
			headings: [
				"Job Title",
				"Published at",
				"Total Page Views",
				"Unique Page Views"
			]
		};
	}
};
</script>

<style lang="scss" scoped>
</style>