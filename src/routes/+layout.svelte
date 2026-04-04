<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon_io/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Google Fonts -->
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&amp;family=Inter:wght@300;400;600;700&amp;display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
		rel="stylesheet"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
		rel="stylesheet"
	/>

	<!-- Fav-icon -->
	<link rel="icon" href={favicon} />

	<title>Quickened Creations | Pneuma Inspired Creative Agency</title>
	<meta
		name="description"
		content="A Pneuma-inspired full-service creative agency offering videography, music production, graphic design, social media management and more."
	/>

	<!-- Open Graph -->
	<meta property="og:title" content="Quickened Creations | Pneuma Inspired" />
	<meta
		property="og:description"
		content="Spirit-inspired creativity expressed through excellence."
	/>
	<meta property="og:image" content="https://quickenedcreations.com/og-image.png" />
	<meta property="og:url" content="https://quickenedcreations.com" />
	<meta property="og:type" content="website" />

	<!-- Twitter/X Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Quickened Creations | Pneuma Inspired" />
	<meta name="twitter:image" content="https://quickenedcreations.com/og-image.png" />

	<!-- SEO -->
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://quickened-creations.vercel.app" />
</svelte:head>

<main class="scroll-smooth">
	{@render children()}
</main>
