<template>
	<layout>
		<div class="relative px-4 lg:px-6 md:py-16 lg:py-24 bg-gray-100 flex items-center">
			<!-- <div class="absolute left-0 right-0 top-0 bg-white">
				<div class="container px-4 mx-auto py-6">
					<div class="flex items-center justify-between">
						<div>
							<link-to to="/" tag="inertia-link">
								<icon name="chevron-left" class="-ml-1"></icon>Back to Website
							</link-to>
						</div>
						<div>
							Don't have an account?
							<link-to to="/register" tag="inertia-link">Create Account</link-to>
						</div>
					</div>
				</div>
			</div>-->

			<div class="max-w-lg mx-auto w-full">
				<card class="shadow-lg">
					<alert
						class="mb-8"
						v-if="$page.flash.resent"
					>A fresh verification link has been sent to your email address.</alert>
					<heading
						size="large"
						class="mb-8 text-center"
					>Before proceeding, please check your email for a verification link</heading>
					<div class="mt-4 text-center">
						If you did not receive the email,
						<link-to tag="a" @click="submit" class="cursor-pointer">click here to request another</link-to>
					</div>
				</card>
			</div>
		</div>
	</layout>
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
			// this.$refs.submitButton.startLoading();

			this.$inertia.post(this.route("verification.resend")).then(() => {
				// this.$refs.submitButton.stopLoading();
				// if (Object.keys(this.$page.errors).length === 0) {
				// 	this.form.email = null;
				// 	this.form.password = null;
				// 	this.form.password_confirmation = null;
				// 	this.emailSent = true;
				// 	this.$snack.success("Password successfully changed");
				// }
			});
		}
	}
};
</script>