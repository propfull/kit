<script lang="ts">
  import type { Theme } from "./typings/theme";

  export let disabled: boolean = false;
  export let push: boolean = true;
  export let theme: Theme = "light";
  export let style: string = '';
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
    box-shadow: var(--pf__shadow);
    transition: box-shadow var(--pf__tn), transform var(--pf__tn),
      background-color var(--pf__tn);
  }

  .push.pf-button:hover:enabled {
    cursor: pointer;
    box-shadow: var(--pf__shadow--focus);
  }

  .push.pf-button:active:enabled {
    box-shadow: none;
  }

  .pf-button:disabled {
    background-color: var(--pf__accent--disabled);
    cursor: not-allowed;
    box-shadow: none;
  }
</style>

<button
  type="button"
  {disabled}
  on:click
  class={`pf-button pf pf-${theme}`}
  class:push
  {style}>
  <slot />
</button>
