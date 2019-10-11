<template>
	<div class="container py-10 mx-auto">
		<heading size="display" class="text-center mb-5">
			Resume Builder
			<span
				class="bg-orange-300 px-2 py-1 uppercase text-xs tracking-wide rounded-full"
			>Beta</span>
		</heading>
		<card with-footer>
			<heading class="mb-1 font-bold text-gray-700">Information</heading>
			<div class="flex pb-4 mb-10 bg-gray-100 p-4 rounded-lg">
				<div class="w-2/3">
					<text-input class="w-1/2" placeholder="Full name" v-model="resume.name"></text-input>
				</div>
				<div class="w-1/3">
					<text-input class="mb-1" placeholder="Phone" v-model="resume.phone"></text-input>
					<text-input class="mb-1" placeholder="Email" v-model="resume.email"></text-input>
					<text-input class="mb-1" placeholder="Address" v-model="resume.address"></text-input>
				</div>
			</div>

			<div class="mb-10">
				<heading class="mb-1 font-bold text-gray-700">Objective</heading>

				<div class="bg-gray-100 p-4 rounded-lg">
					<text-input v-model="resume.objective" class="bg-white rounded-lg"></text-input>
				</div>
			</div>

			<div class="flex -mx-4">
				<div class="w-1/2 px-4">
					<heading class="mb-1 font-bold text-gray-700">Experiences</heading>
					<template v-for="experience in resume.experiences">
						<div class="bg-gray-100 rounded-lg mb-4 p-4">
							<div class="mb-2 flex -mx-4">
								<text-input class="px-4" label="Start" v-model="experience.start"></text-input>
								<text-input class="px-4" label="End" v-model="experience.end"></text-input>
								<text-input class="px-4" label="Title" v-model="experience.title"></text-input>
								<text-input class="px-4" label="Company" v-model="experience.company"></text-input>
							</div>
							<simple-editor class="bg-white rounded-lg" label="Description" v-model="experience.description"></simple-editor>
						</div>
					</template>

					<link-to to="#" class="mb-10" @click="addExperience">&plus; Add Experience</link-to>
				</div>
				<div class="w-1/2 px-4">
					<heading class="mb-1 font-bold text-gray-700">Education</heading>
					<template v-for="education in resume.educations">
						<div class="bg-gray-100 rounded-lg mb-4 p-4">
							<text-input class="mb-2" label="College/University Name" v-model="education.name"></text-input>
							<div class="flex -mx-4">
								<text-input class="px-4" label="Degree Title" v-model="education.title"></text-input>
								<text-input class="px-4" label="Year" v-model="education.year"></text-input>
							</div>
						</div>
					</template>

					<link-to to="#" class="mb-10" @click="addEducation">&plus; Add Education</link-to>

					<heading class="mb-1 font-bold text-gray-700">Skills</heading>
					<div class="bg-gray-100 p-4 rounded-lg mb-10">
						<text-input
							placeholder="eg. Graphic Design, UI/UX Design, Web Design, Copywriting..."
							v-model="resume.skills"
						></text-input>
					</div>

					<heading class="mb-1 font-bold text-gray-700">Interests</heading>
					<div class="bg-gray-100 p-4 rounded-lg mb-10">
						<text-input
							placeholder="eg. Travelling, Listen Music, Photography..."
							v-model="resume.interests"
						></text-input>
					</div>

					<heading class="mb-1 font-bold text-gray-700">Languages</heading>
					<div class="bg-gray-100 p-4 rounded-lg mb-10">
						<text-input placeholder="eg. English, German, France..." v-model="resume.languages"></text-input>
					</div>
				</div>
			</div>

			<template #footer>
				<div class="flex justify-between items-center py-4">
					<loading-button variant="secondary" variant-type="outline" class="bg-white">Reset</loading-button>
					<loading-button ref="resumeGenerateButton" @click="generateResume">Generate</loading-button>
				</div>
			</template>
		</card>
	</div>
</template>

<script>
import Card from "@/Shared/tuis/Card";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Heading from "@/Shared/tuis/Heading";
import Badge from "@/Shared/tuis/Badge";
import LinkTo from "@/Shared/tuis/LinkTo";
import SearchInput from "@/Shared/tuis/SearchInput";
import TextInput from "@/Shared/tuis/TextInput";
import SimpleEditor from "@/Shared/tuis/SimpleEditor";
import Icon from "@/Shared/tuis/Icon";

export default {
	components: {
		Card,
		LoadingButton,
		Heading,
		Badge,
		LinkTo,
		Icon,
		SearchInput,
		TextInput,
		SimpleEditor
	},

	data() {
		return {
			resume: {
				name: "Mithicher Baro",
				phone: "7086051060",
				email: "mithnehu@gmail.com",
				address: "59 Ratnapeeth",
				objective: "Challenging position with a creative work environment to enhance expertise in web development and application design",
				experiences: [
					{
						start: "June, 2014",
						end: "Present",
						title: "Web Developer",
						company: "Sumato Globaltech Tvt. Ltd.",
						description: "Works as a Team Lead"
					},
					{
						start: "June, 2014",
						end: "Present",
						title: "Web Developer",
						company: "Sumato Globaltech Tvt. Ltd.",
						description: "Works as a Team Lead"
					}
				],
				educations: [
					{
						name: "NEHU",
						title: "B. Tech",
						year: "2018-2012"
					},
					{
						name: "Marian School",
						title: "HS",
						year: "2006-2008"
					}
				],
				skills: "Laravel, Vuejs, MySQL, TailwindCSS, UI/UX Design",
				interests: "Reading, Movies",
				languages: "English, Hindi"
			}
		};
	},

	methods: {
		addExperience() {
			this.resume.experiences.push({
				start: null,
				end: null,
				title: null,
				company: null,
				description: null
			});
		},
		addEducation() {
			this.resume.educations.push({
				name: null,
				title: null,
				year: null
			});
		},
		generateResume() {
			this.$refs.resumeGenerateButton.startLoading();
			this.$inertia
				.post("/resume/generated", {
					resumedata: this.resume
				})
				.then(() => {
					this.$refs.resumeGenerateButton.stopLoading();
				})
				.catch(() => {
					this.$refs.resumeGenerateButton.stopLoading();
				});
		}
	}
};
</script>