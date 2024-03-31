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
