<template>
	<layout>
		<div class="bg-white px-4 pt-6 py-4 relative shadow-sm z-20">
			<div class="max-w-6xl mx-auto">
				<link-to to="/dashboard" class="mb-2">
					<icon name="chevron-left" class="-ml-2"></icon>Back to Dashboard
				</link-to>
				<div class="flex justify-between items-center">
					<heading size="heading">All Companies</heading>

					<div class="flex">
						<search-input
							v-model="form.search"
							placeholder="Search by company name, email..."
							class="mr-2"
						></search-input>

						<loading-button size="small" to="/admin/companies/create" tag="a" v-if="can.create">
							<icon name="plus"></icon>
							<span class="hidden md:block">New Company</span>
						</loading-button>
					</div>
				</div>
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<alert class="my-6" v-if="$page.auth.user.type == 'Consultancy'">
					You could list upto maximum of 5 companies in your free period. For further information contact our
					<link-to to="mailto:hello@jobsharbour.com">sales team</link-to>&nbsp;.
				</alert>
				<div class="relative">
					<div class="absolute fixed top-0 bottom-0 right-0 w-6 bg-white-linear rounded-r-lg opacity-75"></div>
					<basic-table :headings="headings" v-if="companies.data.length > 0">
						<tr
							v-for="(data, dataIndex) in companies.data"
							:key="dataIndex"
							class="focus-within:bg-gray-200 overflow-hidden"
						>
							<td class="border-t">
								<link-to
									:to="`/admin/companies/${data.uuid}/edit`"
									class="inline-block truncate mr-2 mx-6"
								>{{ data.company_name }}</link-to>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.company_industry }}</span>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.company_website }}</span>
							</td>
						</tr>
					</basic-table>

					<empty-state class="lg:py-32" v-else>
						<div
							class="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-center mx-auto"
						>
							<icon name="search" class="w-8 h-8"></icon>
						</div>

						<heading class="mt-5 mb-1" size="heading">No Companies found</heading>
						<p>Please create atleast one company/organization details to add a job post.</p>

						<loading-button tag="a" to="/admin/companies/create" size="small" class="mt-6">
							<icon name="plus" class="mr-1"></icon>Create Company
						</loading-button>
					</empty-state>
				</div>

				<div
					class="flex items-center justify-between mt-8"
					v-if="companies.prev_page_url != null || companies.next_page_url != null"
				>
					<div>
						<loading-button
							v-if="companies.prev_page_url == null"
							tag="a"
							:to="companies.prev_page_url"
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
							:to="companies.prev_page_url"
							size="small"
						>
							<icon name="chevron-left"></icon>Previous
						</loading-button>
					</div>
					<div>
						<heading size="small">
							{{ companies.from }} to
							{{ companies.to }}
						</heading>
					</div>
					<div>
						<loading-button
							v-if="companies.next_page_url == null"
							tag="a"
							:to="companies.next_page_url"
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
							:to="companies.next_page_url"
							:disabled=" companies.next_page_url == null"
							size="small"
						>
							Next
							<icon name="chevron-right"></icon>
						</loading-button>
					</div>
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
import SearchInput from "@/Shared/tuis/SearchInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import SwitchInput from "@/Shared/tuis/SwitchInput";
import DateInput from "@/Shared/tuis/DateInput";
import Alert from "@/Shared/tuis/Alert";
import BasicTable from "@/Shared/tuis/BasicTable";
import Badge from "@/Shared/tuis/Badge";
import EmptyState from "@/Shared/tuis/EmptyState";
import FlashMessage from "@/Shared/tuis/FlashMessage";

import _ from "lodash";

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		SearchInput,
		LoadingButton,
		SwitchInput,
		DateInput,
		Alert,
		BasicTable,
		Badge,
		EmptyState,
		FlashMessage
	},
	props: ["companies", "filters", "can"],

	watch: {
		form: {
			handler: _.throttle(function() {
				let query = _.pickBy(this.form);
				this.$inertia.replace(
					this.route(
						"admin.jobs.all",
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
				search: this.filters.search
			},
			headings: ["Name", "Industry", "Website"]
		};
	},
	methods: {}
};
</script>

<style>
.bg-white-linear {
	background: linear-gradient(to right, white, #f7fafc);
}
</style>

 