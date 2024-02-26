<script lang="ts">
  import type { IconNode, IconProps } from "./types";

  export let size: number | string = 24;
  export let color: string = "currentColor";
  export let width: IconProps["width"];
  export let height: IconProps["width"];

  export let iconNode: IconNode;

  function isSafeSize(value: IconProps["width"]) {
    return value !== null && value !== undefined;
  }

  $: svgW = isSafeSize(width) ? width : size;
  $: svgH = isSafeSize(height) ? height : size;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  {...$$restProps}
  width={svgW}
  height={svgH}
  {color}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
</svg>
