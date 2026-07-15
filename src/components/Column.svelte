<script lang="ts">
	import type { Snippet } from 'svelte';

	interface IPropse {
		children?: Snippet<[]>;
		_class?: string;
		_style?: string;
	}

	let { children, _class = 'gap-3', _style }: IPropse = $props();
</script>

<div class="d-flex flex-column {_class}" style={_style}>
	{@render children?.()}
</div>
