<template>
	<layout>
		<div class="bg-white px-4 py-6 relative shadow-sm z-20">
			<div class="max-w-6xl mx-auto">
				<!-- <link-to to="/jobs" class="mb-4">
					<icon name="chevron-left" class="-ml-2"></icon>Back Links
				</link-to>-->

				<heading size="large">
					<span class="font-normal">Welcome</span>, John Doe
				</heading>
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

		<div class="py-10 min-h-screen px-4">
			<div class="max-w-6xl mx-auto">
				<card class="mb-8">
					<heading size="small-caps" class="mb-2">Quote of the day</heading>

					<heading
						size="large"
						class="italic mb-2"
					>Laziness is nothing more than the habit of resting before you get tired.</heading>
					<div class="italic text-sm">&mdash; Jules Renard</div>
				</card>

				<div class="flex flex-wrap -mx-4">
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

					<div class="w-1/2 md:w-1/4 mb-8 px-4 flex flex-col">
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

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card
	}
};
</script>

<style lang="scss" scoped>
</style>