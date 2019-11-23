<template>
	<div>
		<div class="relative flex bg-white min-h-screen">
			<div class="hidden md:block w-1/4 bg-gray-200 relative">
				<img src="/bg2.jpg" alt="bg" class="object-cover object-right h-full w-full" />

				<div class="absolute top-0 left-0 right-0 w-full p-8">
					<p
						class="text-white text-2xl italic mb-4 tracking-tight"
					>It does not matter how slowly you go as long as you do not stop.</p>
					<p class="text-gray-100 italic">&mdash; Confucius</p>
				</div>
			</div>
			<div class="flex-1">
				<div class="flex justify-between md:justify-end items-center py-4 px-8 md:pr-8">
					<inertia-link href="/" class="md:hidden">
						<img src="/jh-logo.svg" alt="jh" width="140" />
					</inertia-link>
					<div>
						<link-to to="/">
							<icon name="chevron-left" class="-ml-2"></icon>Back to Website
						</link-to>
					</div>
				</div>
				<div class="max-w-xl mx-auto w-full pt-2 pb-8">
					<div class="px-8">
						<heading size="heading2" class="mb-1">Start Hiring Now. It's free.</heading>
						<heading class="mb-6">
							Already have an account.
							<link-to to="/login">Log in to continue</link-to>
						</heading>

						<form @submit.prevent="submit">
							<div class="mb-4">
								<radio-input
									classes="border-2 p-3 rounded-lg"
									label="Select Organization type"
									v-model="form.type"
									:options="organizationOptions"
									name="organization"
									:stacked="false"
									size="large"
								>
									<template slot-scope="option">
										<div class="flex">
											<div class="pl-2 w-32">
												<h5 class="text-gray-700">{{ option.row.label }}</h5>
											</div>
										</div>
									</template>
								</radio-input>
							</div>

							<text-input
								v-model="form.name"
								label="Full Name"
								class="mb-4"
								placeholder="eg. John Rambo"
								:errors="errors['name']"
								@keydown=" delete errors['name']"
							></text-input>
							<text-input
								v-model="form.email"
								label="Email"
								class="mb-4"
								placeholder="eg. john@rambo.test"
								:errors="errors['email']"
								@keydown=" delete errors['email']"
							></text-input>

							<text-input
								v-model="form.password"
								label="Password"
								type="password"
								class="mb-5"
								placeholder="Must be atleast 8 characters"
								:errors="errors['password']"
								@keydown=" delete errors['password']"
							></text-input>

							<text-input
								v-model="form.password_confirmation"
								label="Confirm Password"
								type="password"
								class="mb-5"
								placeholder="Must be atleast 8 characters"
								:errors="errors['password_confirmation']"
							></text-input>

							<alert :with-icon="false" class="my-6">
								By creating an account you agree to the
								<link-to to="/terms">Terms of Service</link-to>&nbsp;and
								<link-to to="/privacy">Privacy Policy</link-to>. You also agree to recieve product related emails from Jobs Harbour, which you can unsubscribe from at any time.
							</alert>

							<loading-button ref="submitButton" type="submit" class="w-full mb-8">Let's get started</loading-button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Card from "@/Shared/tuis/Card";
import LinkTo from "@/Shared/tuis/LinkTo";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import TextInput from "@/Shared/tuis/TextInput";
import List from "@/Shared/tuis/List";
import Alert from "@/Shared/tuis/Alert";
import RadioInput from "@/Shared/tuis/RadioInput";
import Icon from "@/Shared/tuis/Icon";

export default {
	components: {
		Layout,
		Card,
		Heading,
		LinkTo,
		LoadingButton,
		TextInput,
		List,
		Alert,
		RadioInput,
		Icon
	},

	props: ["errors"],

	data() {
		return {
			organizationOptions: [
				{ label: "Employer", value: 1 },
				{ label: "Consultancy", value: 2 }
			],
			form: {
				name: null,
				email: null,
				password: null,
				password_confirmation: null,
				type: this.getTypeParam() ? this.getTypeParam() : 1
			}
		};
	},

	methods: {
		getTypeParam() {
			let params = window.location.search;
			if (params) {
				let searchParams = new URLSearchParams(params);
				if (searchParams.has("type")) {
					let num = parseInt(searchParams.get("type"));
					if ([1, 2].includes(num)) {
						return num;
					}
					return null;
				}
			} else {
				return null;
			}
		},
		submit() {
			this.$refs.submitButton.startLoading();

			this.$inertia
				.post("/register", this.form)
				.then(response => {
					this.$refs.submitButton.stopLoading();
				})
				.catch(() => {
					this.$refs.submitButton.stopLoading();
				});
		}
	}
};
</script>

 