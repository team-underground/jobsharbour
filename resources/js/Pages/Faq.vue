<template>
	<layout>
		<div class="py-10 md:py-16">
			<div class="mb-8 text-center">
				<heading size="heading2">Frequently Asked Questions</heading>
			</div>

			<card class="max-w-4xl mx-auto">
				<tabs>
					<tab name="About Jobs Harbour" :selected="true">
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">Why jobs harbour?</div><p>Here we come with the best platform where you can showcase your job lists, communicate with a mass of potential candidates in no time and also pick up the best out of them.</p>
						</accordion>
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">Is registration on the Jobs Harbour free?</div><p>Yes. Registration is free for job seekers and job creators. <link-to to="/register">Register here</link-to></p>
						</accordion>
						<accordion>
							<div
								slot="title"
								class="text-lg text-gray-800 font-medium"
							>Who should I get in touch with in case of any issues/clarifications?</div><p>You can contact our customer support team at <mail-to to="hello@jobsharbour.com">hello@jobsharbour.com</mail-to></p>
						</accordion>
						<accordion>
							<div
								slot="title"
								class="text-lg text-gray-800 font-medium"
							>What types of Profiles do you have?</div><p>At Jobs Harbour you will find a wide range of Profiles in terms of educational qualifications, functional area, years of professional experience, preferences, locations etc.</p>
						</accordion>
					</tab>
					<tab name="About Job Seeker">
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">Personal Details on Registration</div>
							<p
								class="mb-2"
							>Jobs Harbour is all about your career. We believe that your career is far bigger than the job itself. Even if you are not actively looking for a job, We can help you manage your career.</p>
							<p
								class="mb-3"
							>A traditional job search is one way. At Jobs Harbour, we offer you the following:</p>
							<list
								unordered-list-color="text-blue-600"
								:lists="['The most relevant job opportunities','A unique UI to manage your opportunities, communicate with potential employers and manage the entire process','Protect Privacy - Keep your identity anonymous and still get head hunted','Be prepared for interviews - Research industries and companies you are interviewing with, read what experts are saying, and be up-to-date','Get the extra edge - Use our salary benchmarking tool to negotiate better and get the best offer!']"
							></list>
						</accordion>
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">Does it cost anything to me?</div>
							<p>Candidate registration on Jobs Harbour is free of cost.</p>
						</accordion>
						<accordion>
							<div
								slot="title"
								class="text-lg text-gray-800 font-medium"
							>Do I need to register to apply for a job?</div>
							<p>
								Yes, you need to register to be able to apply for a job on Jobs Harbour. But, currently we are updrading our job portal. So, you need to
								<link-to to="/">subscribe us</link-to>to get notification about your career news, matching jobs etc.
							</p>
						</accordion>
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">What is Desired Job Details?</div>
							<p>Desired Job Details gives you an opportunity to provide your preferred location and preferred specializations in which you are looking for a job which might differ from your current one. This will make sure that you receive only those matches which match your profile as well as the preferences.</p>
						</accordion>
						<accordion>
							<div
								slot="title"
								class="text-lg text-gray-800 font-medium"
							>How is Job matching different from Job Search?</div>
							<p
								class="mb-3"
							>You can set your profile status under the Account Details by clicking on the "General" tab of "My Profile". You have the following two options for your profile status:</p>
							<p
								class="mb-3"
							>Job matching is different from Job search because it's not based just on keyword search.</p>
							<p
								class="mb-3"
							>Job Matching happens on a comprehensive matching engine built on artificial intelligence. This engine provides you with an instant and reciprocal match based on the degree of relevance between your profile and preferences on one hand and job requirements on the other hand.</p>
							<p>Also, you get a real time updates on matched jobs as more and more jobs are posted by employers.</p>
						</accordion>
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">How can I search jobs?</div>
							<p
								class="mb-3"
							>As our system works for you and find you the matched positions for your skills and preferences, you can also use the search functions to search for jobs. To search jobs, use the searchBar at the top.</p>
							<p>If the search jobs throws lot of jobs, you can precise your search by using the advanced search option.</p>
						</accordion>
						<accordion>
							<div
								slot="title"
								class="text-lg text-gray-800 font-medium"
							>There are a lot of results to my job search. Can I filter the results?</div>
							<p>Yes, you can filter the job results. Filter options are available in the left navigation panel right next to the search results. You can filter results by Industry, Experience, Salary, Functional area and Location.</p>
						</accordion>
					</tab>
					<tab name="About Job Creator">
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">How to post a job?</div><p>It is easy! All you need to do is enter the job information on the Portal and it will be posted.</p>
						</accordion>
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">Do you charge anything for posting jobs?</div><p>No, this is not paid service for Employers but yes, for Consultancy. One consultancy can add 5 companys' at a time. If they want to add more jobs you need to buy our <link-to to="/for-employers">premium version</link-to>. Once you post the opening, you will start receiving relevant applications in your inbox.</p>
						</accordion>
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">How the Profiles of the candidates are listed?</div><p>You can filter for a specific category and view Profile listing corresponding to that category. The resumes are listed generally in the reverse chronological order. It means the latest addition would be on the top.</p>
						</accordion>
						<accordion>
							<div slot="title" class="text-lg text-gray-800 font-medium">I am not able to sign-in into my account. What do I need to do?</div><p>Please check your user id and password , Sign-in details are case-sensitive. Delete cookies and disable JavaScript from your web browser. If issues persist, send us mail at <mail-to to="hello@jobsharbour.com">hello@jobsharbour.com</mail-to></p>
						</accordion>
					</tab>
				</tabs>
			</card>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Tab from "@/Shared/tuis/Tab";
import Tabs from "@/Shared/tuis/Tabs";
import Accordion from "@/Shared/tuis/Accordion";
import List from "@/Shared/tuis/List";
import LinkTo from "@/Shared/tuis/LinkTo";
import MailTo from "@/Shared/tuis/MailTo";
import Card from "@/Shared/tuis/Card";

export default {
	components: {
		Layout,
		Heading,
		Tabs,
		Tab,
		Accordion,
		List,
		LinkTo,
		Card,
		MailTo
	}
};
</script>
