<script lang="ts">
	import { FillEleArrowCaretDouble } from '@element-extended-icon-pack/svelte';
	import * as icons from '@element-extended-icon-pack/svelte';
</script>

<FillEleArrowCaretDouble size="48" color="#FF3E00" />

<div>
	{#each Object.entries(icons) as [_, icon]}
		<svelte:component this={icon} size="24" />
	{/each}
</div>
