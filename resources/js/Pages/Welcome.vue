<template>
	<layout title="Home">
		<div class="bg-white overflow-hidden px-4 relative z-20 py-5">
			<div class="h-4 w-24 bg-blue-100 absolute left-0 top-0 mt-4 skew_aa"></div>
			<div class="h-8 w-full bg-gray-100 absolute left-0 top-0 mt-10 skew_aa"></div>
			<div class="h-4 w-10 bg-gray-100 absolute left-0 top-0 mt-20 skew_aa"></div>

			<div class="-mb-10 h-16 w-32 bg-blue-200 absolute left-0 bottom-0 skew_aa"></div>
			<div class="mb-4 h-12 w-32 bg-gray-200 absolute left-0 bottom-0 ml-10 skew_aa"></div>
			<div class="-mb-16 h-20 w-32 bg-orange-200 absolute left-0 bottom-0 ml-16 skew_aa"></div>

			<div class="h-10 w-10 bg-blue-400 absolute right-0 top-0 mt-16 mr-10 skew_aa"></div>
			<!-- <div class="h-12 w-32 bg-gray-400 absolute right-0 top-0 mt-8 skew_aa"></div> -->
			<div class="h-10 w-10 bg-orange-200 absolute right-0 top-0 mt-10 mr-16 skew_aa"></div>

			<!-- <div class="-mb-10 h-16 w-48 bg-blue-600 absolute right-0 top-0 mr-6 skew_bb"></div>
			<div class="mb-4 h-16 w-32 bg-gray-400 absolute right-0 top-0 mr-10 skew_bb"></div>
			<div class="-mb-16 h-20 w-32 bg-orange-400 absolute right-0 top-0 skew_bb"></div>-->

			<!-- <div class="h-16 w-64 bg-orange-200 absolute right-0 bottom-0 mb-4 skew_aa"></div>
			<div class="h-16 w-24 bg-gray-200 absolute right-0 bottom-0 mb-10 skew_aa"></div>
			<div class="h-16 w-32 bg-blue-200 absolute right-0 bottom-0 skew_aa"></div>-->

			<div class="mb-32 h-16 w-32 bg-blue-200 absolute right-0 bottom-0 skew_aa"></div>
			<div class="mb-12 h-12 w-48 bg-gray-200 absolute right-0 bottom-0 ml-4 skew_aa"></div>
			<div class="-mb-16 h-20 w-64 bg-orange-200 absolute right-0 bottom-0 ml-6 skew_aa"></div>

			<div class="md:flex relative max-w-6xl mx-auto">
				<div class="lg:w-3/5 md:flex mx-auto">
					<div class="pt-8 pb-32 md:pt-16 mb:pb-32">
						<!-- <heading size="display" class="mb-1">Your passion begins here.</heading>
						<heading size="display" class="mb-5">Find your job better &amp; faster.</heading>-->
						<!-- <heading size="small-caps" class="mb-2 text-gray-600">Start Finding Jobs By Title:</heading> -->

						<heading class="mb-1 text-blue-600 text-2xl">Struggling for jobs?</heading>
						<heading size="display" class="mb-8">
							<span class="block">Unveil job opportunities</span> in our harbour right now
						</heading>

						<!-- <search-input placeholder="Search your job title..." class="md:w-2/3" rounded="large"></search-input> -->

						<loading-button tag="a" to="/jobs" class="shadow">Explore Jobs</loading-button>
						<!-- <span class="mx-4">or</span> -->
						<!-- <link-to to="/categories">Browse Categories</link-to> -->
						<loading-button tag="a" to="/categories" variant="white" class="shadow">Browse Categories</loading-button>
					</div>
				</div>
				<div class="lg:w-2/5 relative">
					<div class="md:mt-6 hidden md:block">
						<lottie-player
							src="/lf30_editor_wJXeMM.json"
							background="transparent"
							speed="1"
							loop
							style="width: 400px; height: 200px;"
							class="mx-auto md:hidden"
							autoplay
						></lottie-player>
						<lottie-player
							src="/lf30_editor_wJXeMM.json"
							background="transparent"
							speed="1"
							loop
							style="width: 320px; height: 320px;"
							class="mx-auto hidden md:block"
							autoplay
						></lottie-player>
					</div>
				</div>
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<div class="md:flex -mx-4">
					<div class="md:w-2/3 px-4 mx-auto">
						<div class="flex items-center mb-4 justify-between">
							<heading size="heading">Latest Job Posts</heading>
							<link-to to="/jobs">View All</link-to>
						</div>

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
						</card>-->

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
											<heading size="small" class="mb-1">{{ post.company.company_industry }}</heading>
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

						<div class="text-center pt-5 pb-10">
							<loading-button tag="a" to="/jobs" class>See More Jobs</loading-button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-white overflow-hidden px-4 border-b border-gray-200">
			<div class="md:flex relative max-w-6xl mx-auto">
				<div class="lg:w-3/5 md:flex items-center">
					<div class="py-6 md:py-16">
						<heading size="heading2" class="mb-4">Hello Jobs Seeker</heading>
						<heading
							class="mb-5 md:pr-32"
						>Are you still searching for a platform connecting with job seekers? Your quest is over. Here we come with the best platform where you can showcase your job lists. Whether you're looking for full-time, part-time, freelance, or internship opportunities, we've got you covered. Try Jobs Harbour today and pick the best of the candidates.</heading>

						<loading-button to="/for-employers" tag="a">Get started now!</loading-button>
					</div>
				</div>
				<div class="lg:w-2/5 relative">
					<img src="/Consultation.png" alt="bg-image" class="object-contain object-center w-full" />
				</div>
			</div>
		</div>

		<div class="overflow-hidden px-4 bg-blue-700 relative">
			<div class="md:flex relative max-w-5xl mx-auto items-center mb-32 md:mb-0">
				<div class="lg:w-3/4 md:flex items-center">
					<div class="py-10 md:py-16 md:pr-32">
						<h2 class="text-2xl text-white font-semibold tracking-tight">
							Still struggling to communicate with Job Seekers?
							<br />Try Jobs Harbour today.
						</h2>
					</div>
				</div>
				<div class="lg:w-1/4 relative">
					<loading-button to="/for-employers" tag="a" variant="white" class="shadow-md">Get started now!</loading-button>

					<!-- <img src="/Consultation.png" alt="bg-image" class="object-contain object-center w-full" /> -->
				</div>
			</div>

			<div class="mb-32 h-20 w-32 bg-blue-200 absolute right-0 bottom-0 skew_aa"></div>
			<div class="mb-16 h-12 w-40 bg-gray-200 absolute right-0 bottom-0 ml-4 skew_aa"></div>
			<div class="-mb-20 h-32 w-48 bg-orange-200 absolute right-0 bottom-0 ml-6 skew_aa"></div>
		</div>

		<!-- <div class="md:w-1/3 px-4">
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
				<img src="/ad3.png" alt="ad" class="object-fit w-full" />
				<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
			</card>

			<card class="mb-5 relative" :is-padding="false">
				<img src="/ad2.png" alt="ad" class="object-fit w-full" />
				<badge variant="warning" class="absolute top-0 right-0 mt-2 mr-4 shadow-md">Ad</badge>
			</card>
		</div>-->
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
import SearchInput from "@/Shared/tuis/SearchInput";

export default {
	components: {
		Layout,
		Card,
		LoadingButton,
		Heading,
		Badge,
		LinkTo,
		Icon,
		Avatar,
		SearchInput
	},

	props: ["jobposts", "pages"],

	methods: {
		formatCurrency(amount) {
			return toCurrency(parseFloat(amount), "INR", "en-us");
		}
	}
};
</script>


<style>
.skew_aa {
	-webkit-transform: skew(0deg, -20deg);
	-moz-transform: skew(0deg, -20deg);
	-ms-transform: skew(0deg, -20deg);
	-o-transform: skew(0deg, -20deg);
	transform: skew(0deg, -20deg);
	transform-origin: 0;
}
.skew_bb {
	-webkit-transform: skew(20deg, -20deg);
	-moz-transform: skew(20deg, -20deg);
	-ms-transform: skew(20deg, -20deg);
	-o-transform: skew(20deg, -20deg);
	transform: skew(20deg, -20deg);
	transform-origin: 0;
}
</style>