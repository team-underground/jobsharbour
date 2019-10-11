<template>
	<layout>
		<div class="bg-white px-4 py-10">
			<div class="container mx-auto">
				<link-to to="/jobs" class="mb-4">
					<icon name="chevron-left" class="-ml-2"></icon>Back to Jobs
				</link-to>

				<heading size="heading">Create New Job Posts</heading>
			</div>
		</div>

		<div class="py-10">
			<div class="container mx-auto">
				<div class="md:flex -mx-4">
					<div class="md:w-3/4 px-4">
						<card>
							<alert class="mb-4">
								<strong>Note:</strong> Job postings once created will go to the admin first for moderation and then only will be published on the website. It will take 1-2 days for the moderation process to get completed.
							</alert>
							<div class="md:flex mb-10">
								<heading size="large" class="md:w-1/3 mb-3">Job Details</heading>
								<div class="md:w-2/3">
									<text-input
										v-model="job.job_title"
										label="Title"
										placeholder="eg. Senior Web Developer"
										class="mb-4"
										:errors="errors['job_title']"
										@keydown="delete errors['job_title']"
									></text-input>
									<text-input
										v-model="job.job_location"
										label="Location"
										placeholder="City or Town/Place name"
										class="mb-4"
										:errors="errors['job_location']"
										@keydown="delete errors['job_location']"
									></text-input>

									<div class="flex -mx-4">
										<!-- <div class="w-1/3 px-4">
											<select-input
												v-model="job.job_position"
												label="Position"
												class="mb-4"
												:options="positions"
												:errors="errors['job_position']"
												@keydown="delete errors['job_position']"
											>
												<option value="null" disabled>Select position</option>
											</select-input>
										</div>-->
										<div class="w-1/2 px-4">
											<select-input
												v-model="job.job_type"
												label="Type"
												class="mb-4"
												:options="jobtypes"
												:errors="errors['job_type']"
												@keydown="delete errors['job_type']"
											>
												<option value="null" disabled>Select job type</option>
											</select-input>
										</div>
										<div class="w-1/2 px-4">
											<select-input
												v-model="job.job_salary"
												label="Salary (monthly)"
												class="mb-4"
												:options="salaries"
												:errors="errors['job_salary']"
												@keydown="delete errors['job_salary']"
											>
												<option value="null" disabled>Select salary</option>
											</select-input>
										</div>
									</div>

									<simple-editor
										label="Description"
										v-model="job.job_description"
										class="mb-4"
										:errors="errors['job_description']"
										@keydown="delete errors['job_description']"
									></simple-editor>

									<text-input
										v-model="job.job_skills"
										label="Skills"
										placeholder="eg. Laravel, MySQL, Angular..."
										class="mb-4"
										:errors="errors['job_skills']"
										@keydown="delete errors['job_skills']"
									></text-input>

									<text-input
										v-model="job.job_email"
										type="email"
										label="Email for candidate"
										placeholder="Email address where job seekers send their resume..."
										class="mb-4"
										:errors="errors['job_email']"
										@keydown="delete errors['job_email']"
									></text-input>
								</div>
							</div>

							<div class="md:flex">
								<heading size="large" class="mb-3 md:w-1/3">Company Details</heading>
								<div class="md:w-2/3">
									<text-input
										v-model="job.company_name"
										label="Name"
										placeholder="eg. ABC Company"
										class="mb-4"
										:errors="errors['company_name']"
										@keydown="delete errors['company_name']"
									></text-input>
									<text-input
										v-model="job.company_website"
										label="Website"
										placeholder="eg. http://google.com"
										class="mb-4"
										:errors="errors['company_website']"
										@keydown="delete errors['company_website']"
									></text-input>

									<div class="flex -mx-4">
										<div class="w-1/2 px-4">
											<select-input
												v-model="job.company_industry"
												label="Industry"
												class="mb-4"
												:options="industries"
												:errors="errors['company_industry']"
												@keydown="delete errors['company_industry']"
											>
												<option value="null" disabled>Select your industry</option>
											</select-input>
										</div>
										<div class="w-1/2 px-4">
											<select-input
												v-model="job.company_no_of_employees"
												label="No. of employees"
												class="mb-4"
												:options="companySize"
												:errors="errors['company_no_of_employees']"
												@keydown="delete errors['company_no_of_employees']"
											>
												<option value="null" disabled>Select company size</option>
											</select-input>
										</div>
									</div>
									<textarea-input
										label="Description"
										v-model="job.company_description"
										placeholder="Brief description of the company..."
										class="mb-4"
										:errors="errors['company_description']"
										@keydown="delete errors['company_description']"
									></textarea-input>

									<text-input
										v-model="job.company_benefits"
										label="Benefits"
										placeholder="eg. Laptop, Free Lunch, Flexible holidays..."
										class="mb-4"
										:errors="errors['company_benefits']"
										@keydown="delete errors['company_benefits']"
									></text-input>
								</div>
							</div>
						</card>
					</div>
					<div class="md:w-1/4 px-4">
						<card>
							<date-input
								label="Published Date"
								format="YYYY-MM-DD"
								class="w-50"
								placeholder="Select date"
								v-model="job.job_published_at"
								readonly
							></date-input>

							<loading-button
								ref="jobSaveButton"
								class="w-full mt-5 mb-2"
								@click="saveJobPost"
							>Save Job Post</loading-button>
							<div>
								<loading-button class="w-full bg-gray-100" variant-type="outline">Save as Draft</loading-button>
							</div>
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
import TextInput from "@/Shared/tuis/TextInput";
import SelectInput from "@/Shared/tuis/SelectInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import SimpleEditor from "@/Shared/tuis/SimpleEditor";
import SwitchInput from "@/Shared/tuis/SwitchInput";
import DateInput from "@/Shared/tuis/DateInput";
import Alert from "@/Shared/tuis/Alert";
import TextareaInput from "@/Shared/tuis/TextareaInput";

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo,
		Card,
		TextInput,
		SelectInput,
		SimpleEditor,
		LoadingButton,
		SwitchInput,
		DateInput,
		Alert,
		TextareaInput
	},

	props: ["jobtypes", "positions", "industries", "errors"],

	data() {
		return {
			job: {
				job_title: null,
				job_location: null,
				job_position: null,
				job_type: null,
				job_salary: null,
				job_skills: null,
				job_email: null,
				job_description: `Introduce job seekers to the role by describing responsibilities, skills and technologies...`,
				job_published_at: "2019-10-9",

				company_logo: null,
				company_name: null,
				company_website: null,
				company_no_of_employees: null,
				company_industry: null,
				company_description: null,
				company_benefits: null
			},

			companySize: {
				"0-25": "0-25",
				"25-50": "25-50",
				"50-100": "50-100",
				"100+": "100+"
			},
			salaries: {
				"5000-10,000": "5000-10,000",
				"10,000-15,000": "10,000-15,000",
				"15,000-20,000": "15,000-20,000",
				"20,000-40,000": "20,000-40,000",
				"40,000+": "40,000+"
			}
		};
	},

	methods: {
		saveJobPost() {
			this.$refs.jobSaveButton.startLoading();
			this.$inertia
				.post("/jobs/create", this.job)
				.then(() => {
					this.$refs.jobSaveButton.stopLoading();
				})
				.catch(() => {
					this.$refs.jobSaveButton.stopLoading();
				});
		}
	}
};
</script>

<style lang="scss" scoped>
</style>