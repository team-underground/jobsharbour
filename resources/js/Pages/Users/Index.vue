<template>
	<layout>
		<div class="bg-white px-4 pt-6 py-4 relative shadow-sm z-20">
			<div class="max-w-6xl mx-auto">
				<link-to to="/dashboard" class="mb-2">
					<icon name="chevron-left" class="-ml-2"></icon>Back to Dashboard
				</link-to>
				<div class="flex justify-between items-center">
					<heading size="heading">All Users</heading>

					<div class="flex">
						<search-input v-model="form.search" placeholder="Search by name, email..."></search-input>
					</div>
				</div>
			</div>
		</div>
		<div class="py-10">
			<div class="max-w-6xl mx-auto">
				<div class="relative">
					<div class="absolute fixed top-0 bottom-0 right-0 w-6 bg-white-linear rounded-r-lg opacity-75"></div>
					<basic-table :headings="headings">
						<tr
							v-for="(data, dataIndex) in users.data"
							:key="dataIndex"
							class="focus-within:bg-gray-200 overflow-hidden"
						>
							<td class="border-t">
								<link-to
									:to="`/admin/users/${data.uuid}`"
									class="inline-block truncate mr-2 mx-6"
								>{{ data.name }}</link-to>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.email }}</span>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">
									<badge variant="warning" v-if="data.type === 'Administrator'">{{ data.type }}</badge>
									<badge v-if="data.type === 'Employer'">{{ data.type }}</badge>
								</span>
							</td>
						</tr>
					</basic-table>
				</div>

				<div
					class="flex items-center justify-between mt-8"
					v-if="users.prev_page_url != null || users.next_page_url != null"
				>
					<div>
						<loading-button
							v-if="users.prev_page_url == null"
							tag="a"
							:to="users.prev_page_url"
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
							:to="users.prev_page_url"
							size="small"
						>
							<icon name="chevron-left"></icon>Previous
						</loading-button>
					</div>
					<div>
						<heading size="small">
							{{ users.from }} to
							{{ users.to }}
						</heading>
					</div>
					<div>
						<loading-button
							v-if="users.next_page_url == null"
							tag="a"
							:to="users.next_page_url"
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
							:to="users.next_page_url"
							:disabled=" users.next_page_url == null"
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
		Badge
	},
	props: ["users", "filters"],

	watch: {
		form: {
			handler: _.throttle(function() {
				let query = _.pickBy(this.form);
				this.$inertia.replace(
					this.route(
						"admin.users.all",
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
			headings: ["Name", "Email", "Type"]
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

 