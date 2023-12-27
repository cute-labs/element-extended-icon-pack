<script lang="ts">
  import type { IconNode } from "./types";

  export let size: number | string = 24;
  export let color: string = "currentColor";

  export let iconNode: IconNode;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  {...$$restProps}
  width={size}
  height={size}
  {color}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
</svg>
