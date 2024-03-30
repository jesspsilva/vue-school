<template>
	<div class="mx-auto my-0 pt-[82px]">
		<h1
			class="text-[#F3F5FF] max-w-[752px] text-center mx-auto my-0 pb-[120px]"
		>
			Discounted
			<span class="text-blue-eletric inline-block">Corporate</span>
			<span
				class="bg-gradient-to-r from-lime to-blue-eletric to-39.47% text-transparent bg-clip-text"
				>Training</span
			>
			Bundles
		</h1>
		<section class="flex gap-[30px] justify-between items-start pb-40">
			<PricingCard v-for="card in pricingCards" :data="card" />
		</section>
	</div>
</template>

<script setup lang="ts">
const pricingCards = [
	{
		header: {
			icon: "leaf",
			title: "Basic",
		},
		features: {
			title: "Includes 1 year access to:",
			list: [
				{
					available: true,
					label: "All Video Courses",
					featured: false,
				},
				{
					available: true,
					label: "Vue.Js Master class",
					featured: false,
				},
				{
					available: true,
					label: "Developer assist Slack channel",
					featured: false,
				},
				{
					available: false,
					label: "Live Weekly QnA",
					featured: false,
				},
				{
					available: false,
					label: "1 x ws ticket per license",
					featured: false,
				},
			],
		},
		monthlySeatPrice: 50,
	},
	{
		header: {
			icon: "rocket",
			title: "Professional",
		},
		features: {
			title: "Includes 1 year access to:",
			list: [
				{
					available: true,
					label: "All Video Courses",
					featured: false,
				},
				{
					available: true,
					label: "Vue.Js Master class",
					featured: false,
				},
				{
					available: true,
					label: "Developer assist Slack channel",
					featured: false,
				},
				{
					available: true,
					label: "Live Weekly QnA",
					featured: true,
				},
				{
					available: true,
					label: "1 x ws ticket per license",
					featured: true,
				},
			],
		},
		monthlySeatPrice: 50,
	},
	{
		header: {
			icon: "bolt",
			title: "Basic",
		},
		features: {
			title: "Includes 1 year access to:",
			list: [
				{
					available: true,
					label: "All Video Courses",
					featured: false,
				},
				{
					available: true,
					label: "Vue.Js Master class",
					featured: false,
				},
				{
					available: true,
					label: "Developer assist Slack channel",
					featured: false,
				},
				{
					available: true,
					label: "Live Weekly QnA",
					featured: false,
				},
				{
					available: true,
					label: "4 x Virtual Workshop of your choice",
					featured: true,
				},
			],
		},
		monthlySeatPrice: 50,
	},
] as IPricingCard[];
</script>
