<script lang="ts">
	import { Piano, Layers2, Notebook, CalendarCheck, AudioLinesIcon, Play } from 'lucide-svelte';
	import { scrollReveal } from '$lib/index';
</script>

<section class="bg-[#f9f9f9] px-8 py-32 lg:px-24" id="services" use:scrollReveal>
	<div class="mx-auto max-w-screen-2xl">
		<div class="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-12">
			<div class="lg:col-span-5">
				<span class="mb-4 block font-label text-xs tracking-widest text-[#705d00] uppercase"
					>Our Expertise</span
				>
				<h2 class="font-headline text-4xl text-[#1a1c1c] md:text-5xl">
					Crafting the ethereal into <span class="text-[#ffd700] italic">tangible reality</span>
				</h2>
			</div>
			<div class="flex items-end lg:col-span-7">
				<p class="max-w-xl text-lg text-[#5f5e5e]">
					We transcend traditional agency boundaries by blending cinematic visual storytelling with
					sonic architecture and digital precision.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-0.5 bg-[#d0c6ab]/10 md:grid-cols-2 lg:grid-cols-3">
			<!-- Service Item -->
			<div class="group bg-[#f9f9f9] p-12 transition-colors duration-500 hover:bg-[#f3f3f3]">
				<span
					class="mb-8 block text-4xl text-[#705d00] transition-transform duration-500 group-hover:scale-110"
					id="material-symbols-outlined"
					data-icon="movie_edit"><Play /></span
				>
				<h3 class="mb-4 font-headline text-2xl text-[#1a1c1c]">
					Video Editing &amp; Motion Design
				</h3>
				<p class="leading-relaxed text-[#5f5e5e]">
					High-end cinematic narratives and fluid motion graphics that capture the essence of your
					brand.
				</p>
			</div>
			<div class="group bg-[#f9f9f9] p-12 transition-colors duration-500 hover:bg-[#f3f3f3]">
				<span
					class="mb-8 block text-4xl text-[#705d00] transition-transform duration-500 group-hover:scale-110"
					id="material-symbols-outlined"
					data-icon="audio_file"><AudioLinesIcon /></span
				>
				<h3 class="mb-4 font-headline text-2xl text-[#1a1c1c]">
					Music Production &amp; Songwriting
				</h3>
				<p class="leading-relaxed text-[#5f5e5e]">
					Bespoke sonic landscapes and professional songwriting tailored for artists and commercial
					impact.
				</p>
			</div>
			<div class="group bg-[#f9f9f9] p-12 transition-colors duration-500 hover:bg-[#f3f3f3]">
				<span
					class="mb-8 block text-4xl text-[#705d00] transition-transform duration-500 group-hover:scale-110"
					id="material-symbols-outline"
					data-icon="campaign"><CalendarCheck /></span
				>
				<h3 class="mb-4 font-headline text-2xl text-[#1a1c1c]">
					Social Media Management &amp; Ads
				</h3>
				<p class="leading-relaxed text-[#5f5e5e]">
					Strategic growth and targeted advertising that cuts through the noise of the digital
					archive.
				</p>
			</div>
			<div class="group bg-[#f9f9f9] p-12 transition-colors duration-500 hover:bg-[#f3f3f3]">
				<span
					class=" mb-8 block text-4xl text-[#705d00] transition-transform duration-500 group-hover:scale-110"
					id="material-symbols-outlined"
					data-icon="edit_note"><Notebook /></span
				>
				<h3 class="mb-4 font-headline text-2xl text-[#1a1c1c]">
					Content Creation &amp; Copywriting
				</h3>
				<p class="leading-relaxed text-[#5f5e5e]">
					Compelling editorial content and persuasive copy that speaks with a distinct, premium
					voice.
				</p>
			</div>
			<div class="group bg-[#f9f9f9] p-12 transition-colors duration-500 hover:bg-[#f3f3f3]">
				<span
					class="mb-8 block text-4xl text-[#705d00] transition-transform duration-500 group-hover:scale-110"
					id="material-symbols-outlined"
					data-icon="layers"><Layers2 /></span
				>
				<h3 class="mb-4 font-headline text-2xl text-[#1a1c1c]">Graphic Design</h3>
				<p class="leading-relaxed text-[#5f5e5e]">
					Visual identities and design systems rooted in minimalist elegance and structural clarity.
				</p>
			</div>
			<div class="group bg-[#f9f9f9] p-12 transition-colors duration-500 hover:bg-[#f3f3f3]">
				<span
					class="mb-8 block text-4xl text-[#705d00] transition-transform duration-500 group-hover:scale-110"
					id="material-symbols-outlined"
					data-icon="piano"><Piano /></span
				>
				<h3 class="mb-4 font-headline text-2xl text-[#1a1c1c]">Instruments &amp; Classes</h3>
				<p class="leading-relaxed text-[#5f5e5e]">
					Curated musical instrument sales and elite-level music education for aspiring virtuosos.
				</p>
			</div>
		</div>
	</div>
</section>
