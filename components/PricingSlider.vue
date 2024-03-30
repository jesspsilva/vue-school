<template>
	<div class="bg-dark-blue rounded-2xl px-6 pt-7 pb-6">
		<header class="flex justify-start items-center gap-2 pb-[21px]">
			<h2>${{ price }}</h2>
			<h6 class="text-tory-blue font-[inter]">/ seat / month</h6>
		</header>
		<main class="pb-3.5">
			<h6 class="font-bold">How many licenses do you need?</h6>
			<ElSlider
				class="pricing-slider pt-[22px] pb-2.5"
				v-model="seats"
				:min="5"
				:max="20"
			/>
			<footer class="flex justify-between">
				<p class="font-medium text-grey-rhythm">5</p>
				<p class="font-medium text-grey-rhythm">20</p>
			</footer>
		</main>
		<footer class="grid grid-cols-2 items-center">
			<div
				class="bg-black-russian rounded-lg flex justify-between items-center py-[3px] px-3.5"
			>
				<img src="/images/group.svg" alt="Seats icon" />
				<h4 class="text-[26px] font-bold">{{ seats }}</h4>
				<h6 class="text-tory-blue">seats</h6>
			</div>
			<h6 class="text-green-shamrock font-medium text-right pr-3">
				26% discount
			</h6>
		</footer>
	</div>
</template>

<script setup>
const props = defineProps({
	price: {
		type: Number,
		required: true,
	},
});

const { price } = props;
const seats = ref(12);
</script>
