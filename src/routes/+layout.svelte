<script>
	import '../app.css';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<meta property="og:site_name" content="Kiga" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="site-frame">
	<Navbar />
	<main id="main-content" class="main-content">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.main-content {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
