<template>
	<layout>
		<div class="bg-blue-200 px-4 py-10 md:py-20 relative overflow-hidden">
			<div class="max-w-2xl mx-auto text-center relative z-10">
				<heading size="display" class="mb-4">About Jobs Harbour</heading>
				<heading
					class="mb-1 text-blue-800 md:text-xl"
				>Jobs Harbour is an online web based job listing site for both employers and job seekers. Our primary goal is to provide you upto date job information from all around Assam and the Northeast.</heading>
			</div>

			<div class="hidden md:block">
				<div class="-mb-10 h-16 w-32 bg-blue-300 absolute left-0 bottom-0 skew_aa"></div>
				<div class="mb-6 h-12 w-48 bg-gray-200 absolute left-0 bottom-0 ml-10 skew_aa"></div>
				<div class="-mb-16 h-20 w-32 bg-orange-200 absolute left-0 bottom-0 ml-16 skew_aa"></div>

				<div class="mb-6 h-16 w-32 bg-blue-300 absolute right-0 bottom-0 skew_aa"></div>
				<div class="mb-6 h-12 w-48 bg-gray-200 absolute right-0 bottom-0 mr-10 skew_aa"></div>
				<div class="-mb-16 h-20 w-32 bg-orange-200 absolute right-0 bottom-0 mr-16 skew_aa"></div>
			</div>
		</div>

		<div class="px-4 py-6 md:py-16 relative">
			<div class="max-w-4xl mx-auto">
				<div class="flex -mx-4">
					<div class="w-1/2 px-4 flex">
						<card class="flex-1">
							<heading size="large" class="mb-2">For Job Seekers</heading>
							<heading class="mb-6">This is all job hunters accurate point to find jobs of their preferred kind. Find job openings by job title, salary, job type and category. Provide all the details of your credentials, CV and pull employers' interest.</heading>
							<list unordered-list-color="text-blue-600" :lists="['Subscribe to get notify','Register and apply (comming soon)','Feel free to share your credentials/CV.']"></list>
						</card>
					</div>
					<div class="w-1/2 px-4 flex">
						<card class="flex-1">
							<heading size="large" class="mb-2">For Employers</heading>

							<heading
								class="mb-4"
							>Jobs Harbour provides a convenient place for employees/consultancy to showcase their jobs in details. Here they can reach potential and deserving candidates and pick the best out of them.</heading>

							<link-to to="/for-employers">View Details</link-to>
						</card>
					</div>
				</div>

				<contact-us />

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
import ContactUs from "@/Pages/ContactUs";


export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		List,
		LoadingButton,
		ContactUs
	},
	data() {
		return {
			plan: "Company",

			myOptions: {
				layout: {
					color: "#666666",
					backgroundColor: "#ffffff",
					selectedColor: "white",
					selectedBackgroundColor: "#29a9c9",
					borderColor: "transparent",
					fontFamily: "Inter",
					fontWeight: "bold",
					fontWeightSelected: "bold",
					squareCorners: false,
					noBorder: true
				},
				size: {
					fontSize: 1,
					height: 3.2,
					padding: 0.7,
					width: 20
				},
				items: {
					delay: 0.4,
					preSelected: "Company",
					disabled: false,
					labels: [
						{
							name: "Company"
						},
						{
							name: "Recruiting Firm"
						}
					]
				}
			}
		};
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
</style>
