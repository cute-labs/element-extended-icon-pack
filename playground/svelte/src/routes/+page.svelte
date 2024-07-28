<script lang="ts">
	import { FillEleArrowCaretDouble } from '@element-extended-icon-pack/svelte';
	import * as icons from '@element-extended-icon-pack/svelte';
</script>

<FillEleArrowCaretDouble size="48" color="#FF3E00" />

<div>
	{#each Object.entries(icons) as [_, icon]}
		<svelte:component this={icon} color="blue" size="16" />
	{/each}
</div>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
