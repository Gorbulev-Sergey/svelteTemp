<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Netlify проект</title>
</svelte:head>

<div class="sticky-top w-100 bg-light">
	<div class="d-flex align-items-center px-lg-3 py-2">
		<a class="btn btn-light bg-light text-dark border-0 text-uppercase" href="/">
			<b>Netlify</b> проект
		</a>
	</div>
</div>
<div class="container my-3">
	{@render children()}
</div>
