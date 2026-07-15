<script lang="ts">
	import Block from '$components/Block.svelte';
	import Column from '$components/Column.svelte';
	import { onValue, ref } from 'firebase/database';
	import { onMount } from 'svelte';
	import { db } from '$scripts/firebase.js';
	import type { IPost } from '$models/IPost';
	import type { IProduct } from '$models/IProduct';

	let posts: [string, IPost][] = $state([]);
	let products: [string, IProduct][] = $state([]);
	onMount(async () => {
		onValue(ref(db, 'posts'), (r) => {
			if (r.exists()) {
				posts = Object.entries(r.val());
			}
		});
		onValue(ref(db, 'products'), (r) => {
			if (r.exists()) {
				products = Object.entries(r.val());
			}
		});
	});
</script>

<Column _class="gap-5">
	<Block>
		<h1>Netlify проект</h1>
		<p>
			Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
		</p>
	</Block>

	<Block _class="collapse">
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

	<div>
		<h4 class="px-1 mb-3">Публикации</h4>
		<div class="row w-100 row-cols-1 row-cols-xl-4 g-3">
			{#each posts as [i, item]}
				<div class="col">
					<div class=" border-light border rounded h-100">
						<div
							class="rounded position-relative"
							style="background-image: url({item.cover}); min-height: 11.25em; background-size:cover; background-position: center; background-repeat: no-repeat"
						>
							<div
								class="sticky-top w-100 bg-light bg-opacity-75"
								style="padding:.43em .71em .43em .71em ;"
							>
								<b>{item.title}</b>
								<div>{item.description}</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div>
		<h4 class="px-1 mb-3">Продукты</h4>
		<div class="row w-100 row-cols-1 row-cols-xl-4 g-3">
			{#each products as [i, item]}
				<div class="col">
					<div class=" border-light border rounded h-100">
						<div
							class="rounded position-relative"
							style="background-image: url({item.photo}); min-height: 13.25em; background-size:cover; background-position: center; background-repeat: no-repeat"
						>
							<div
								class="sticky-top w-100 bg-light bg-opacity-75"
								style="padding:.43em .71em .43em .71em ;"
							>
								<b>{item.title}</b>
								<div>{item.description}</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Column>
