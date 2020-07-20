<script lang="ts">
  export let name: string;
</script>

<style>
  span {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<svelte:options tag="pf-sample" />

<span>Hello {name}!</span>
