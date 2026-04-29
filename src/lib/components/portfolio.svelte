<script lang="ts">
	import { ArrowRight, Sparkles, TrophyIcon, BadgeCheck, SlidersHorizontal } from 'lucide-svelte';
</script>

<section class="bg-[#ffffff] px-8 py-32 lg:px-24" id="portfolio">
	<div class="mx-auto max-w-screen-2xl">
		<div class="mb-16 flex flex-col items-baseline justify-between gap-8 md:flex-row">
			<h2 class="font-headline text-5xl text-[#1a1c1c] md:text-6xl">
				The Living <span class="italic">Archive</span>
			</h2>
			<a
				class="flex items-center gap-2 font-label text-sm tracking-widest text-[#705d00] uppercase transition-transform duration-500 hover:translate-x-2"
				href="#portfolio"
			>
				<ArrowRight />
			</a>
		</div>
		<div class="grid h-auto grid-cols-1 gap-8 md:grid-cols-12">
			<div class="group relative aspect-video overflow-hidden md:col-span-8">
				<img
					alt="Modern Music Video"
					class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
					data-alt="Vibrant atmospheric music video stage lighting"
					src=""
				/>
				<div
					class="absolute inset-0 flex flex-col justify-end bg-zinc-950/40 p-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					<span class="mb-2 font-label text-xs tracking-widest text-[#ffd700] uppercase"
						>Music Video</span
					>
					<h4 class="font-headline text-3xl text-white">Modern Symphony</h4>
				</div>
			</div>
			<div class="group relative aspect-3/4 overflow-hidden md:col-span-4">
				<img
					alt="Minimalist Brand Identity"
					class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
					data-alt="Minimalist stationery and branding mockup"
					src=""
				/>
				<div
					class="absolute inset-0 flex flex-col justify-end bg-zinc-950/40 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					<span class="text[#ffd700] mb-2 font-label text-xs tracking-widest uppercase"
						>Branding</span
					>
					<h4 class="font-headline text-2xl text-white">Aura Minimalist</h4>
				</div>
			</div>
			<div class="group relative aspect-square overflow-hidden md:col-span-4">
				<img
					alt="Drone Coverage"
					class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
					data-alt="Aerial cinematic landscape shot from drone"
					src=""
				/>
				<div
					class="absolute inset-0 flex flex-col justify-end bg-zinc-950/40 p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					<span class="mb-2 font-label text-xs tracking-widest text-[#ffd700] uppercase"
						>Cinematography</span
					>
					<h4 class="font-headline text-2xl text-white">Horizon Bound</h4>
				</div>
			</div>
			<div class="group relative aspect-21/9 overflow-hidden md:col-span-8">
				<img
					alt="Social Campaign"
					class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
					data-alt="Energetic social media marketing visual"
					src=""
				/>
				<div
					class="absolute inset-0 flex flex-col justify-end bg-zinc-950/40 p-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				>
					<span class="mb-2 font-label text-xs tracking-widest text-[#ffd700] uppercase"
						>Campaign</span
					>
					<h4 class="font-headline text-3xl text-white">Urban Pulse 2024</h4>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="bg-[#f9f9f9] px-8 py-32 lg:px-24">
	<div class="mx-auto mb-24 max-w-4xl text-center">
		<h2 class="mb-6 font-headline text-5xl">
			The Pneuma <span class="italic">Method</span>
		</h2>
		<p class="text-lg text-[#5f5e5e]">
			A deliberate, four-stage evolution from initial spark to final delivery.
		</p>
	</div>
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
		<div class="group relative">
			<div
				class="pointer-events-none absolute -top-16 -left-4 font-headline text-[8rem] text-[#ffd700]/10 transition-colors duration-500 group-hover:text-[#ffd700]/20"
			>
				01
			</div>
			<div class="relative z-10">
				<span
					class="mb-6 text-3xl text-[#705d00]"
					data-icon="search_spark"
					id="material-symbols-outlined"><Sparkles class="mb-4" /></span
				>
				<h4 class="mb-4 font-headline text-2xl">Discover</h4>
				<p class="leading-relaxed text-[#5f5e5e]">
					Deep immersion into your brand's essence and project objectives.
				</p>
			</div>
		</div>
		<div class="group relative">
			<div
				class="pointer-events-none absolute -top-16 -left-4 font-headline text-[8rem] text-[#ffd700]/10 transition-colors duration-500 group-hover:text-[#ffd700]/20"
			>
				02
			</div>
			<div class="relative z-10">
				<span
					class="mb-6 text-3xl text-[##705d00]"
					data-icon="auto_awesome"
					id="material-symbols-outlined"><TrophyIcon class="mb-4" /></span
				>
				<h4 class="mb-4 font-headline text-2xl">Create</h4>
				<p class="leading-relaxed text-[#5f5e5e]">
					Artisanal execution utilizing premium tools and refined intuition.
				</p>
			</div>
		</div>
		<div class="group relative">
			<div
				class="pointer-events-none absolute -top-16 -left-4 font-headline text-[8rem] text-[#ffd700]/10 transition-colors duration-500 group-hover:text-[#ffd700]/20"
			>
				03
			</div>
			<div class="relative z-10">
				<span class="mb-6 text-3xl text-[#705d00]" id="material-symbols-outlined " data-icon="tune"
					><SlidersHorizontal class="mb-4" /></span
				>
				<h4 class="mb-4 font-headline text-2xl">Refine</h4>
				<p class="leading-relaxed text-[#5f5e5e]">
					Collaborative iteration to polish every detail to absolute perfection.
				</p>
			</div>
		</div>
		<div class="group relative">
			<div
				class="pointer-events-none absolute -top-16 -left-4 font-headline text-[8rem] text-[#ffd700]/10 transition-colors duration-500 group-hover:text-[#ffd700]/20"
			>
				04
			</div>
			<div class="relative z-10">
				<span
					class="mb-6 text-3xl text-[#705d00]"
					id="material-symbols-outlined"
					data-icon="verified"><BadgeCheck class="mb-4" /></span
				>
				<h4 class="mb-4 font-headline text-2xl">Deliver</h4>
				<p class="leading-relaxed text-[#5f5e5e]">
					High-impact deployment of your vision across all intended mediums.
				</p>
			</div>
		</div>
	</div>
</section>
