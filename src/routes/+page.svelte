<script lang="ts">
	import Block from '$components/Block.svelte';
	import Column from '$components/Column.svelte';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import { db } from '$scripts/firebase.js';
	import type { IPost } from '$models/IPost';

	let posts: [string, IPost][] = $state([]);
	onMount(async () => {
		onValue(ref(db, 'posts'), (r) => {
			if (r.exists()) {
				posts = Object.entries(r.val());
				console.log($state.snapshot(posts));
			}
		});
	});
</script>

<Column>
	<Block>
		<h1>Netlify проект</h1>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>
	</Block>
	<Block>
		<Column _class="gap-2">
			<h4>Публикации</h4>
			<div class="row w-100 row-cols-1 row-cols-xl-4 g-2">
				{#each posts as [i, item]}
					<div class="col">
						<div class=" border-light border rounded h-100">
							<div
								class="rounded position-relative"
								style="background-image: url({item.cover}); min-height: 11em; background-size:cover; background-position: center; background-repeat: no-repeat"
							>
								<div class="sticky-top w-100 px-2 py-1 bg-light bg-opacity-75">
									<b>{item.title}</b>
									<div>{item.description}</div>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</Column>
	</Block>
</Column>
