<script lang="ts">
  export let name: string;
</script>

<style>
  div {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #ff3e00;
    text-transform: lower;
    font-size: 4em;
    font-weight: 100;
  }

  span {
    font-weight: 800;
  }
</style>

<div>
  Hello from
  <span>{name}</span>
  !
</div>
