<script lang="ts">
  export let disabled: boolean = false;
</script>

<style>
  button {
    outline: none;
    border: 0.25rem solid transparent;
    background-color: var(--pf-accent);
    color: var(--pf-accent-font-color);
    padding: 0.75rem;
    font-weight: 800;
    border-radius: 0.5rem;
    cursor: pointer;
    box-shadow: var(--pf-shadow--normal);
    transition: box-shadow var(--pf-tn--default),
      transform var(--pf-tn--default), background-color var(--pf-tn--default);
  }

  button:hover:enabled {
    box-shadow: var(--pf-shadow--focus);
    transform: translateY(0.125rem);
  }

  button:active:enabled {
    box-shadow: none;
    transform: translateY(0.25rem);
  }

  button:disabled {
    background-color: var(--pf-accent--disabled);
    cursor: not-allowed;
    box-shadow: none;
  }

  button:focus {
    background-color: var(--pf-accent--focus);
  }
</style>

<button type="button" {disabled} on:click>
  <slot />
</button>
