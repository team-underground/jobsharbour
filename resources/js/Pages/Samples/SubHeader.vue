<template>
	<layout>
		<div class="bg-white px-4 py-10">
			<div class="container mx-auto">
				<link-to to="/jobs" class="mb-4">
					<icon name="chevron-left" class="-ml-2"></icon>Back Links
				</link-to>

				<heading size="heading">Title goes here</heading>
			</div>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading";
import Icon from "@/Shared/tuis/Icon";
import LinkTo from "@/Shared/tuis/LinkTo";

export default {
	components: {
		Layout,
		Heading,
		Icon,
		LinkTo
	}
};
</script>

<style lang="scss" scoped>
</style>