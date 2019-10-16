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
					<heading size="heading2" class="mb-2 text-center">Reset Password</heading>
					<heading
						class="mb-10 text-center"
					>Enter your registered email address below and we'll send you instructions on how to retrieve your password.</heading>

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

						<loading-button ref="submitButton" class="w-full" type="submit">Send Instructions</loading-button>
					</form>
					<heading class="mt-4 text-center">
						Remember the password?
						<link-to to="/login">Log in</link-to>
					</heading>
					<alert
						variant="success"
						v-if="emailSent"
						class="mt-5"
					>Instructions has been sent to your email on how to reset your password.</alert>
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

	props: ["errors"],

	data() {
		return {
			form: {
				email: null
			},
			emailSent: false
		};
	},

	methods: {
		submit() {
			this.$refs.submitButton.startLoading();

			this.$inertia
				.post(this.route("password.email"), this.form)
				.then(() => {
					this.$refs.submitButton.stopLoading();

					if (Object.keys(this.$page.errors).length === 0) {
						this.form.email = null;
						this.emailSent = true;

						this.$snack.success("Password reset instructions sent");
					}
				});
		}
	}
};
</script>

 