<template>
	<div class="pb-[200px] max-[1024px]:pb-[140px]">
		<section
			class="center flex justify-between items-center pb-[72px] max-[1024px]:justify-center max-[1024px]:text-center"
		>
			<h1>Available Workshops</h1>
			<button class="primary-button max-[1024px]:hidden">
				See all the workshops
			</button>
		</section>
		<main
			class="flex overflow-x-scroll no-scrollbar gap-[30px] pl-[15.5%] pr-[30px] max-[1024px]:pl-[10%] max-[640px]:pl-0 max-[640px]:pr-0"
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
		<button
			class="primary-button min-[1024px]:hidden mt-[56px] mx-auto mb-[0] flex"
		>
			See all the workshops
		</button>
	</div>
</template>

<script lang="ts">
export default {
	async setup() {
		const query = groq`*[_type == "workshop"]`;

		const sanity = useSanity();

		const workshops = await useAsyncData(() => sanity.fetch(query)).then(
			(res) => {
				return res.data.value.map((workshop: any) => {
					return {
						date: new Date(workshop.date).toUTCString(),
						live: workshop.live,
						duration: workshop.duration,
						title: workshop.title,
						description: workshop.description[0].children[0].text,
						teacher: {
							name: workshop.teacher_name,
							avatar: workshop.teacher_avatar_path,
						},
					};
				}) as IWorkshop[];
			}
		);

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
