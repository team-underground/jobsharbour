<template>
	<layout>
		<form @submit.prevent="submit">
			<div class="bg-white px-4 pt-6 py-4">
				<div class="max-w-6xl mx-auto">
					<link-to to="/admin/jobs" class="mb-2">
						<icon name="chevron-left" class="-ml-2"></icon>Back to Jobs
					</link-to>

					<div class="md:flex items-center">
						<div class="flex-1">
							<heading size="heading">Edit Job Posts Details</heading>
						</div>
						<div class="flex">
							<loading-button type="submit" size="small" ref="jobSaveButton">Update Post</loading-button>

							<loading-button type="button" size="small" variant="danger" variant-type="outline">
								<icon name="trash"></icon>
							</loading-button>
						</div>
					</div>
				</div>
			</div>
			<div class="py-10">
				<div class="max-w-6xl mx-auto">
					<div class="md:flex mb-10">
						<div class="md:w-1/3 mb-3 px-4 md:px-0">
							<heading size="large" class="mb-1">Job Details</heading>
							<heading
								class="mb-4"
							>Introduce job seekers to the role by describing responsibilities, skills and technologies...</heading>
						</div>
						<div class="md:w-2/3">
							<card>
								<select-input
									v-model="job.company_id"
									label="Select Company"
									class="mb-4"
									:options="companies"
									select-value="value"
									:errors="errors['company_id']"
									@keydown="delete errors['company_id']"
								>
									<option value="null" disabled>Select company</option>
								</select-input>

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

								<!-- <text-input
									v-model="job.job_skills"
									label="Skills"
									placeholder="eg. Laravel, MySQL, Angular..."
									class="mb-4"
									:errors="errors['job_skills']"
									@keydown="delete errors['job_skills']"
								></text-input>-->
								<tags-input label="Skills" v-model="job.job_skills" class="mb-4"></tags-input>

								<text-input
									v-model="job.job_email"
									type="email"
									label="Email for candidate"
									placeholder="Email address where job seekers send their resume..."
									class="mb-4"
									:errors="errors['job_email']"
									@keydown="delete errors['job_email']"
								></text-input>

								<simple-editor
									label="Description"
									v-model="job.job_description"
									class="mb-4"
									:errors="errors['job_description']"
									@keydown="delete errors['job_description']"
								></simple-editor>
							</card>
						</div>
					</div>

					<div class="md:flex">
						<div class="md:w-1/3 px-4 md:px-0">
							<heading size="large" class="mb-1">Job Post Dates</heading>
							<heading class="mb-4">The date when the job post has been published & closed.</heading>
						</div>
						<div class="md:w-2/3">
							<card>
								<date-input
									label="Published Date"
									class="w-48 mb-4"
									placeholder="Select date"
									v-model="job.job_published_at"
									readonly
								></date-input>

								<date-input
									label="Job Closing Date"
									class="w-48"
									placeholder="Select date"
									v-model="job.job_closing_date"
									readonly
								></date-input>
							</card>
						</div>
					</div>
				</div>
			</div>
		</form>
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
import FileInput from "@/Shared/tuis/FileInput";
import TagsInput from "@/Shared/tuis/TagsInput";

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
		TextareaInput,
		FileInput,
		TagsInput
	},
	props: [
		"jobtypes",
		"positions",
		"industries",
		"errors",
		"post",
		"companies"
	],
	data() {
		return {
			job: {
				company_id: this.post.company_id,
				job_title: this.post.job_title,
				job_location: this.post.job_location,
				job_position: this.post.job_position,
				job_type: this.post.job_type,
				job_salary: this.post.job_salary,
				job_skills: this.post.job_skills,
				job_email: this.post.job_email,
				job_description: this.post.job_description,
				job_published_at: this.post.job_published_at,
				job_closing_date: this.post.job_closing_date
			},
			salaries: {
				"5K-10K": "5K-10K",
				"10K-15K": "10K-15K",
				"15K-20K": "15K-20K",
				"20K-40K": "20K-40K",
				"40K+": "40K+"
			}
		};
	},
	methods: {
		submit() {
			this.$refs.jobSaveButton.startLoading();

			this.job._method = "put";

			this.$inertia
				.post(this.route("admin.jobs.update", this.post.uuid), this.job)
				.then(() => {
					this.$refs.jobSaveButton.stopLoading();

					// if (Object.keys(this.$page.errors).length === 0) {
					// 	// this.form.photo = null;
					// 	// this.form.password = null;
					// }
				})
				.catch(() => {
					this.$refs.jobSaveButton.stopLoading();
				});
		},

		deleteCompanyLogo(uuid) {
			if (confirm("Are you sure you want to delete this logo?")) {
				this.$inertia.delete(
					this.route("admin.companies.deletelogo", uuid)
				);
			}
		}

		// getDate(date) {
		// 	const date = new Date(date);

		// 	const day = date.getDate();
		// 	const month = date.getMonth() + 1;
		// 	const year = date.getFullYear();

		// 	return `${day}/${month}/${year}`;
		// }
	}
};
</script>

<style>
.vue-file-agent .file-preview-wrapper:before {
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
}

#profile-pic-demo .drop-help-text {
	display: none;
}
#profile-pic-demo .is-drag-over .drop-help-text {
	display: block;
}
#profile-pic-demo .profile-pic-upload-block {
	border: 2px dashed transparent;
	padding: 20px;
	padding-top: 0;
}

#profile-pic-demo .is-drag-over.profile-pic-upload-block {
	border-color: #aaa;
}
#profile-pic-demo .vue-file-agent {
	width: 180px;
	float: left;
	margin: 0 15px 5px 0;
	border: 0;
	box-shadow: none;
}
</style>