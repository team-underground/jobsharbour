<template>
	<main class="flex w-100 flex-col min-h-screen">
		<div class="bg-white shadow-sm px-4 relative z-30">
			<div class="md:flex items-center justify-between mx-auto max-w-6xl">
				<div class="flex justify-between md:flex-none items-center">
					<a href="/" class="flex items-center py-2">
						<span class="font-bold text-xl text-blue-600">
							Jobs
							<span class="text-gray-800">Harbour</span>
						</span>
						<!-- <img src="/logo.jpg" alt="mcl" width="150" /> -->
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
						v-if="$page.auth.user"
						href="/dashboard"
						:class="isUrl('dashboard') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="mr-6 py-6 inline-block font-medium hover:text-blue-600"
					>Dashboard</a>
					<a
						href="/jobs"
						:class="isUrl('jobs') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="mr-6 py-6 inline-block font-medium hover:text-blue-600"
					>Job Listings</a>
					<a
						href="/categories"
						:class="isUrl('categories') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="mr-6 py-6 inline-block font-medium hover:text-blue-600"
					>Categories</a>

					<a
						href="/for-employers"
						:class="isUrl('for-employers') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="py-6 mr-6 inline-block font-medium hover:text-blue-600"
					>For Employers</a>

					<a
						href="/about"
						:class="isUrl('about') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="py-6 inline-block font-medium hover:text-blue-600"
					>About</a>
				</div>

				<div class="hidden md:block">
					<template v-if="$page.auth.user">
						<dropdown>
							<template #trigger>
								<div class="flex items-center">
									<div
										class="outline-none block inline-flex items-center justify-center h-10 w-10 overflow-hidden rounded-full shadow-inner bg-blue-600 text-white font-bold text-xl"
									>{{ $page.auth.user.name.charAt(0) }}</div>
									<div class="text-left ml-2">
										<span class="text-sm leading-tight block w-32 truncate">{{ $page.auth.user.name }}</span>
										<span
											class="leading-tight text-gray-400 block text-xs uppercase tracking-wider font-semibold"
										>{{ $page.auth.user.type }}</span>
									</div>
								</div>
							</template>
							<template #dropdown>
								<div
									class="mt-2 bg-white rounded-lg border-t border-gray-100 w-48 py-1 shadow-lg overflow-hidden"
								>
									<a
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										href="#"
									>Notifications</a>
									<a
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										href="#"
									>Settings</a>
									<a
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										href="#"
									>Help & Feedback</a>
									<div class="border-t my-1 border-gray-200"></div>
									<!-- <a
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										href="#"
									>Admin Panel</a>-->

									<inertia-link
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										:href="route('logout')"
										method="post"
									>Logout</inertia-link>
								</div>
							</template>
						</dropdown>
					</template>
					<template v-else>
						<a
							href="/login"
							class="px-4 py-5 mr-3 inline-block font-medium text-gray-600 hover:text-blue-600"
						>Login</a>
						<loading-button tag="a" to="/register" size="small" rounded="large">Post a Job</loading-button>
					</template>
				</div>
			</div>

			<div class="md:hidden" v-if="showNavbar">
				<a
					href="/"
					:class="isUrl('/') ? 'text-blue-600' : 'text-gray-600'"
					class="border-t px-2 py-3 block font-medium"
				>Home</a>
				<a
					href="/dashboard"
					:class="isUrl('dashboard') ? 'text-blue-600' : 'text-gray-600'"
					class="border-t px-2 py-3 block font-medium hover:text-blue-600"
				>Dashboard</a>

				<a
					href="/jobs"
					:class="isUrl('jobs') ? 'text-blue-600' : 'text-gray-600'"
					class="border-t px-2 py-3 block font-medium hover:text-blue-600"
				>Jobs Listing</a>

				<a
					href="/categories"
					:class="isUrl('about') ? 'text-blue-600' : 'text-gray-600'"
					class="border-t px-2 py-3 block font-medium hover:text-blue-600"
				>Categories</a>

				<a
					href="/for-employers"
					:class="isUrl('for-employers') ? 'text-blue-600' : 'text-gray-600'"
					class="border-t px-2 py-3 block font-medium hover:text-blue-600"
				>For Employers</a>

				<a
					href="/about"
					:class="isUrl('about') ? 'text-blue-600' : 'text-gray-600'"
					class="border-t px-2 py-3 block font-medium hover:text-blue-600"
				>About Jobs Harbour</a>

				<div class="flex items-center py-2" v-if="$page.auth.user">
					<div class="flex flex-1">
						<div
							class="outline-none block inline-flex items-center justify-center h-10 w-10 overflow-hidden rounded-full shadow-inner bg-blue-600 text-white font-bold text-xl"
						>{{ $page.auth.user.name.charAt(0) }}</div>
						<div class="text-left ml-2">
							<span class="text-sm leading-tight block w-32 truncate">{{ $page.auth.user.name }}</span>
							<span
								class="leading-tight text-gray-400 block text-xs uppercase tracking-wider font-semibold"
							>{{ $page.auth.user.type }}</span>
						</div>
					</div>
					<div class="w-24 px-4">
						<inertia-link
							class="block px-4 py-2 text-gray-600 hover:text-blue-600"
							:href="route('logout')"
							method="post"
						>Logout</inertia-link>
					</div>
				</div>

				<div class="border-t flex" v-else>
					<div class="flex-1 border-r text-center">
						<a
							href="/login"
							:class="isUrl('login') ? 'text-blue-600' : 'text-gray-600'"
							class="px-2 py-3 block font-medium"
						>Login</a>
					</div>
					<div class="flex-1 text-center">
						<a
							href="/register"
							:class="isUrl('register') ? 'text-blue-600' : 'text-gray-600'"
							class="px-2 py-3 block font-medium"
						>Create free account</a>
					</div>
				</div>
			</div>
		</div>

		<article class="flex-1">
			<slot />
		</article>

		<div class="px-4 lg:px-6 py-10 bg-white border-b-8 border-blue-600">
			<div class="max-w-6xl mx-auto">
				<div class="flex flex-wrap md:flex-1 -mx-4">
					<div class="md:w-2/4 px-4 mb-6">
						<span class="font-bold text-xl text-blue-600">
							Jobs
							<span class="text-gray-800">Harbour</span>
						</span>
					</div>

					<div class="w-1/2 md:w-1/4 px-4 mb-6">
						<heading class="mb-3" size="small-caps">Help</heading>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">About</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">For Employers</a>
						<a href="#" class="block text-sm mb-2 hover:text-gray-500">Support</a>
						<a href="/faq" class="block text-sm mb-2 hover:text-gray-500">FAQ</a>
						<a href="/advertise" class="block text-sm mb-2 hover:text-gray-500">Advertise with us</a>
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

				<div class="pt-8 border-t border-gray-200 text-sm md:flex md:justify-between">
					<div>&copy; 2019 Jobs Harbour. All rights reserved.</div>
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
.menu-active {
	position: relative;
}
.menu-active:after {
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
 