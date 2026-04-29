<script lang="ts">
	import { Star } from 'lucide-svelte';
	import { scrollReveal } from '$lib/index';
</script>

<section class="bg-[#e8e8e8]/30 px-8 py-32 lg:px-24" use:scrollReveal>
	<div class="bg- mx-auto max-w-screen-2xl">
		<div class="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
			<div>
				<h2 class="mb-8 font-headline text-5xl leading-tight">
					Echoes of <span class="italic">Excellence</span>
				</h2>
				<div class="mb-8 flex gap-1">
					<span
						class="text-[#705d00]"
						id="material-symbols-outlined"
						data-icon="star"
						data-weight="fill"
						style="font-variation-settings: &quot;FILL&quot; 1;"><Star /></span
					>
					<span
						class="text-[#705d00]"
						id="material-symbols-outlined"
						data-icon="star"
						data-weight="fill"
						style="font-variation-settings: &quot;FILL&quot; 1;"><Star /></span
					>
					<span
						class="text-[#705d00]"
						id="material-symbols-outlined"
						data-icon="star"
						data-weight="fill"
						style="font-variation-settings: &quot;FILL&quot; 1;"><Star /></span
					>
					<span
						class="text-[#705d00]"
						id="material-symbols-outlined"
						data-icon="star"
						data-weight="fill"
						style="font-variation-settings: &quot;FILL&quot; 1;"><Star /></span
					>
					<span
						class="text-[#705d00]"
						id="material-symbols-outlined"
						data-icon="star"
						data-weight="fill"
						style="font-variation-settings: &quot;FILL&quot; 1;"><Star /></span
					>
				</div>
				<p class="border-l-2 border-[#ffd700] py-2 pl-8 text-xl text-[#5f5e5e] italic">
					"Quickened Creations didn't just edit our video; they captured the soul of our brand. The
					'Pneuma' inspiration is evident in every frame and every beat."
				</p>
				<h5 class="mt-8 font-label text-sm font-bold tracking-widest text-[#705d00] uppercase">
					— Elena Vance, Creative Director at Lux
				</h5>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div class="rounded-xl border border-[#d0c6ab]/10 bg-[#ffffff] p-8 shadow-sm">
					<p class="mb-6 text-sm leading-relaxed text-[#1a1c1c]">
						"The sonic architecture for our latest campaign was beyond expectations. Sophisticated
						and emotive."
					</p>
					<span class="block text-xs font-bold tracking-wider text-[#705d00] uppercase"
						>Marcus Thorne</span
					>
				</div>
				<div class="rounded-xl bg-[#ffffff] p-8 shadow-sm md:mt-12">
					<p class="mb-6 text-sm leading-relaxed text-[#1a1c1c]">
						"Professionalism at its peak. Their drone coverage added a cinematic depth that changed
						everything."
					</p>
					<span class="block text-xs font-bold tracking-wider text-[#705d00] uppercase"
						>Sarah Jenks</span
					>
				</div>
			</div>
		</div>
	</div>
</section>
