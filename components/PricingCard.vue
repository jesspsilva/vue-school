<template>
	<div class="pricing-card rounded-[30px] pt-10 pb-5 px-[23px] min-w-[370px]">
		<header class="flex gap-4">
			<img :src="`/images/${data.header.icon}.svg`" alt="Pricing header icon" />
			<h4 class="font-bold">{{ data.header.title }}</h4>
		</header>
		<main class="pt-[38px] pb-10 flex flex-col gap-[25px]">
			<h6 class="text-green-shamrock">{{ data.features.title }}</h6>
			<section>
				<ul class="flex flex-col gap-4">
					<li
						v-for="feature in data.features.list"
						class="flex justify-between gap-4"
						:class="{
							'opacity-20': !feature.available,
						}"
					>
						<div class="flex gap-4">
							<img
								:src="`/images/${feature.available ? 'check' : 'cross'}.svg`"
							/>
							<p
								class="leading-5 tracking-normal"
								:class="{
									'font-bold': feature.featured,
								}"
							>
								{{ feature.label }}
							</p>
						</div>
						<img v-if="feature.available" src="/images/info.svg" />
					</li>
				</ul>
			</section>
			<VideoCard v-if="data.header.title.toLowerCase() === 'professional'" />
			<PricingSlider :price="data.monthlySeatPrice" />
		</main>
		<footer class="flex flex-col gap-1">
			<button class="primary-button w-full">Start Learning</button>
			<button class="secondary-button w-full">Refer your manager</button>
		</footer>
	</div>
</template>

<script lang="ts">
export default {
	props: {
		data: {
			type: Object as () => IPricingCard,
			required: true,
		},
	},
};
</script>

<style scoped>
.pricing-card {
	background: linear-gradient(rgba(43, 47, 68, 0.9) 0 0) padding-box,
		linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.2) 0%,
				rgba(255, 255, 255, 0) 100%
			)
			border-box;
	border: 1px solid transparent;
}
</style>
