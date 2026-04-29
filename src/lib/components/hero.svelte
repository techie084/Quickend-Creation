<script lang="ts">
	import { scrollReveal } from '$lib/index';
</script>

<section
	use:scrollReveal
	class="relative flex min-h-230.25 items-center overflow-hidden px-8 lg:px-24"
	id="bg-breath"
>
	<div class="absolute inset-0 z-0 opacity-40">
		<div
			class="absolute top-[-10%] right-[-10%] h-150 w-150 rounded-full bg-[#ffd700]/20 blur-[120px]"
		></div>
		<div
			class="absolute bottom-[-10%] left-[-10%] h-100 w-100 rounded-full bg-[#7cd0ff]/10 blur-[100px]"
		></div>
	</div>
	<div class="relative z-10 max-w-5xl">
		<span class="mb-6 block font-label text-sm tracking-[0.3em] text-[#705d00] uppercase"
			>Pneuma Inspired Architecture</span
		>
		<h1
			class="text-on-background mb-8 font-headline text-5xl leading-[1.1] tracking-tight italic md:text-7xl lg:text-8xl"
		>
			Where creativity meets <span class="text-[#e9c400] not-italic">purpose</span>, inspired by
			Pneuma
		</h1>
		<p class="mb-12 max-w-2xl font-body text-xl leading-relaxed text-[#5f5e5e] md:text-2xl">
			A premium creative agency dedicated to high end video editing, music production,and modern
			digital experiences.
		</p>
		<div class="flex flex-col gap-6 sm:flex-row">
			<a
				class="rounded-sm bg-[#ffd700] px-10 py-4 text-center text-lg font-semibold transition-transform duration-300 hover:scale-[1.02]"
				id="ease-pneuma"
				href="#contact">Start a Project</a
			>
			<a
				class="rounded-sm border border-[#d0c6ab]/40 px-10 py-4 text-center text-lg font-semibold transition-colors duration-500 hover:cursor-pointer hover:bg-[#f3f3f3]"
				href="#portfolio">View Our Work</a
			>
		</div>
	</div>
</section>
