<template>
	<layout>
		<div class="bg-white px-4 pt-6 pb-4 relative shadow-sm z-20">
			<div class="max-w-6xl mx-auto">
				<link-to to="/admin/companies" class="mb-2">
					<icon name="chevron-left" class="-ml-2"></icon>Back to Companies
				</link-to>
				<div class="flex w-full justify-between items-center">
					<div class="flex-1">
						<heading size="heading">Create New Company</heading>
					</div>
					<div>
						<loading-button
							size="small"
							ref="companySaveButton"
							class="mt-2 md:mt-0"
							@click="saveJobPost"
						>Save Company</loading-button>
					</div>
				</div>
			</div>
		</div>

		<div class="py-10 px-4">
			<div class="max-w-6xl mx-auto">
				<div class="md:flex -mx-4">
					<div class="md:w-1/3 px-4">
						<heading size="large" class="mb-1">Company Details</heading>
						<heading
							class="mb-4"
						>Good bio of the company helps in gaining job seekers interested in applying.</heading>
					</div>
					<div class="md:w-2/3 px-4">
						<card>
							<div class="mb-4 h-30">
								<file-input
									v-model="form.company_logo"
									label="Company Logo"
									:errors="errors['company_logo']"
								></file-input>
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
import EmptyState from "@/Shared/tuis/EmptyState";

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
		EmptyState
	},
	props: ["industries", "errors"],
	data() {
		return {
			form: {
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
			}
		};
	},
	methods: {
		saveJobPost() {
			this.$refs.companySaveButton.startLoading();

			var data = new FormData();

			data.append("company_logo", this.form.company_logo || "");
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

			this.$inertia
				.post(this.route("admin.companies.store"), data)
				.then(() => {
					this.$refs.companySaveButton.stopLoading();
				})
				.catch(() => {
					this.$refs.companySaveButton.stopLoading();
				});
		}
	}
};
</script>