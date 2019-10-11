<template>
	<layout>
		<div class="bg-white overflow-hidden px-4 relative z-30">
			<div class="md:flex relative container mx-auto">
				<div class="lg:w-3/5 md:flex items-center">
					<div class="py-8 md:py-16">
						<heading size="display" class="mb-1">Your passion begins here.</heading>
						<heading size="display" class="mb-5">Find your job better &amp; faster.</heading>
						<heading size="small-caps" class="mb-2 text-gray-600">Start Finding Jobs By Title:</heading>

						<div>
							<badge class="mr-2 mb-1">Web Developer</badge>
							<badge class="mr-2 mb-1">Graphic Designer</badge>
							<badge class="mr-2 mb-1">Accounting</badge>
							<!-- <badge class="mr-2 mb-1">Finance</badge> -->
							<link-to to="#">See all</link-to>
						</div>
					</div>
				</div>
				<div class="lg:w-2/5 relative">
					<!-- <svg
						class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>-->
					<!-- <img src="/duotone.jpg" alt="bg-image" class="object-contain object-center w-full h-full" /> -->
					<!-- <img
						src="/designer.svg"
						alt="bg-image"
						class="absolute object-fit bottom-0 w-64 md:w-2/3 -mb-10 md:-mb-24 mt-10 left-0 right-0 mx-auto"
					/>-->

					<img src="/Consultation.png" alt="bg-image" class="object-contain object-center w-full" />
				</div>
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="container mx-auto">
				<div class="md:flex -mx-4">
					<div class="md:w-2/3 px-4">
						<div class="flex items-center mb-4 justify-between">
							<heading size="heading">Latest Job Posts</heading>
							<link-to to="/jobs">View All</link-to>
						</div>

						<card v-for="(post, idx) in jobposts.data" :key="idx" class="mb-4">
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
									<heading class="mb-2">at {{ post.company.company_name }}</heading>

									<div class="flex justify-between mb-4 pb-4 border-b">
										<div class="md:flex-1 flex items-center">
											<icon class="mr-2 text-gray-400" name="map-pin"></icon>
											<heading>{{ post.job_location }}</heading>
										</div>
										<div class="md:flex-1 flex items-center">
											<icon class="mr-2 text-gray-400" name="wallet"></icon>
											<heading>Rs. {{ post.job_salary }}/m</heading>
										</div>
										<div class="md:flex-1 flex items-center">
											<icon class="mr-2 text-gray-400" name="clock"></icon>
											<heading>{{ post.job_type }}</heading>
										</div>
									</div>

									<div class="flex justify-between">
										<heading size="small">{{ post.job_published_at }}</heading>
										<link-to :to="`/jobs/${post.uuid}`" class="text-sm">View Details</link-to>
									</div>
								</div>
							</div>
						</card>
					</div>
					<div class="md:w-1/3 px-4">
						<card class="text-center mt-12 mb-5">
							<heading size="heading" class="mb-8 text-left">
								Hello Employers!
								<br />Want to start hiring with us?
							</heading>

							<div
								class="relative mx-auto w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-8 overflow-hidden"
							>
								<img
									src="/entrepreneurs.svg"
									alt="employers"
									class="absolute object-fit w-48 mx-auto right-0 left-0 bottom-0"
								/>
							</div>

							<heading class="mb-8 text-left">
								<strong>MyCareerList</strong> is the best place to post your jobs. We will help you find the right candidates for your next projects. Whether you're looking for full-time, part-time, freelance, or internship opportunities, we've got you covered.
							</heading>

							<loading-button rounded="large">
								<icon name="edit" class="mr-1"></icon>Let's get started
							</loading-button>
						</card>

						<card class="mb-5 relative" :is-padding="false">
							<!-- <heading size="heading" class="mb-8 text-left">Looking to advertise</heading> -->
							<img src="/ad3.png" alt="ad" class="object-fit w-full" />
							<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
						</card>

						<card class="mb-5 relative" :is-padding="false">
							<!-- <heading size="heading" class="mb-8 text-left">Looking to advertise</heading> -->
							<img src="/ad2.png" alt="ad" class="object-fit w-full" />
							<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
						</card>
					</div>
				</div>
			</div>
		</div>
	</layout>
</template>

<script>
const toCurrency = (n, curr, LanguageFormat = undefined) =>
	Intl.NumberFormat(LanguageFormat, {
		style: "currency",
		currency: curr
	}).format(n);

import Layout from "@/Shared/Layout";
import Card from "@/Shared/tuis/Card";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Heading from "@/Shared/tuis/Heading";
import Badge from "@/Shared/tuis/Badge";
import LinkTo from "@/Shared/tuis/LinkTo";
import Icon from "@/Shared/tuis/Icon";
import Avatar from "@/Shared/tuis/Avatar";

export default {
	components: {
		Layout,
		Card,
		LoadingButton,
		Heading,
		Badge,
		LinkTo,
		Icon,
		Avatar
	},

	props: ["jobposts"],

	methods: {
		formatCurrency(amount) {
			return toCurrency(parseFloat(amount), "INR", "en-us");
		}
	}
};
</script>