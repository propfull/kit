<script lang="ts">
  import type { HeaderType } from "./typings/header-type";
  import type { Theme } from "./typings/theme";

  export let type: HeaderType = "h1";
  export let theme: Theme = "light";
</script>

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--pf__accent);
    font-weight: 800;
  }

  .pf-dark {
    color: var(--pf__font-color);
  }
</style>

{#if type === 'h6'}
  <h6 class={`pf pf-${theme}`}>
    <slot />
  </h6>
{:else if type === 'h5'}
  <h5 class={`pf pf-${theme}`}>
    <slot />
  </h5>
{:else if type === 'h4'}
  <h4 class={`pf pf-${theme}`}>
    <slot />
  </h4>
{:else if type === 'h3'}
  <h3 class={`pf pf-${theme}`}>
    <slot />
  </h3>
{:else if type === 'h2'}
  <h2 class={`pf pf-${theme}`}>
    <slot />
  </h2>
{:else}
  <h1 class={`pf pf-${theme}`}>
    <slot />
  </h1>
{/if}
