<script lang="ts">
  import type { Theme } from "./typings/theme";

  export let disabled: boolean = false;
  export let theme: Theme = "light";
  export let style: any = {};
</script>

<style>
  .pf-button {
    outline: none;
    border: 0.25rem solid transparent;
    background-color: var(--pf__accent);
    color: var(--pf__font-color);
    padding: 0.5rem;
    font-weight: 800;
    border-radius: 0;
    cursor: pointer;
    box-shadow: var(--pf__shadow);
    transition: box-shadow var(--pf__tn), transform var(--pf__tn),
      background-color var(--pf__tn);
  }

  .pf-button:hover:enabled {
    box-shadow: var(--pf__shadow--focus);
  }

  .pf-button:active:enabled {
    box-shadow: none;
  }

  .pf-button:disabled {
    background-color: var(--pf__accent--disabled);
    cursor: not-allowed;
    box-shadow: none;
  }

  .pf-button:focus {
    background-color: var(--pf__accent--focus);
  }
</style>

<button
  type="button"
  {disabled}
  on:click
  class={`pf-button pf pf-${theme}`}
  {style}>
  <slot />
</button>
