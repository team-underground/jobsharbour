<template>
	<layout>
		<div class="px-4 py-6 md:py-16 relative">
			<div class="max-w-3xl mx-auto">
				<heading size="display" class="mb-4 text-center">About Jobs Harbour</heading>
				<heading
					class="mb-10 text-center"
				>Jobs Harbour is an online web based job listing sites for both employers and job seekers. Our primary goal is to provide you upto date job informations from all around Assam and the Northeast.</heading>

				<div class="flex -mx-4">
					<div class="w-1/2 px-4">
						<heading size="large" class="mb-2">For Job Seekers</heading>
						<heading>Job Seekers can find the right job for her/him no matter what it is that you do. Find job openings by job title, by location, by salary and many more...</heading>
					</div>
					<div class="w-1/2 px-4">
						<heading size="large" class="mb-2">For Employers</heading>

						<heading
							class="mb-4"
						>Jobs Harbour helps employers job listing reaches to large number of potentials candidates, so that he/she can pick the best out of them.</heading>

						<link-to to="/for-employers">View Details</link-to>
					</div>
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
