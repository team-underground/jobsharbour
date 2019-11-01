<template>
	<layout>
		<form @submit.prevent="submit">
			<div class="bg-white px-4 pt-6 py-4">
				<div class="max-w-6xl mx-auto">
					<link-to to="/admin/companies" class="mb-2">
						<icon name="chevron-left" class="-ml-2"></icon>Back to Companies
					</link-to>

					<div class="md:flex items-center">
						<div class="flex-1">
							<heading size="heading">Edit Company Details</heading>
						</div>
						<div class="flex">
							<loading-button type="submit" size="small" ref="jobSaveButton">Update Company</loading-button>

							<loading-button type="button" size="small" variant="danger" variant-type="outline">
								<icon name="trash"></icon>
							</loading-button>
						</div>
					</div>
				</div>
			</div>

			<div class="py-10">
				<div class="max-w-6xl mx-auto">
					<div class="md:flex -mx-4">
						<div class="md:w-1/3 px-4">
							<heading size="large" class="mb-1">Company Details</heading>
							<heading
								class="mb-4"
							>Basic details of the company helps in gaining job seekers interested in applying.</heading>
						</div>
						<div class="md:w-2/3 px-4">
							<card>
								<div class="mb-4 h-30" v-if="company.company_logo == null">
									<file-input
										v-model="form.company_photo"
										label="Company Logo"
										:errors="errors['company_logo']"
									></file-input>
								</div>

								<div class="mb-4" v-else>
									<label class="block mb-1 font-semibold text-gray-700">Company Logo</label>
									<div class="flex items-center">
										<div
											class="w-24 h-24 p-2 items-center justify-center rounded-full inline-flex bg-gray-100 mr-5 text-gray-400 shadow-inner"
										>
											<img
												:src="company.company_logo_path"
												:alt="company.company_name"
												class="w-24 h-24 object-contain rounded-full border border-gray-100"
											/>
										</div>
										<div>
											<button
												type="button"
												class="rounded-lg px-5 py-2 bg-red-100 hover:bg-red-200 text-sm font-medium text-red-600"
												@click="deleteCompanyLogo(company.uuid)"
											>Delete</button>
										</div>
									</div>
								</div>

								<text-input
									v-model="form.company_name"
									label="Name"
									placeholder="eg. ABC Company"
									class="mb-4"
									:errors="errors['company_name']"
									@keydown="delete errors['company_name']"
								></text-input>
								<text-input
									v-model="form.company_website"
									label="Website"
									placeholder="eg. http://google.com"
									class="mb-4"
									:errors="errors['company_website']"
									@keydown="delete errors['company_website']"
								></text-input>
								<div class="flex -mx-4">
									<div class="w-1/2 px-4">
										<select-input
											v-model="form.company_industry"
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
											v-model="form.company_no_of_employees"
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
									v-model="form.company_description"
									placeholder="Brief description of the company..."
									class="mb-4"
									:errors="errors['company_description']"
									@keydown="delete errors['company_description']"
								></textarea-input>
								<text-input
									v-model="form.company_benefits"
									label="Benefits"
									placeholder="eg. Laptop, Free Lunch, Flexible holidays..."
									class="mb-4"
									:errors="errors['company_benefits']"
									@keydown="delete errors['company_benefits']"
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
		FileInput
	},
	props: ["industries", "errors", "company"],
	data() {
		return {
			form: {
				company_id: null,
				company_photo: null,
				company_name: this.company.company_name,
				company_website: this.company.company_website,
				company_no_of_employees: this.company.company_no_of_employees,
				company_industry: this.getKeyByValue(
					this.industries,
					this.company.company_industry
				),
				company_description: this.company.company_description,
				company_benefits: this.company.company_benefits
			},
			companySize: {
				"0-25": "0-25",
				"25-50": "25-50",
				"50-100": "50-100",
				"100+": "100+"
			}
		};
	},
	methods: {
		getKeyByValue(obj, value) {
			return Object.keys(obj).find(key => obj[key] === value);
		},
		submit() {
			this.$refs.jobSaveButton.startLoading();

			var data = new FormData();
			data.append("company_id", this.form.company_id || "");
			data.append("company_logo", this.form.company_photo || "");
			data.append("company_name", this.form.company_name || "");
			data.append("company_website", this.form.company_website || "");
			data.append(
				"company_no_of_employees",
				this.form.company_no_of_employees || ""
			);
			data.append("company_industry", this.form.company_industry || "");
			data.append(
				"company_description",
				this.form.company_description || ""
			);
			data.append("company_benefits", this.form.company_benefits || "");
			data.append("_method", "put");

			this.$inertia
				.post(
					this.route("admin.companies.update", this.company.uuid),
					data
				)
				.then(() => {
					this.$refs.jobSaveButton.stopLoading();
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