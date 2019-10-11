<template>
	<main class="flex w-100 flex-col min-h-screen">
		<div class="bg-white shadow-sm px-4 relative z-20">
			<div class="md:flex items-center justify-between mx-auto container">
				<div class="flex justify-between md:flex-none items-center">
					<a href="/" class="flex items-center py-2">
						<img src="/mcl-logo.svg" alt="mcl" class="object-fit h-8" />
					</a>

					<div
						class="inline-block inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 cursor-pointer md:hidden"
						@click="showNavbar = !showNavbar"
					>
						<svg
							class="fill-current text-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							width="30"
							height="30"
							viewBox="0 0 24 24"
						>
							<path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
						</svg>
					</div>
				</div>

				<div class="hidden md:block">
					<a
						href="/"
						:class="isUrl('') ? 'active text-blue-600' : 'text-gray-500'"
						class="px-2 mr-3 py-6 inline-block font-medium hover:text-blue-600"
					>Home</a>
					<a
						href="/jobs"
						:class="isUrl('jobs') ? 'active text-blue-600' : 'text-gray-500'"
						class="px-2 mr-3 py-6 inline-block font-medium hover:text-blue-600"
					>Job Listings</a>
					<a
						href="/tickets"
						class="px-2 mr-3 py-6 inline-block font-medium text-gray-500 hover:text-blue-600"
					>Contact</a>

					<a
						href="#"
						class="px-2 py-6 inline-block font-medium text-gray-500 hover:text-blue-600"
					>For Employers</a>
				</div>

				<div class="hidden md:block">
					<a
						href="/login"
						class="px-4 py-5 mr-3 inline-block font-medium text-gray-500 hover:text-blue-600"
					>Login</a>
					<loading-button tag="a" to="/register" size="small" rounded="large">
						<icon name="edit" class="mr-1"></icon>Post a Job
					</loading-button>
				</div>
			</div>

			<div class="md:hidden" v-if="showNavbar">
				<a href="#" class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500">Home</a>
				<a
					href="#"
					class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
				>Search</a>
				<a
					href="#"
					class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
				>Schedule</a>
				<a
					href="#"
					class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
				>Events</a>
				<a
					href="/register"
					class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
				>Sign up</a>
				<a
					href="/login"
					class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
				>Login</a>
			</div>
		</div>

		<article class="flex-1">
			<slot />
		</article>

		<div class="px-4 lg:px-6 py-10 bg-white border-b-8 border-blue-600">
			<div class="container mx-auto">
				<div class="flex flex-wrap md:flex-1 -mx-4">
					<div class="md:w-2/4 px-4 mb-6">
						<img src="/mcl-logo.svg" alt="mcl" class="object-fit h-10" />
					</div>

					<div class="w-1/2 md:w-1/4 px-4 mb-6">
						<heading class="mb-3" size="small-caps">Help</heading>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">About</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">For Employers</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">Support</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">Privacy</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">Terms of Service</a>
					</div>

					<div class="w-1/2 md:w-1/4 px-4 mb-6">
						<heading class="mb-3" size="small-caps">Get Connected</heading>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">Facebook</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">Twitter</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">Instagram</a>
					</div>
				</div>

				<div class="pt-8 border-t text-sm md:flex md:justify-between">
					<div>&copy; 2019 mycareerlist. All rights reserved.</div>
					<div>
						Made with
						<span class="text-red-600">&hearts;</span> in Guwahati
					</div>
				</div>
			</div>
		</div>
	</main>
</template>


<script>
import Card from "@/Shared/tuis/Card";
import Heading from "@/Shared/tuis/Heading";
import Dropdown from "@/Shared/tuis/Dropdown";
import BasicTable from "@/Shared/tuis/BasicTable";
import Badge from "@/Shared/tuis/Badge";
import Alert from "@/Shared/tuis/Alert";
import SearchInput from "@/Shared/tuis/SearchInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import LinkTo from "@/Shared/tuis/LinkTo";
import TextInput from "@/Shared/tuis/TextInput";
import Icon from "@/Shared/tuis/Icon";

export default {
	components: {
		Card,
		Heading,
		Dropdown,
		BasicTable,
		Badge,
		Alert,
		SearchInput,
		TextInput,
		LoadingButton,
		LinkTo,
		Icon
	},

	data() {
		return {
			showNav: false,
			showNavbar: false
		};
	},

	watch: {
		"$page.flash": {
			handler() {
				this.$snack.success(this.$page.flash.success);
			},
			deep: true
		}
	},

	methods: {
		isUrl(...urls) {
			if (urls[0] === "") {
				return location.pathname.substr(1) === "";
			}

			return urls.filter(url =>
				location.pathname.substr(1).startsWith(url)
			).length;
		}
	}
};
</script>

<style>
.active {
	position: relative;
}
.active:after {
	bottom: 0;
	position: absolute;
	left: 0;
	right: 0;
	display: block;
	margin-left: auto;
	margin-right: auto;
	content: "";
	height: 3px;
	width: 100%;
	border-radius: 1000px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	background-color: #29a7c9;
}

.overlay-black {
	position: relative;
}
.overlay-black:after {
	position: absolute;
	content: "";
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	display: block;
	height: 100%;
	background-image: -webkit-linear-gradient(
		rgba(0, 0, 0, 0.01) 0%,
		rgba(0, 0, 0, 0.1) 45%,
		rgba(0, 0, 0, 0.75) 100%
	);
	background-image: -o-linear-gradient(
		rgba(0, 0, 0, 0.01) 0%,
		rgba(0, 0, 0, 0.1) 45%,
		rgba(0, 0, 0, 0.75) 100%
	);
	background-image: linear-gradient(
		rgba(0, 0, 0, 0.01) 0%,
		rgba(0, 0, 0, 0.1) 45%,
		rgba(0, 0, 0, 0.75) 100%
	);
	z-index: 1;
}
</style>
 