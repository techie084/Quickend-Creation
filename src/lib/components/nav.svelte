<script lang="ts">
	import { Menu, X } from 'lucide-svelte';

	let isMenuOpen = $state(false);
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav class="fixed top-0 z-50 w-full bg-white backdrop-blur-xl dark:bg-zinc-950">
	<div class="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-6">
		<div class="flex items-center gap-4">
			<img
				alt="Quickened Creations Logo"
				class="h-10 w-auto rounded-sm"
				data-alt="Quickened Creations Brand Logo gold icon"
				src="logo.jpg"
			/>
			<span class="font-serif text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
				>Quickened Creations</span
			>
		</div>
		<!-- Desktop Nav-Bar  -->
		<div class="hidden items-center space-x-10 md:flex">
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#portfolio">Portfolio</a
			>
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#services">Services</a
			>
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#process">Process</a
			>
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#about">About</a
			>
			<button
				class="bg-primary-container text-on-primary-container ease-pneuma rounded-sm px-6 py-2 font-semibold transition-transform duration-500 hover:scale-[1.02] active:scale-95"
				>Inquiry</button
			>
		</div>
		<!-- Hamburger for mobile nav  -->
		<button onclick={toggleMenu} class="z-50 text-white md:hidden" aria-label="Toggle menu">
			{#if isMenuOpen}
				<X />
			{:else}
				<Menu />
			{/if}
		</button>
	</div>
</nav>

<!-- Mobile Menu Overlay -->
{#if isMenuOpen}
	<div
		class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/90 md:hidden"
	>
		<ul class="flex flex-col items-center gap-8 text-2xl text-white">
			<li>
				<a href="#about" onclick={toggleMenu} class="transition-colors hover:text-yellow-400">
					About
				</a>
			</li>
			<li>
				<a href="#services" onclick={toggleMenu} class="transition-colors hover:text-yellow-400">
					Services
				</a>
			</li>
			<li>
				<a href="#portfolio" onclick={toggleMenu} class="transition-colors hover:text-yellow-400">
					Portfolio
				</a>
			</li>
			<li>
				<a href="#contact" onclick={toggleMenu} class="transition-colors hover:text-yellow-400">
					Contact
				</a>
			</li>
		</ul>
	</div>
{/if}
