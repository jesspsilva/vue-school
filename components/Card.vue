<template>
	<article
		class="flex gap-10 py-[64px] pl-10 pr-10 rounded-[30px] mx-auto my-0 max-[1024px]:items-start max-[1024px]:gap-6 max-[1024px]:py-10 max-[1024px]:px-6 max-[640px]:flex-col max-[640px]:items-center"
	>
		<div class="flex items-center pr-[66px] pl-[79px] max-[1024px]:px-0">
			<img
				src="/images/logo.svg"
				alt="vue-school-logo"
				class="max-w-[135px] max-h-[153px] max-[640px]:max-w-[60px]"
			/>
		</div>
		<header class="flex flex-col gap-8 max-[640px]:text-center">
			<h2 class="max-[640px]:text-[24px]">
				About Vue School corporate training
			</h2>
			<h4 class="max-[640px]:text-[14px]">
				School is the #1 training resource for Vue.js and has provided the most
				comprehensive Vue.js video library in the world to over 140,000
				developers. Private individuals and small to enterprise companies have
				used our services to develop their skills since 2016.
			</h4>
		</header>
	</article>
</template>
<style scoped>
article {
	background: linear-gradient(rgba(43, 47, 68, 0.9) 0 0) padding-box,
		linear-gradient(
				180deg,
				rgba(255, 255, 255, 0.6) 2.17%,
				rgba(255, 255, 255, 0) 54.05%
			)
			border-box;
	border: 1px solid transparent;
}
</style>
