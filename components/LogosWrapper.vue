<template>
	<section
		class="max-w-[1170px] grid grid-cols-6 gap-y-12 gap-x-[30px] py-[72px] mx-auto"
	>
		<img
			v-for="logo in logos"
			:key="logo.src"
			:src="logo.src"
			:alt="logo.alt"
			class="max-w-[119px] mx-auto"
		/>
	</section>
</template>

<script setup lang="ts">
const logos = [
	{ src: "/images/google.svg", alt: "google logo" },
	{ src: "/images/google.svg", alt: "google logo" },
	{ src: "/images/google.svg", alt: "google logo" },
	{ src: "/images/google.svg", alt: "google logo" },
	{ src: "/images/google.svg", alt: "google logo" },
	{ src: "/images/google.svg", alt: "google logo" },
];
</script>
