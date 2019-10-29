<template>
	<layout>
		<div class="px-4 py-6 md:py-16 relative">
			<div class="max-w-5xl mx-auto">
				<heading size="display" class="mb-8 text-center">Find Jobs by Category</heading>

				<div class="flex flex-wrap -mx-2 md:-mx-4 text-center">
					<template v-for="category in categories">
						<div class="w-1/2 md:w-1/4 lg:w-1/5 px-2 py-2 md:px-4 md:py-4" :key="category">
							<card
								class="h-40 flex flex-col items-center justify-center hover:shadow-lg rounded-large"
								:to="`/jobs?category=${category}`"
								tag="a"
							>
								<div
									class="w-12 h-12 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
								>
									<icon name="users" class="w-6 h-6" v-if="category === 'Human Resources'"></icon>
									<icon name="edit2" class="w-6 h-6" v-if="category === 'Media Comm and Writing'"></icon>
									<icon name="briefcase" class="w-6 h-6" v-if="category === 'Business'"></icon>
									<icon name="paper-clip" class="w-6 h-6" v-if="category === 'Admin and Office'"></icon>
									<icon name="clipboard" class="w-6 h-6" v-if="category === 'Management'"></icon>
									<icon name="heart" class="w-6 h-6" v-if="category === 'Healthcare'"></icon>
									<icon name="headphones" class="w-6 h-6" v-if="category === 'Customer Service'"></icon>
									<icon name="trending" class="w-6 h-6" v-if="category === 'Accounting and Finance'"></icon>
									<icon name="monitor" class="w-6 h-6" v-if="category === 'Computer and IT'"></icon>
									<icon name="tv" class="w-6 h-6" v-if="category === 'Advertising and Marketing'"></icon>
									<icon name="award" class="w-6 h-6" v-if="category === 'Education'"></icon>
									<icon name="map-pin" class="w-6 h-6" v-if="category === 'Travel and Tourism'"></icon>
									<icon name="coffee" class="w-6 h-6" v-if="category === 'Food Services'"></icon>
									<icon name="tag" class="w-6 h-6" v-if="category === 'Sales and Retail'"></icon>
									<icon name="settings" class="w-6 h-6" v-if="category === 'Science and Engg'"></icon>
									<icon name="home" class="w-6 h-6" v-if="category === 'Property'"></icon>
									<icon name="tennis-ball" class="w-6 h-6" v-if="category === 'Sports'"></icon>
									<icon name="palette" class="w-6 h-6" v-if="category === 'Design and UX'"></icon>
									<icon name="construction" class="w-6 h-6" v-if="category === 'Construction'"></icon>
									<icon name="bulb" class="w-6 h-6" v-if="category === 'Consultancy'"></icon>
								</div>

								<heading size="small-caps" class="text-gray-700">{{category}}</heading>
							</card>
						</div>
					</template>
				</div>

				<heading class="text-center mt-10">
					Questions? Drop us an email at
					<link-to to="mailto:hello@jobsharbour.com">hello@jobsharbour.com</link-to>.
					<br />We usually get back within 24 hours.
				</heading>
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
import List from "@/Shared/tuis/List";
import LoadingButton from "@/Shared/tuis/LoadingButton";

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		List,
		LoadingButton
	},
	data() {
		return {};
	},
	props: {
		categories: Array
	}
};
</script>
