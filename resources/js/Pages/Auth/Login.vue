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

			<div class="max-w-md mx-auto w-full">
				<card>
					<heading size="heading2" class="mb-1 text-center">Employers Login</heading>
					<heading class="mb-6 text-center" size="small">Please enter your email and password to continue</heading>

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

						<div class="relative">
							<text-input
								type="password"
								class="mb-2"
								with-icon
								placeholder="Password"
								v-model="form.password"
								:errors="errors['password']"
								@keydown="delete errors['password']"
							>
								<template #icon>
									<icon name="lock" class="mt-3 ml-1 text-gray-400"></icon>
								</template>
							</text-input>
						</div>

						<div class="text-right">
							<link-to to="/password/reset" class="mb-4 text-sm">Forgot Password?</link-to>
						</div>
						<loading-button ref="submitButton" class="w-full" type="submit">Sign in</loading-button>
						<div class="flex my-5 items-center">
							<div class="flex-1 h-1 border-b"></div>
							<div class="w-2 mx-5 text-center">or</div>
							<div class="flex-1 h-1 border-b"></div>
						</div>
						<div class="mt-4">
							<loading-button tag="a" to="login/LinkedIn" ref="submitButton" class="w-full ButtonLinkedIn">
								<icon class="mr-2" name="linkedin"></icon>Sign in with LinkedIn
							</loading-button>
						</div>
					</form>
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

export default {
	components: {
		Layout,
		Card,
		Heading,
		LinkTo,
		LoadingButton,
		TextInput,
		Icon
	},

	props: ["errors"],

	data() {
		return {
			form: {
				email: null,
				password: null
			}
		};
	},

	methods: {
		submit() {
			this.$refs.submitButton.startLoading();

			this.$inertia
				.post(this.route("login.attempt"), this.form)
				.then(() => {
					this.$refs.submitButton.stopLoading();
				});
		}
	}
};
</script>

<style>
.ButtonLinkedIn {
	background-color: #0073b0;
	border: none;
}
.ButtonLinkedIn:hover {
	background-color: #026097 !important;
}
</style>
 