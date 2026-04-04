<script lang="ts">
	import { X } from 'lucide-svelte';

	let isMenuOpen = $state(false);
	const toogleMenu = () => {
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
			<span
				class="font-serif text-2xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50"
				style="">Quickened Creations</span
			>
		</div>
		<div class="hidden items-center space-x-10 md:flex">
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#portfolio"
				style="">Portfolio</a
			>
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#services"
				style="">Services</a
			>
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#process"
				style="">Process</a
			>
			<a
				class="font-serif text-lg tracking-tight text-zinc-600 italic transition-colors duration-500 hover:scale-[1.02] hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
				href="#about"
				style="">About</a
			>
			<button
				class="bg-primary-container text-on-primary-container ease-pneuma rounded-sm px-6 py-2 font-semibold transition-transform duration-500 hover:scale-[1.02] active:scale-95"
				style="">Inquiry</button
			>
		</div>
		<button onclick={toogleMenu} class="text-zinc-900 md:hidden">
			<X class="h-10 w-16 cursor-pointer" />
		</button>
	</div>
</nav>
