<template>
	<div class="bg-dark-blue">
		<Navigation />
		<main
			class="mx-auto my-0 pt-[32px] max-[1024px]:mx-6 max-[640px]:mx-[15px]"
		>
			<div class="max-w-[1170px] mx-auto my-0">
				<Hero />
				<Card />
				<LogosWrapper class="max-[1024px]:hidden" />
				<CoursesCounter />
				<PricingCardsWrapper />
			</div>
			<WorkshopsWrapper />
			<Footer class="max-w-[1170px] mx-auto my-0" />
		</main>
	</div>
</template>

<script setup lang="ts">
useSeoMeta({
	title: "Vue School",
	ogTitle: "Vue Schoo Site",
	description: "This is Vue School site.",
	ogDescription: "his is Vue School site.",
	ogImage: "/favicon.png",
});

useHead({
	title: "Vue School",
	meta: [{ name: "description", content: "Vue School" }],
	link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
});
</script>
