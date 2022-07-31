<script>
	import { browser } from '$app/env';

if (browser) {
	let isScrollingup = false;

	window.onscroll = function (e) {
		isScrollingup = this.oldScroll > this.scrollY;
		this.oldScroll = this.scrollY;
		console.log(isScrollingup)
	}
};
</script>

<header>
	<a href="/" class="title-font">Joe Astuccio</a>
	<nav>
		<ul>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/blog">Portfolio</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding: 1rem;
		background: var(--white);
		display: grid;
		grid-area: header;
		/* flex-wrap: wrap;
		justify-content: space-between; */
	}

	ul {
		margin: 0;
		display: flex;
		gap: 1rem;
	}
</style>
