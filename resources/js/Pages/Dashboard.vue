<template>
	<layout>
		<div class="bg-white px-4 py-10">
			<div class="container mx-auto">
				<!-- <link-to to="/jobs" class="mb-4">
					<icon name="chevron-left" class="-ml-2"></icon>Back Links
				</link-to>-->

				<heading size="heading" class="mb-6">Welcome, John Doe</heading>
				<div class="md:flex">
					<a href="/jobs" class="mb-2 w-24 mr-8 p-4 bg-gray-100 rounded-lg inline-block text-blue-500">
						<icon class="mb-2 mx-auto" :height="32" :width="32" name="edit"></icon>
						<heading size="small-caps" class="text-center text-blue-500">Job</heading>
					</a>

					<a href="/jobs" class="mb-2 w-24 mr-8 p-4 rounded-lg inline-block hover:bg-gray-100">
						<icon class="text-gray-400 mb-2 mx-auto" :height="32" :width="32" name="map-pin"></icon>
						<heading size="small-caps" class="text-center">Location</heading>
					</a>

					<a href="/jobs" class="mb-2 w-24 mr-8 p-4 rounded-lg inline-block hover:bg-gray-100">
						<icon class="text-gray-400 mb-2 mx-auto" :height="32" :width="32" name="users"></icon>
						<heading size="small-caps" class="text-center">User</heading>
					</a>

					<a href="/jobs" class="mb-2 w-24 mr-8 p-4 rounded-lg inline-block hover:bg-gray-100">
						<icon class="text-gray-400 mb-2 mx-auto" :height="32" :width="32" name="briefcase"></icon>
						<heading size="small-caps" class="text-center">Category</heading>
					</a>

					<a href="/jobs" class="mb-2 w-24 mr-8 p-4 rounded-lg inline-block hover:bg-gray-100">
						<icon class="text-gray-400 mb-2 mx-auto" :height="32" :width="32" name="wallet"></icon>
						<heading size="small-caps" class="text-center">Salary</heading>
					</a>
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

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo
	}
};
</script>

<style lang="scss" scoped>
</style>