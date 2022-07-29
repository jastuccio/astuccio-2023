<script>
	export let title;
	export let date;

	if (!title) {
		title = 'This post needs a title';
	}

	if (!date) {
		date = '01-01-3333';
	}
</script>

<h1>{title}</h1>
<p>Published: {date}</p>

<slot />
