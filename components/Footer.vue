<template>
	<div
		class="pb-[131px] flex gap-[130px] max-[1024px]:flex-col max-[1024px]:justify-center"
	>
		<div
			class="max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center max-[640px]:text-center"
		>
			<img
				src="/images/logo_complete.svg"
				alt="logo"
				class="w-[268px] pb-[85px]"
			/>
			<h6 class="pb-[61px] max-[1024px]:text-center">
				Thanks to fine people like you, Vue School can proudly sponsor Evan and
				the future of Vue.js by being a Platinum Patreon
			</h6>
			<h4 class="font-medium uppercase text-grey-rhythm pb-[37px]">
				Follow us in social media
			</h4>
			<ul class="flex gap-[42px] max-[640px]:gap-2">
				<li v-for="logo in mediaLogos" class="flex">
					<a
						:href="logo.href"
						class="bg-peacot rounded-[100px] min-w-[60px] min-h-[60px] flex justify-center hover:opacity-60"
					>
						<img
							:src="`/images/${logo.src}.svg`"
							:alt="logo.alt"
							class="max-w-[28px]"
						/>
					</a>
				</li>
			</ul>
		</div>
		<div
			class="flex gap-[30px] max-[1024px]:justify-center max-[640px]:flex-col max-[640px]:items-center"
		>
			<ul class="flex flex-col gap-[30px] min-w-[270px]">
				<li v-for="item in firstColumn" class="max-[640px]:text-center">
					<h4 class="font-medium uppercase text-grey-rhythm pb-5">
						{{ item.title }}
					</h4>
					<ul class="flex flex-col gap-[20px]">
						<li v-for="link in item.links">
							<a :href="link.href" class="hover:opacity-60">
								<h6>{{ link.label }}</h6>
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<ul class="flex flex-col gap-[30px] min-w-[270px]">
				<li v-for="item in secondColumn" class="max-[640px]:text-center">
					<h4 class="font-medium uppercase text-grey-rhythm pb-5">
						{{ item.title }}
					</h4>
					<ul class="flex flex-col gap-[20px]">
						<li v-for="link in item.links">
							<a :href="link.href" class="hover:opacity-60">
								<h6>{{ link.label }}</h6>
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
const footerItems = [
	{
		title: "Products",
		links: [
			{
				label: "Courses",
				href: "#",
			},
			{
				label: "Workshops",
				href: "#",
			},
			{
				label: "Vue Masterclasses",
				href: "#",
			},
			{
				label: "Mastering Nuxt",
				href: "#",
			},
		],
	},
	{
		title: "Pricing",
		links: [
			{
				label: "Plans",
				href: "#",
			},
		],
	},
	{
		title: "Connect with us",
		links: [
			{
				label: "About Us",
				href: "#",
			},
			{
				label: "Careers",
				href: "#",
			},
			{
				label: "Contact Us",
				href: "#",
			},
		],
	},
	{
		title: "Events",
		links: [
			{
				label: "Vue.js Nation",
				href: "#",
			},
			{
				label: "Nuxt Nation",
				href: "#",
			},
			{
				label: "Vue.js Forge",
				href: "#",
			},
		],
	},
	{
		title: "Corporate",
		links: [
			{
				label: "Corporate Training",
				href: "#",
			},
			{
				label: "Developer Training",
				href: "#",
			},
			{
				label: "Course Development",
				href: "#",
			},
			{
				label: "On-site Workshops",
				href: "#",
			},
			{
				label: "Consulting",
				href: "#",
			},
			{
				label: "Affiliate Programs",
				href: "#",
			},
		],
	},
	{
		title: "Resources",
		links: [
			{
				label: "Articles",
				href: "#",
			},
		],
	},
] as IFooterItems[];

const firstColumn = footerItems.slice(0, 3);
const secondColumn = footerItems.slice(3, 6);
const mediaLogos = [
	{
		src: "facebook",
		alt: "facebook logo",
		href: "#",
	},
	{
		src: "twitter",
		alt: "twitter logo",
		href: "#",
	},
	{
		src: "github",
		alt: "github logo",
		href: "#",
	},
	{
		src: "linkedin",
		alt: "linkedin logo",
		href: "#",
	},
	{
		src: "youtube",
		alt: "youtube logo",
		href: "#",
	},
] as ILogo[];
</script>
