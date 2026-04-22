<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
</script>

<section class="bg-surface-container-lowest px-8 py-32 lg:px-24" id="portfolio">
	<div class="mx-auto max-w-screen-2xl">
		<div class="mb-16 flex flex-col items-baseline justify-between gap-8 md:flex-row">
			<h2 class="font-headline text-on-background text-5xl md:text-6xl">
				The Living <span class="italic">Archive</span>
			</h2>
			<a
				class="font-label text-primary flex items-center gap-2 text-sm tracking-widest uppercase transition-transform duration-500 hover:translate-x-2"
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
					<span class="text-primary-container font-label mb-2 text-xs tracking-widest uppercase"
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
					<span class="text-primary-container font-label mb-2 text-xs tracking-widest uppercase"
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
					<span class="text-primary-container font-label mb-2 text-xs tracking-widest uppercase"
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
					<span class="text-primary-container font-label mb-2 text-xs tracking-widest uppercase"
						>Campaign</span
					>
					<h4 class="font-headline text-3xl text-white">Urban Pulse 2024</h4>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="bg-surface px-8 py-32 lg:px-24">
	<div class="mx-auto mb-24 max-w-4xl text-center">
		<h2 class="font-headline mb-6 text-5xl">
			The Pneuma <span class="italic">Method</span>
		</h2>
		<p class="text-secondary text-lg">
			A deliberate, four-stage evolution from initial spark to final delivery.
		</p>
	</div>
	<div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
		<div class="group relative">
			<div
				class="font-headline text-primary-container/10 group-hover:text-primary-container/20 pointer-events-none absolute -top-16 -left-4 text-[8rem] transition-colors duration-500"
			>
				01
			</div>
			<div class="relative z-10">
				<span
					class="material-symbols-outlined text-primary mb-6 text-3xl"
					data-icon="search_spark"
					style="">search_spark</span
				>
				<h4 class="font-headline mb-4 text-2xl">Discover</h4>
				<p class="text-secondary leading-relaxed">
					Deep immersion into your brand's essence and project objectives.
				</p>
			</div>
		</div>
		<div class="group relative">
			<div
				class="font-headline text-primary-container/10 group-hover:text-primary-container/20 pointer-events-none absolute -top-16 -left-4 text-[8rem] transition-colors duration-500"
			>
				02
			</div>
			<div class="relative z-10">
				<span
					class="material-symbols-outlined text-primary mb-6 text-3xl"
					data-icon="auto_awesome"
					style="">auto_awesome</span
				>
				<h4 class="font-headline mb-4 text-2xl">Create</h4>
				<p class="text-secondary leading-relaxed">
					Artisanal execution utilizing premium tools and refined intuition.
				</p>
			</div>
		</div>
		<div class="group relative">
			<div
				class="font-headline text-primary-container/10 group-hover:text-primary-container/20 pointer-events-none absolute -top-16 -left-4 text-[8rem] transition-colors duration-500"
			>
				03
			</div>
			<div class="relative z-10">
				<span class="material-symbols-outlined text-primary mb-6 text-3xl" data-icon="tune"
					>tune</span
				>
				<h4 class="font-headline mb-4 text-2xl">Refine</h4>
				<p class="text-secondary leading-relaxed">
					Collaborative iteration to polish every detail to absolute perfection.
				</p>
			</div>
		</div>
		<div class="group relative">
			<div
				class="font-headline text-primary-container/10 group-hover:text-primary-container/20 pointer-events-none absolute -top-16 -left-4 text-[8rem] transition-colors duration-500"
			>
				04
			</div>
			<div class="relative z-10">
				<span class="material-symbols-outlined text-primary mb-6 text-3xl" data-icon="verified"
					>verified</span
				>
				<h4 class="font-headline mb-4 text-2xl">Deliver</h4>
				<p class="text-secondary leading-relaxed">
					High-impact deployment of your vision across all intended mediums.
				</p>
			</div>
		</div>
	</div>
</section>
