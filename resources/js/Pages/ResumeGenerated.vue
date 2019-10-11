<template>
	<div class="container py-10 mx-auto">
		<div class="flex mb-10 pb-5 border-b-2 -mx-4">
			<div class="w-2/3 px-4">
				<heading size="display" class="tracking-wide uppercase">{{ resumedata.name }}</heading>
			</div>
			<div class="w-1/3 px-4">
				<heading size="small">{{ resumedata.phone }}</heading>
				<heading size="small">{{ resumedata.email }}</heading>
				<heading size="small">{{ resumedata.address }}</heading>
			</div>
		</div>

		<div class="mb-10">
			<heading size="large" class="mb-3 font-bold text-gray-700 uppercase tracking-wider">Objective</heading>
			<heading>{{ resumedata.objective }}</heading>
		</div>

		<div class="flex -mx-4">
			<div class="w-2/3 px-4">
				<heading size="large" class="mb-3 font-bold text-gray-700 uppercase tracking-wider">Experience</heading>
				<template v-for="experience in resumedata.experiences">
					<div class="mb-4 flex -mx-4">
						<div class="w-48 px-4">
							<heading class="text-gray-800" size="small">{{ experience.start }} - {{ experience.end }}</heading>
						</div>

						<div class="flex-1 px-4">
							<heading class="text-gray-800" size="small">{{ experience.title }}</heading>
							<heading size="small">{{ experience.company }}</heading>
							<heading size="small">{{ experience.description }}</heading>
						</div>
					</div>
				</template>
			</div>
			<div class="w-1/3 px-4">
				<heading size="large" class="mb-3 font-bold text-gray-700 uppercase tracking-wider">Education</heading>
				<div class="mb-10">
					<template v-for="education in resumedata.educations">
						<div class="mb-4">
							<heading class="text-gray-800" size="small">{{ education.name }}</heading>
							<heading size="small">{{ education.title }}</heading>
							<heading size="small">{{ education.year }}</heading>
						</div>
					</template>
				</div>

				<heading
					size="large"
					class="mb-3 font-bold text-gray-700 uppercase tracking-wider"
				>Skills/Strength</heading>
				<div class="mb-10">
					<heading
						size="small"
						v-for="(skill, idx) in resumedata.skills.split(',')"
						:key="idx"
					>{{ skill }}</heading>
				</div>

				<heading size="large" class="mb-3 font-bold text-gray-700 uppercase tracking-wider">Interests</heading>
				<div class="mb-10">
					<heading
						size="small"
						v-for="(interest, idx2) in resumedata.interests.split(',')"
						:key="idx2"
					>{{ interest }}</heading>
				</div>

				<heading size="large" class="mb-3 font-bold text-gray-700 uppercase tracking-wider">Languages</heading>
				<div class="mb-10">
					<heading
						size="small"
						v-for="(language, idx3) in resumedata.languages.split(',')"
						:key="idx3"
					>{{ language }}</heading>
				</div>
			</div>
		</div>
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

	props: ["resumedata"],

	data() {
		return {};
	}
};
</script>