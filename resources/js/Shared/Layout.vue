<template>
	<main class="flex w-100 flex-col min-h-screen">
		<div class="bg-white px-4 relative z-30" :class="{'shadow-sm' : !isUrl('')}">
			<div class="md:flex items-center justify-between mx-auto max-w-6xl">
				<div class="flex justify-between md:flex-none items-center">
					<inertia-link href="/" class="flex items-center py-2">
						<img src="/jh-logo.svg" alt="jh" class="h-10" />
					</inertia-link>

					<div
						class="inline-block inline-flex items-center justify-center w-16 h-16 rounded-full mr-2 cursor-pointer md:hidden"
						@click="showNavbar = !showNavbar"
						:class="{'hamburger-active': showNavbar == true}"
					>
						<svg
							class="hamburger fill-current text-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							width="150"
							height="150"
							viewBox="0 0 200 200"
						>
							<g stroke-width="6.5" stroke-linecap="round">
								<path d="M72 82.286h28.75" fill="#009100" fill-rule="evenodd" stroke="#718096" />
								<path
									d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
									fill="none"
									stroke="#718096"
								/>
								<path d="M72 125.143h28.75" fill="#009100" fill-rule="evenodd" stroke="#718096" />
								<path
									d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
									fill="none"
									stroke="#718096"
								/>
								<path d="M100.75 82.286h28.75" fill="#009100" fill-rule="evenodd" stroke="#718096" />
								<path d="M100.75 125.143h28.75" fill="#009100" fill-rule="evenodd" stroke="#718096" />
							</g>
						</svg>
					</div>
				</div>

				<div class="hidden md:block">
					<inertia-link
						v-if="$page.auth.user"
						href="/dashboard"
						:class="isUrl('dashboard') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="mr-6 py-6 inline-block font-medium hover:text-blue-600"
					>Dashboard</inertia-link>
					<inertia-link
						href="/jobs"
						:class="isUrl('jobs') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="mr-6 py-6 inline-block font-medium hover:text-blue-600"
					>Job Listings</inertia-link>
					<inertia-link
						href="/categories"
						:class="isUrl('categories') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="mr-6 py-6 inline-block font-medium hover:text-blue-600"
					>Categories</inertia-link>

					<inertia-link
						href="/for-employers"
						:class="isUrl('for-employers') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="py-6 mr-6 inline-block font-medium hover:text-blue-600"
					>For Employers</inertia-link>

					<inertia-link
						href="/about"
						:class="isUrl('about') ? 'menu-active text-blue-600' : 'text-gray-600'"
						class="py-6 inline-block font-medium hover:text-blue-600"
					>About</inertia-link>
				</div>

				<div class="hidden md:block">
					<template v-if="$page.auth.user">
						<dropdown>
							<template #trigger>
								<div class="flex items-center">
									<div
										class="outline-none block inline-flex items-center justify-center h-10 w-10 overflow-hidden rounded-full shadow-inner bg-gray-500 text-white font-bold text-xl"
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
									<inertia-link
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										href="/admin/jobs"
									>Job Posts</inertia-link>

									<inertia-link
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										href="#"
									>Notifications</inertia-link>
									<inertia-link
										class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
										href="/settings"
									>Settings</inertia-link>

									<div class="border-t my-1 border-gray-200"></div>

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
						<inertia-link
							href="/login"
							class="px-4 py-5 mr-3 inline-block font-medium text-gray-600 hover:text-blue-600"
						>Login</inertia-link>
						<loading-button tag="a" to="/register" size="small" rounded="large">Post a Job</loading-button>
					</template>
				</div>
			</div>

			<transition-expand>
				<div class="md:hidden mt-1" v-if="showNavbar">
					<inertia-link
						href="/"
						:class="isUrl('/') ? 'text-blue-600' : 'text-gray-600'"
						class="border-t px-2 py-3 block font-medium hover:text-blue-600"
					>Home</inertia-link>
					<inertia-link
						v-if="$page.auth.user"
						href="/dashboard"
						:class="isUrl('dashboard') ? 'text-blue-600' : 'text-gray-600'"
						class="border-t px-2 py-3 block font-medium hover:text-blue-600"
					>Dashboard</inertia-link>

					<inertia-link
						href="/jobs"
						:class="isUrl('jobs') ? 'text-blue-600' : 'text-gray-600'"
						class="border-t px-2 py-3 block font-medium hover:text-blue-600"
					>Jobs Listing</inertia-link>

					<inertia-link
						href="/categories"
						:class="isUrl('categories') ? 'text-blue-600' : 'text-gray-600'"
						class="border-t px-2 py-3 block font-medium hover:text-blue-600"
					>Categories</inertia-link>

					<inertia-link
						href="/for-employers"
						:class="isUrl('for-employers') ? 'text-blue-600' : 'text-gray-600'"
						class="border-t px-2 py-3 block font-medium hover:text-blue-600"
					>For Employers</inertia-link>

					<inertia-link
						href="/about"
						:class="isUrl('about') ? 'text-blue-600' : 'text-gray-600'"
						class="border-t px-2 py-3 block font-medium hover:text-blue-600"
					>About Jobs Harbour</inertia-link>

					<div class="flex items-center py-2 border-t" v-if="$page.auth.user">
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
							<inertia-link
								href="/login"
								:class="isUrl('login') ? 'text-blue-600' : 'text-gray-600'"
								class="px-2 py-3 block font-medium hover:text-blue-600"
							>Login</inertia-link>
						</div>
						<div class="flex-1 text-center">
							<inertia-link
								href="/register"
								:class="isUrl('register') ? 'text-blue-600' : 'text-gray-600'"
								class="px-2 py-3 block font-medium hover:text-blue-600"
							>Create free account</inertia-link>
						</div>
					</div>
				</div>
			</transition-expand>
		</div>

		<article class="flex-1">
			<slot />
		</article>

		<div class="px-4 py-16 bg-white border-b-8 border-blue-600">
			<div class="max-w-6xl mx-auto">
				<div class="flex flex-wrap md:flex-1 -mx-4">
					<div class="w-1/2 md:w-2/5 px-4 mb-6">
						<img src="/jh-logo.svg" alt="jh" />
					</div>

					<div class="w-1/2 md:w-1/5 px-4 mb-6">
						<heading class="mb-3" size="small-caps">About</heading>
						<inertia-link href="/about" class="block text-sm mb-2 hover:text-blue-600">About us</inertia-link>
						<inertia-link
							href="/for-employers"
							class="block text-sm mb-2 hover:text-blue-600"
						>For Employers</inertia-link>
						<inertia-link
							href="/advertise"
							class="block text-sm mb-2 hover:text-blue-600"
						>Advertise with us</inertia-link>
						<inertia-link href="/faq" class="block text-sm mb-2 hover:text-blue-600">FAQ</inertia-link>
					</div>

					<div class="w-1/2 md:w-1/5 px-4 mb-6">
						<heading class="mb-3" size="small-caps">Resources</heading>
						<mail-to
							to="support@jobsharbour.com"
							subject="I am inquiring about"
							class="block text-sm mb-2 hover:text-blue-600"
							:styled="false"
						>Support</mail-to>
						<inertia-link href="/privacy" class="block text-sm mb-2 hover:text-blue-600">Privacy</inertia-link>
						<inertia-link href="/terms" class="block text-sm mb-2 hover:text-blue-600">Terms of Service</inertia-link>
						<inertia-link
							href="/refund"
							class="block text-sm mb-2 hover:text-blue-600"
						>Refund & Cancellation</inertia-link>
					</div>

					<div class="w-1/2 md:w-1/5 px-4 mb-6">
						<heading class="mb-3" size="small-caps">Get Connected</heading>
						<a
							href="https://www.facebook.com/Jobs-Harbour-108378050599646"
							class="block text-sm mb-2 hover:text-blue-600 flex"
						>
							<div class="p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2">
								<icon name="facebook" class="w-4 h-4"></icon>
							</div>Facebook
						</a>
						<a
							href="https://www.linkedin.com/company/jobs-harbour"
							class="block text-sm mb-2 hover:text-blue-600 flex"
						>
							<div class="p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2">
								<icon name="linkedin" class="w-4 h-4"></icon>
							</div>LinkedIn
						</a>
						<a
							href="https://www.instagram.com/jobsharbour"
							class="block text-sm mb-2 hover:text-blue-600 flex"
						>
							<div class="p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2">
								<icon name="instagram" class="w-4 h-4"></icon>
							</div>Instagram
						</a>
						<a
							href="https://twitter.com/jobs_harbour"
							class="block text-sm mb-2 hover:text-blue-600 flex"
						>
							<div class="p-1 rounded-full bg-gray-400 hover:bg-blue-600 text-white mr-2">
								<icon name="twitter" class="w-4 h-4"></icon>
							</div>Twitter
						</a>
					</div>
				</div>

				<div class="pt-8 border-t border-gray-200 text-sm md:flex md:justify-between">
					<div>
						Made with
						<span class="text-red-600">&hearts;</span> in Guwahati
						<br />&copy; 2019 Jobs Harbour. All rights reserved.
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
import MailTo from "@/Shared/tuis/MailTo";
import TextInput from "@/Shared/tuis/TextInput";
import Icon from "@/Shared/tuis/Icon";
import TransitionExpand from "@/Shared/tuis/TransitionExpand";

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
		MailTo,
		Icon,
		TransitionExpand
	},

	props: {
		title: String,
		description: String,
		keywords: String
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
		},

		title: {
			immediate: true,
			handler(title) {
				document.title = title
					? `${title} - Jobs Harbour`
					: "Jobs Harbour";
			}
		}

		// description: {
		// 	immediate: true,
		// 	handler(description) {
		// 		var link = document.createElement("meta");
		// 		link.setAttribute("name", "description");
		// 		link.content = description
		// 			? description
		// 			: "Jobs Harbour is an online web based job listing site for both employers and job seekers. Its primary goal is to provide you upto date job information from all around Assam and the Northeast.";
		// 		document.getElementsByTagName("head")[0].appendChild(link);
		// 	}
		// }
	},

	methods: {
		isUrl(...urls) {
			if (urls[0] === "") {
				return location.pathname.substr(1) === "";
			}

			return urls.filter(
				url =>
					// location.pathname.substr(1).startsWith(url)
					location.pathname.substr(1) == url
			).length;
		}
	}
};
</script>