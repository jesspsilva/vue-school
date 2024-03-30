<template>
	<section
		class="max-w-[1170px] mx-auto my-0 flex justify-between items-center pb-[72px]"
	>
		<h1>Available Workshops</h1>
		<button class="primary-button">See all the workshops</button>
	</section>
	<main
		class="flex overflow-x-scroll no-scrollbar gap-[30px] pl-[15.5%] pr-[30px]"
		@mousedown="startDrag"
		@touchstart="startDrag"
		ref="main"
	>
		<WorkshopCard
			v-for="(workshop, index) in workshops"
			:key="index"
			:data="workshop"
			class="child"
		/>
	</main>
</template>

<script lang="ts">
export default {
	setup() {
		const workshops = [
			{
				date: "December 14th - 11:00 AM (GMT-3)",
				live: true,
				duration: "15 hours",
				title: "Vue.js Fundamentals",
				description:
					"A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",
				teacher: {
					name: "Steve Popoola",
					avatar: "avatar",
				},
			},
			{
				date: "December 14th - 11:00 AM (GMT-3)",
				live: true,
				duration: "15 hours",
				title: "Vue 3 and Composition API",
				description:
					"Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
				teacher: {
					name: "Steve Popoola",
					avatar: "avatar",
				},
			},
			{
				date: "December 14th - 11:00 AM (GMT-3)",
				live: true,
				duration: "15 hours",
				title: "Vue 3 and Composition API",
				description:
					"Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
				teacher: {
					name: "Steve Popoola",
					avatar: "avatar",
				},
			},
			{
				date: "December 14th - 11:00 AM (GMT-3)",
				live: true,
				duration: "15 hours",
				title: "Vue 3 and Composition API",
				description:
					"Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
				teacher: {
					name: "Steve Popoola",
					avatar: "avatar",
				},
			},
			{
				date: "December 14th - 11:00 AM (GMT-3)",
				live: true,
				duration: "15 hours",
				title: "Vue 3 and Composition API",
				description:
					"Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...",
				teacher: {
					name: "Steve Popoola",
					avatar: "avatar",
				},
			},
		] as IWorkshop[];

		let isDragging = false;
		let startX = 0;
		let scrollLeft = 0;

		const startDrag = (event: MouseEvent | TouchEvent) => {
			isDragging = true;
			startX =
				event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
			scrollLeft = main.value?.scrollLeft || 0;

			document.addEventListener("mousemove", drag);
			document.addEventListener("mouseup", endDrag);
			document.addEventListener("touchmove", drag);
			document.addEventListener("touchend", endDrag);
		};

		const drag = (event: MouseEvent | TouchEvent) => {
			if (!isDragging) return;

			const deltaX =
				(event instanceof MouseEvent
					? event.clientX
					: event.touches[0].clientX) - startX;

			if (main.value) main.value.scrollLeft = scrollLeft - deltaX;
		};

		const endDrag = () => {
			isDragging = false;
			document.removeEventListener("mousemove", drag);
			document.removeEventListener("mouseup", endDrag);
			document.removeEventListener("touchmove", drag);
			document.removeEventListener("touchend", endDrag);
		};

		const main = ref<HTMLDivElement | null>(null);

		return { workshops, startDrag, main };
	},
};
</script>
