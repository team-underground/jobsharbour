<template>
	<layout>
		<div class="bg-white px-4 relative shadow-sm z-20">
			<div class="md:max-w-6xl mx-auto">
				<div class="flex flex-wrap md:justify-center">
					<inertia-link
						class="w-1/3 md:w-1/6 border-b md:border-transparent py-5 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/companies"
					>
						<icon name="briefcase"></icon>
						<div class="mt-2 text-sm">Companies</div>
					</inertia-link>

					<inertia-link
						class="w-1/3 md:w-1/6 border-l border-b md:border-transparent py-5 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/jobs"
					>
						<icon name="edit2"></icon>
						<div class="mt-2 text-sm">Job Posts</div>
					</inertia-link>

					<inertia-link
						class="w-1/3 md:w-1/6 border-l border-b md:border-transparent py-5 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/admin/users"
						v-if="can['modify-user']"
					>
						<icon name="users"></icon>
						<div class="mt-2 text-sm">Users</div>
					</inertia-link>

					<inertia-link
						class="w-1/3 md:w-1/6 md:border-transparent py-5 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="#"
					>
						<icon name="bell"></icon>
						<div class="mt-2 text-sm">Notifications</div>
					</inertia-link>

					<inertia-link
						class="w-1/3 md:w-1/6 border-l md:border-transparent py-5 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="#"
					>
						<icon name="message"></icon>
						<div class="mt-2 text-sm">Feedback</div>
					</inertia-link>

					<inertia-link
						class="w-1/3 md:w-1/6 border-l md:border-transparent py-5 text-center px-4 flex flex-col hover:text-blue-600 items-center justify-center"
						href="/settings"
					>
						<icon name="settings"></icon>
						<div class="mt-2 text-sm">Settings</div>
					</inertia-link>
				</div>
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<template v-if="Object.keys(total_counts).length > 0">
					<heading size="heading" class="mb-6">Page views Analytics</heading>
					<card class="mb-10">
						<page-views :total="total_counts" :unique="unique_counts"></page-views>
					</card>
				</template>

				<heading size="heading" class="mb-6" v-if="posts.length">Page Views</heading>

				<div class="relative mb-10">
					<div class="absolute fixed top-0 bottom-0 right-0 w-6 bg-white-linear rounded-r-lg opacity-75"></div>
					<basic-table :headings="headings" v-if="posts.length" theme="striped">
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
								<span
									class="text-gray-700 px-6 py-4 flex items-center justify-end"
								>{{ data.total_page_views }}</span>
							</td>
							<td class="border-t">
								<span
									class="text-gray-700 px-6 py-4 flex items-center justify-end"
								>{{ data.unique_page_views }}</span>
							</td>
						</tr>
					</basic-table>
					<empty-state class="lg:py-32" v-else>
						<div
							class="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-center mx-auto"
						>
							<icon name="search" class="w-8 h-8"></icon>
						</div>

						<heading class="mt-5 mb-1" size="heading">No Open Job posts</heading>
						<p>Please create atleast one company/organization details to add a job post.</p>

						<loading-button tag="a" to="/admin/jobs/create" size="small" class="mt-6">
							<icon name="plus" class="mr-1"></icon>Create Job
						</loading-button>
					</empty-state>
				</div>
			</div>
		</div>
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
	props: ["can", "posts", "unique_counts", "total_counts"],
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
				{
					title: "Total Page Views",
					type: "number",
					align: "right"
				},
				{
					title: "Unique Page Views",
					type: "number",
					align: "right"
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
</style>