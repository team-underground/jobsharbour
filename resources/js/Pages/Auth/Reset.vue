<template>
	<div>
		<div class="relative px-4 lg:px-6 md:py-16 lg:py-24 bg-gray-100 h-screen flex items-center">
			<div class="absolute left-0 right-0 top-0 bg-white">
				<div class="container px-4 mx-auto py-6">
					<div class="flex items-center justify-between">
						<div>
							<link-to to="/">
								<icon name="chevron-left" class="-ml-1"></icon>Back to Website
							</link-to>
						</div>
						<div>
							Don't have an account?
							<link-to to="/register">Create Account</link-to>
						</div>
					</div>
				</div>
			</div>

			<div class="max-w-lg mx-auto w-full">
				<card>
					<heading size="heading2" class="mb-8 text-center">Reset your Password</heading>

					<form @submit.prevent="submit">
						<text-input
							class="mb-4"
							with-icon
							placeholder="Email address"
							v-model="form.email"
							:errors="errors['email']"
							@keydown="delete errors['email']"
						>
							<template #icon>
								<icon name="mail" class="mt-3 ml-1 text-gray-400"></icon>
							</template>
						</text-input>

						<text-input
							type="password"
							class="mb-4"
							with-icon
							placeholder="New Password"
							v-model="form.password"
							:errors="errors['password']"
							@keydown="delete errors['password']"
						>
							<template #icon>
								<icon name="lock" class="mt-3 ml-1 text-gray-400"></icon>
							</template>
						</text-input>

						<text-input
							type="password"
							class="mb-4"
							with-icon
							placeholder="Confirm New Password"
							v-model="form.password_confirmation"
							:errors="errors['password_confirmation']"
							@keydown="delete errors['password_confirmation']"
						>
							<template #icon>
								<icon name="lock" class="mt-3 ml-1 text-gray-400"></icon>
							</template>
						</text-input>

						<loading-button ref="submitButton" class="w-full" type="submit">Reset my password</loading-button>
					</form>
					<heading class="mt-4 text-center">
						Questions? Email us at
						<link-to to="/login">help@mcl.com</link-to>
					</heading>
					<alert
						variant="success"
						v-if="emailSent"
						class="mt-5"
					>Successful password reset. You can now use your new password to log in to your account.</alert>
				</card>
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
import Icon from "@/Shared/tuis/Icon";
import Alert from "@/Shared/tuis/Alert";

export default {
	components: {
		Layout,
		Card,
		Heading,
		LinkTo,
		LoadingButton,
		TextInput,
		Icon,
		Alert
	},

	props: ["errors", "token", "email"],

	data() {
		return {
			form: {
				email: this.email,
				password: null,
				password_confirmation: null,
				token: this.token
			},
			emailSent: false
		};
	},

	methods: {
		submit() {
			this.$refs.submitButton.startLoading();

			this.$inertia
				.post(this.route("password.update"), this.form)
				.then(() => {
					this.$refs.submitButton.stopLoading();

					if (Object.keys(this.$page.errors).length === 0) {
						this.form.email = null;
						this.form.password = null;
						this.form.password_confirmation = null;

						this.emailSent = true;

						this.$snack.success("Password successfully changed");
					}
				});
		}
	}
};
</script>

 