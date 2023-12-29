<script lang="ts">
  import * as icons from "@element-extended-icon-pack/svelte";
  import { Toaster, toast } from "svelte-sonner";
  import { copy } from "svelte-copy";
</script>

<Toaster />
<div class="icons">
  {#each Object.entries(icons) as [name, icon]}
    <div
      class="icon"
      use:copy={`<${name} />`}
      on:svelte-copy={() => {
        toast("已复制", { description: `<${name} />` });
      }}
    >
      <svelte:component this={icon} />
    </div>
  {/each}
</div>

<style>
  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
    gap: 8px;
  }

  .icon {
    background: color(display-p3 0.975 0.975 0.975);
    display: grid;
    place-items: center;
    aspect-ratio: 1;
    margin-top: 0;
    border-radius: 4px;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
  }
  .icon:hover {
    background: color(display-p3 0.908 0.908 0.908);
  }
</style>
