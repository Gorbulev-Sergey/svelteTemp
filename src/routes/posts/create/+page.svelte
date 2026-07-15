<script lang="ts">
	import Block from '$components/Block.svelte';
	import Column from '$components/Column.svelte';
	import { Post, type IPost } from '$models/IPost';
	import { db } from '$scripts/firebase';
	import { push, ref } from 'firebase/database';

	let post: IPost = $state(Post());
</script>

<Block>
	<h4>Новая публикация</h4>
	<Column _class="gap-2">
		<div>
			<div>Заголовок:</div>
			<input class="form-control" bind:value={post.title} />
		</div>
		<div>
			<div>Описание:</div>
			<input class="form-control" bind:value={post.description} />
		</div>
		<div>
			<div>Обложка:</div>
			<div class="d-flex align-items-start gap-2">
				<input class="form-control" bind:value={post.cover} />
				{#if post.cover}
					<div
						class="rounded"
						style="background-image: url({post.cover}); min-height: 15em; width: 40%; background-size:cover; background-position: center; background-repeat: no-repeat"
					></div>
				{/if}
			</div>
		</div>

		<div class="d-flex align-items-center justify-content-between">
			<a class="btn btn-sm btn-light text-dark border-0" href="/">Отмена</a>
			<a
				class="btn btn-sm btn-dark text-light border-0"
				href="/"
				onclick={() => {
					if (post.title !== '') push(ref(db, 'posts'), post);
				}}>Добавить</a
			>
		</div>
	</Column>
</Block>
