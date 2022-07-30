<script>
	export let title;
	export let date;
	export let categories;

	if (!title) {
		title = 'This post needs a title';
	}

	if (!date) {
		date = '01-01-3333';
	}
</script>

<svelte:head>
	<title>Joe Astuccio | {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<h1>{title}</h1>
<p>Published: {date}</p>

{#if categories.length}
	<aside>
		<h2>Posted in:</h2>
		<ul>
			{#each categories as category}
				<li>
					<a href="/blog/categories/{category}">{category}</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
<slot />
