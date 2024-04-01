<template>
	<section
		class="mx-auto my-0 grid grid-cols-2 items-center py-[118px] pr-[5px] max-[1024px]:grid-cols-1 max-[1024px]:text-center max-[1024px]:gap-[30px] max-[1024px]:px-10"
	>
		<header class="flex flex-col gap-3.5">
			<h3
				class="uppercase bg-gradient-to-r from-green-shamrock to-blue-aqua to-96.56% text-transparent bg-clip-text"
			>
				YOUR #1 SOURCE OF VUE.JS COURSES
			</h3>
			<h1 class="text-[#F3F5FF] tracking-[0.3px]">
				Full Stack
				<span class="text-blue-eletric">Vue</span>
				<span
					class="bg-gradient-to-r from-lime to-blue-eletric to-39.47% text-transparent bg-clip-text"
				>
					Training</span
				>
				Solutions
			</h1>
		</header>
		<aside>
			<ul
				class="flex justify-end gap-[62px] mt-2 max-[1024px]:justify-center max-[640px]:gap-10"
			>
				<li
					v-for="lesson in lessonsDetails"
					:key="lesson.number"
					class="flex flex-col items-center justify-between gap-4"
				>
					<span
						class="bg-gradient-to-r from-green-shamrock to-blue-aqua to-96.56% text-transparent bg-clip-text text-[90px] font-medium"
						>{{ lesson.number }}</span
					>
					<div class="flex gap-2.5 justify-center items-center">
						<img :src="lesson.icon" :alt="lesson.iconLabel" />
						<p>{{ lesson.iconLabel }}</p>
					</div>
				</li>
			</ul>
		</aside>
	</section>
</template>

<script setup lang="ts">
const lessonsDetails = [
	{
		number: 763,
		icon: "/images/play.svg",
		iconLabel: "Video lessons",
	},
	{
		number: 40,
		icon: "/images/book.svg",
		iconLabel: "Courses",
	},
	{
		number: 64,
		icon: "/images/clock.svg",
		iconLabel: "15 Hours",
	},
] as ICoursesDetails[];
</script>
