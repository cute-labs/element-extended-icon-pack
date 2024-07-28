<script lang="ts">
  import type { IconNode, IconProps } from "./types.js";

  const {
    size,
    width,
    height,
    color = "currentColor",
    iconNode,
    ...rest
  }: IconProps & { iconNode: IconNode } = $props();

  function isSafeSize(value: IconProps["width"]) {
    return value !== null && value !== undefined;
  }

  const svgW = $derived.by(() => (isSafeSize(width) ? width : size));
  const svgH = $derived.by(() => (isSafeSize(height) ? height : size));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width={svgW}
  height={svgH}
  {color}
  {...rest}
>
  {#each iconNode as [tag, attrs]}
    <svelte:element this={tag} {...attrs} />
  {/each}
</svg>
