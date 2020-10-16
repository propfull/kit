<script lang="ts">
    import type { Theme } from "./typings/theme";
  
    export let theme: Theme = "light";
</script>

<style>
  .root {
    display: inline-block;
    outline: none;
    border: 0.25rem solid transparent;
    background-color: var(--pf__accent);
    color: var(--pf__font-color);
    padding: 0.75rem;
    font-weight: 800;
    border-radius: 2rem;
    box-shadow: var(--pf__shadow);
    transition: box-shadow var(--pf__tn), transform var(--pf__tn),
      background-color var(--pf__tn);
  }
</style>

<div class={`root pf pf-${theme}`}>
  <slot />
</div>
