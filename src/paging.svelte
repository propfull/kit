<script lang="ts">
  import PfButton from "./button.svelte";
  import { Theme } from "./typings/theme";

  export let start: number = 1;
  export let end: number = 1;
  export let current = start;

  export let theme: Theme = "light";

  let currentPage = current;
</script>

<style>
  .root {
    /* display: flex;
    align-items: center; */
  }

  span {
    color: var(--pf__accent);
    height: 100%;
    /* margin: 0 0.25rem; */
  }
</style>

<div class={`root pf pf-${theme}`}>
  <PfButton
    {theme}
    disabled={currentPage === start}
    on:click={() => (currentPage = start)}>
    {start}
  </PfButton>
  {#if currentPage - 1 >= start && currentPage - 2 !== start}
    <span class={`pf`}>•••</span>
  {/if}
  {#if currentPage - 1 >= start && currentPage - 1 !== start}
    <PfButton {theme} on:click={() => (currentPage -= 1)}>
      {currentPage - 1}
    </PfButton>
  {/if}
  {#if currentPage != start && currentPage != end}
    <PfButton {theme} disabled>{currentPage}</PfButton>
  {/if}
  {#if currentPage + 1 <= end && currentPage + 1 !== end}
    <PfButton {theme} on:click={() => (currentPage += 1)}>
      {currentPage + 1}
    </PfButton>
  {/if}
  {#if currentPage + 1 <= end && currentPage + 2 !== end}
    <span class={`pf`}>•••</span>
  {/if}
  <PfButton
    {theme}
    disabled={currentPage === end}
    on:click={() => (currentPage = end)}>
    {end}
  </PfButton>
</div>
