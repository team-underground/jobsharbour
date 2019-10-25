<template>
	<layout>
		<div class="px-4 py-6 md:py-16 relative">
			<div class="max-w-3xl mx-auto">
				<alert v-if="$page.flash.success" class="mb-4">{{ $page.flash.success }}</alert>
				<heading size="display">We are sorry to see you go.</heading>
			</div>
		</div>
	</layout>
</template>

<script>
	import Layout from "@/Shared/Layout";
	import Heading from "@/Shared/tuis/Heading";
	import Icon from "@/Shared/tuis/Icon";
	import LinkTo from "@/Shared/tuis/LinkTo";
	import Card from "@/Shared/tuis/Card";
	import Alert from "@/Shared/tuis/Alert";
	import LoadingButton from "@/Shared/tuis/LoadingButton";
	export default {
		components: {
			Layout,
			Heading,
			Icon,
			LinkTo,
			Card,
			Alert,
			LoadingButton
		}
	};
</script>

<style>
</style>