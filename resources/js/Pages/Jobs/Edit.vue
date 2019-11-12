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
							<heading size="heading" class="inline-flex mr-1">Edit Job Post #{{ post.job_id }}</heading>
							<badge
								variant="success"
								v-if="post.job_status === 'Published'"
								class="ml-3"
							>{{ post.job_status }}</badge>
							<badge variant="warning" v-if="post.job_status === 'Moderation'">{{ post.job_status }}</badge>
						</div>
						<div class="flex">
							<loading-button
								type="button"
								size="small"
								ref="jobPublishButton"
								variant="success"
								@click="publishJob"
								v-if="can['publish-job']"
							>Publish Post</loading-button>

							<loading-button type="submit" size="small" ref="jobSaveButton">Update Post</loading-button>

							<loading-button type="button" size="small" variant="danger" variant-type="outline">
								<icon name="trash"></icon>
							</loading-button>
						</div>
					</div>
				</div>
			</div>
			<div class="py-10">
				<div class="max-w-6xl mx-auto px-4">
					<div class="md:flex mb-10 -mx-4">
						<div class="md:w-1/3 mb-3 px-4 md:px-0">
							<heading size="large" class="mb-1">Job Details</heading>
							<heading
								class="mb-4"
							>Introduce job seekers to the role by describing responsibilities, skills and technologies...</heading>
						</div>
						<div class="md:w-2/3 px-4">
							<card>
								<text-input
									v-model="post.job_id"
									label="Job ID"
									class="mb-4"
									readonly
									disabled
									:bordered="false"
								></text-input>
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
								<div class="flex flex-wrap -mx-4">
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
									<div class="w-1/2 px-4">
										<select-input
											v-model="job.job_category"
											label="Category"
											class="mb-4"
											:options="categories"
											:errors="errors['job_category']"
											@keydown="delete errors['job_category']"
										>
											<option value="null" disabled>Select job category</option>
										</select-input>
									</div>
									<div class="w-1/2 px-4">
										<select-input
											v-model="job.job_experience_level"
											label="Experience Level"
											class="mb-4"
											:options="experiencelevels"
											:errors="errors['job_experience_level']"
											@keydown="delete errors['job_experience_level']"
										>
											<option value="null" disabled>Select experience level</option>
										</select-input>
									</div>
								</div>

								<text-input
									v-model="job.job_email"
									type="email"
									label="Email for candidate"
									placeholder="Email address where job seekers send their resume..."
									class="mb-4"
									:errors="errors['job_email']"
									@keydown="delete errors['job_email']"
								></text-input>

								<tags-input label="Skills" v-model="job.job_skills" class="mb-4"></tags-input>

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

					<div class="md:flex mb-10 -mx-4">
						<div class="md:w-1/3 px-4">
							<heading size="large" class="mb-1">Job Post Dates</heading>
							<heading
								class="mb-4"
							>The date when the job post will start appear in the site & closed for applying.</heading>
						</div>
						<div class="md:w-2/3 px-4">
							<card>
								<div class="flex flex-wrap -mx-4">
									<div class="w-1/2 px-4">
										<date-input
											label="Job Opening Date"
											class="w-48 mb-4"
											placeholder="Select date"
											v-model="job.job_starting_date"
											readonly
										></date-input>
									</div>
									<div class="w-1/2 px-4">
										<date-input
											label="Job Closing Date"
											class="w-48"
											placeholder="Select date"
											v-model="job.job_closing_date"
											readonly
										></date-input>
									</div>
								</div>
							</card>
						</div>
					</div>

					<div class="md:flex -mx-4">
						<div class="md:w-1/3 px-4">
							<heading size="large" class="mb-1">SEO Content</heading>
							<heading class="mb-4">Write great content optimized for SEO</heading>
							<alert class="my-6" v-if="!can['update-job-seo']" :with-icon="false">
								You can not update your seo content when the jobpost is published. For further information contact our
								<mail-to>support team</mail-to>.
							</alert>
						</div>
						<div class="md:w-2/3 px-4">
							<card>
								<textarea-input
									label="Meta Description"
									class="mb-4"
									placeholder="eg. Ability to write code – HTML & CSS (SCSS flavor of SASS preferred when writing CSS)Proficient in Photoshop, Illustrator, bonus points for familiarity with Sketch (Sketch is our preferred concepting)Cross-browser and platform testing as standard practiceExperience using Invision a plusExperience in video production a plus or, at a minimum, a willingness to learn"
									v-model="job.meta_description"
									:readonly="!can['update-job-seo']"
								></textarea-input>
								<tags-input
									label="Meta Keywords"
									v-model="job.meta_keywords"
									class="mb-4"
									:disabled="!can['update-job-seo']"
								></tags-input>
								<text-input
									label="SEO Title"
									class="mb-4"
									placeholder="eg. Senior web developer in guwahati"
									v-model="job.seo_title"
									:readonly="!can['update-job-seo']"
								></text-input>
							</card>
						</div>
					</div>
				</div>
			</div>
		</form>
	</layout>
</template>

<script>
const MailtoUI = require("mailtoui/dist/mailtoui-min.js");

import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Icon from "@/Shared/tuis/Icon";
import LinkTo from "@/Shared/tuis/LinkTo";
import MailTo from "@/Shared/tuis/MailTo";
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
import Badge from "@/Shared/tuis/Badge";

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
		TagsInput,
		Badge,
		MailTo
	},
	props: [
		"jobtypes",
		"categories",
		"industries",
		"errors",
		"post",
		"companies",
		"can",
		"experiencelevels"
	],

	mounted() {
		MailtoUI.run();
	},

	data() {
		return {
			job: {
				company_id: this.post.company_id,
				job_title: this.post.job_title,
				job_location: this.post.job_location,
				job_category: this.getKeyByValue(
					this.categories,
					this.post.job_category
				),
				job_experience_level: this.getKeyByValue(
					this.experiencelevels,
					this.post.job_experience_level
				),
				job_type: this.getKeyByValue(this.jobtypes, this.post.job_type),
				job_salary: this.post.job_salary,
				job_skills: this.post.job_skills,
				job_email: this.post.job_email,
				job_description: this.post.job_description,
				job_starting_date: this.post.job_starting_date,
				job_closing_date: this.post.job_closing_date,
				seo_title: this.post.seo_title,
				meta_description: this.post.meta_description,
				meta_keywords: this.post.meta_keywords
			},
			salaries: {
				"10k-15k": "10k-15k",
				"15k-20k": "15k-20k",
				"20k-40k": "20k-40k",
				"40k+": "40k+"
			}
		};
	},
	methods: {
		getKeyByValue(obj, value) {
			return Object.keys(obj).find(key => obj[key] == value);
		},
		submit() {
			let data = {};
			if (!this.can["update-job-seo"]) {
				let {
					meta_keywords,
					seo_title,
					meta_description,
					...updatedJobPost
				} = this.job;
				data = updatedJobPost;
			} else {
				data = this.job;
			}
			this.$refs.jobSaveButton.startLoading();

			data._method = "put";

			this.$inertia
				.post(this.route("admin.jobs.update", this.post.uuid), data)
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

		publishJob() {
			this.$refs.jobPublishButton.startLoading();

			this.$inertia
				.post(this.route("admin.jobs.publish", this.post.uuid), {
					_method: "post"
				})
				.then(() => {
					this.$refs.jobPublishButton.stopLoading();
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