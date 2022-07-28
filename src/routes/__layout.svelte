<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';
</script>

<Header />

<header>Hi, I'm a header</header>
<main>
	<slot />
</main>
<footer>footer</footer>
