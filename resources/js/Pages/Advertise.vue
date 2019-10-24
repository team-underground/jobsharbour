<template>
	<layout>
		<div
			class="bg-blue-600 flex items-center justify-center bg-cover bg-center"
			style="background-image:url('/duotone.png'); height:400px;"
		>
			<div class="text-center">
				<h2 class="text-5xl text-white font-bold tracking-tight">Advertise With Us</h2>
				<p class="text-white text-lg mb-8">connect with the largest audience of active.</p>
				<loading-button
					variant="white"
					class="shadow-md"
					tag="a"
					to="#"
					v-scroll-to="'#contactform'"
				>Get Started</loading-button>
			</div>
		</div>
		<div class="py-10">
			<div class="max-w-5xl mx-auto flex flex-wrap">
				<div class="w-full md:w-1/3">
					<div class="p-2 md:p-6 m-2">
						<div
							class="w-12 h-12 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
						>
							<icon name="trending" class="w-6 h-6"></icon>
						</div>
						<heading size="large" class="mb-2">Get Quality Traffics</heading>
						<p>We have a daily traffic of more than 20,000+ users from all over North-East</p>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="p-2 md:p-6 m-2">
						<div
							class="w-12 h-12 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
						>
							<icon name="target" class="w-6 h-6"></icon>
						</div>
						<heading size="large" class="mb-2">Target Audience</heading>
						<p>Connect with the largest audience of active, influencial job creators, job seekers and workaholics</p>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="p-2 md:p-6 m-2">
						<div
							class="w-12 h-12 inline-flex justify-center items-center bg-blue-200 text-blue-800 rounded-full mb-3"
						>
							<icon name="database" class="w-6 h-6"></icon>
						</div>
						<heading size="large" class="mb-2">Drive Conversions</heading>
						<p>Put up the right deal & make it viral among our users, gain exceptional traffic leading to high conversions</p>
					</div>
				</div>
			</div>
			<div class="max-w-2xl mx-auto py-8" id="contactform">
				<heading size="heading" class="mb-8 text-center">Ready to reach our Audience? Get in Touch</heading>
				<card>
					<text-input class="mb-4" label="Name"></text-input>
					<text-input class="mb-4" label="E-mail"></text-input>
					<text-input class="mb-4" label="Phone"></text-input>
					<text-input class="mb-4" label="Company"></text-input>
					<textarea-input class="mb-4" label="How can we help?"></textarea-input>
					<loading-button>submit</loading-button>
				</card>
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Card from "@/Shared/tuis/Card";
import TextInput from "@/Shared/tuis/TextInput";
import TextareaInput from "@/Shared/tuis/TextareaInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Icon from "@/Shared/tuis/Icon";

export default {
	components: {
		Layout,
		Heading,
		Card,
		TextInput,
		TextareaInput,
		LoadingButton,
		Icon
	}
};
</script>
