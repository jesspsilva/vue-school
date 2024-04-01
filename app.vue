<template>
	<div class="bg-dark-blue">
		<Navigation />
		<main class="mx-auto my-0 pt-[32px]">
			<div class="top-wrapper">
				<Hero />
				<div
					class="max-w-[1170px] mx-auto my-0 max-[1024px]:mx-6 max-[640px]:mx-[15px]"
				>
					<Card />
					<LogosWrapper class="max-[1024px]:hidden" />
					<CoursesCounter />
				</div>
			</div>
			<div class="bottom-wrapper">
				<PricingCardsWrapper
					class="max-w-[1170px] mx-auto my-0 max-[1024px]:mx-6 max-[640px]:mx-[15px]"
				/>
			</div>
			<WorkshopsWrapper />
		</main>
		<Footer
			class="max-w-[1170px] mx-auto my-0 max-[1024px]:mx-6 max-[640px]:mx-[15px]"
		/>
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

<style scoped>
.top-wrapper {
	background-image: url("/images/bg1.svg"), url("/images/bg2.svg"),
		linear-gradient(90deg, rgba(11, 216, 143, 0) 0%, rgba(11, 216, 143, 0) 100%);
	background-position: 0 62%, 0 100%;
	background-size: contain;
	background-repeat: no-repeat;
	background-color: #212435;

	@media (max-width: 1024px) {
		background-position: 0 58%, 0 63%;
	}

	@media (max-width: 640px) {
		background-position: 0 50%, 0 53%;
	}
}

.bottom-wrapper {
	background-image: url("/images/bg3.svg"), url("/images/bg4.svg"),
		linear-gradient(90deg, rgba(11, 216, 143, 0) 0%, rgba(11, 216, 143, 0) 100%);
	background-position: 0 52%, 0 78%;
	background-size: contain;
	background-repeat: no-repeat;
	background-color: #212435;

	@media (max-width: 1024px) {
		background-position: 0 10%, 0 20%;
	}

	@media (max-width: 640px) {
		background-position: 0 12%, 0 20%;
	}
}
</style>
