<template>
	<div
		class="flex items-start justify-end pb-[52px] gap-[52px] max-w-[1280px] mx-auto my-0 max-[1024px]:flex-col max-[1024px]:items-center"
	>
		<section
			class="flex flex-col justify-between gap-10 max-w-[570px] pt-[68px] max-[1024px]:text-center max-[1024px]:items-center"
		>
			<h1 v-html="data.title"></h1>
			<h4>{{ data.description }}</h4>
			<button class="primary-button max-w-44">{{ data.cta }}</button>
		</section>
		<aside>
			<img src="/images/hero.svg" alt="hero-image" class="w-full h-full" />
		</aside>
	</div>
</template>

<script setup lang="ts">
const query = groq`*[_type == "hero"]`;

const sanity = useSanity();

const data = await useAsyncData(() => sanity.fetch(query)).then((res) => {
	return {
		title: res.data.value[0].title[0].children[0].text,
		description: res.data.value[0].description[0].children[0].text,
		cta: res.data.value[0].cta,
	};
});
</script>
