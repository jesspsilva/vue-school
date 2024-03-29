<template>
	<div class="flex flex-row gap-[78px] justify-between px-12 py-5 leading-6">
		<img src="/images/logo_complete.svg" alt="logo" />
		<nav class="flex items-center">
			<ul class="flex flex-row justify-between gap-[20px]">
				<li v-for="route in routes">
					<NuxtLink :to="route.to" class="text-white hover:text-opacity-60 flex flex-row navigation-item">
						{{ route.label }}
						<img v-if="route.children" src="/images/arrow.svg" alt="open-navigation-children-arrow" class="p-2.5"></img>
					</NuxtLink>
				</li>
			</ul>
		</nav>
		<aside class="flex items-center">
			<ul class="flex flex-row justify-between items-center gap-[30px]">
				<li
					v-for="button in signupButtons"
					:class="{
						'bg-gradient-to-r from-green-shamrock to-blue-eletric p-0.5 rounded-[10px]':
							button.to === '/signup',
					}"
				>
					<NuxtLink
						:to="button.to"
						class="hover:text-opacity-60"
						:class="{
							'inline-block px-10 py-4 bg-dark-blue rounded-[8px] text-green-shamrock':
								button.to === '/signup',
							'text-white': button.to !== '/signup',
						}"
					>
						{{ button.label }}
					</NuxtLink>
				</li>
			</ul>
		</aside>
	</div>
</template>

<script setup lang="ts">
const routes = [
	{
		label: "Courses",
		to: "/courses",
		children: [{ label: "All Courses", to: "/courses" }],
	},
	{
		label: "Plans",
		to: "/plans",
	},
	{
		label: "Business Service",
		to: "/service",
	},
	{
		label: "Learning Paths",
		to: "/learning",
	},
	{
		label: "Hiring",
		to: "/hiring",
	},
	{
		label: "Articles",
		to: "/articles",
	},
	{
		label: "Events",
		to: "/events",
		children: [
			{ label: "All Events", to: "/events" },
			{ label: "Upcoming Events", to: "/events/upcoming" },
			{ label: "Past Events", to: "/events/past" },
		],
	},
	{
		label: "Get certified",
		to: "/certification",
	},
] as INavigationItem[];

const signupButtons = [
	{
		label: "Log in",
		to: "/login",
	},
	{
		label: "Sign Up",
		to: "/signup",
	},
] as INavigationItem[];
</script>

<style scoped>
.navigation-item:hover {
	img {
		opacity: 0.6;
	}
}
</style>
