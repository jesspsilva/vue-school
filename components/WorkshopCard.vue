<template>
	<div class="min-w-[570px] max-[640px]:min-w-full">
		<header
			class="flex py-[22px] px-[35px] items-center gap-3 rounded-t-[30px] bg-gradient-to-r from-purple-eletric to-pink-watermelon to-96.56% max-[640px]:px-[16px] max-[640px]:py-[24px]"
		>
			<img src="/images/calendar.svg" alt="calendar icon" />
			<h6 class="font-medium">{{ data.date }}</h6>
		</header>
		<main
			class="bg-peacot/90 rounded-b-[30px] py-[34px] pl-[34px] flex flex-col gap-5 max-[640px]:px-[16px] max-[640px]:py-[24px]"
		>
			<header class="flex items-start gap-[33px]">
				<div v-if="data.live" class="flex gap-3 items-center">
					<img
						src="/images/play.svg"
						alt="play icon"
						class="brightness-[0.6] w-[22px] h-[22px]"
					/>
					<p class="text-grey-rhythm tracking-normal">LIVE Training</p>
				</div>
				<div class="flex gap-3 items-center">
					<img
						src="/images/clock.svg"
						alt="clock icon"
						class="brightness-[0.6] w-[22px] h-[22px]"
					/>
					<p class="text-grey-rhythm tracking-normal">{{ data.duration }}</p>
				</div>
			</header>
			<div class="flex flex-col gap-[12px] pl-px">
				<h3 class="text-ghost-white">{{ data.title }}</h3>
				<p class="text-grey-rhythm leading-[1.428] tracking-normal">
					{{ data.description }}
				</p>
			</div>
			<footer class="flex items-center gap-[13px]">
				<img :src="`/images/${data.teacher.avatar}.svg`" alt="teacher icon" />
				<p class="text-grey-rhythm tracking-normal">{{ data.teacher.name }}</p>
			</footer>
		</main>
	</div>
</template>
<script lang="ts">
export default {
	props: {
		data: {
			type: Object as () => IWorkshop,
			required: true,
		},
	},
};
</script>
