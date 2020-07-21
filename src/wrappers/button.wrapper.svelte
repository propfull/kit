<script>
  import Button from "../button.svelte";

  export let content;
  export let disabled;
</script>

<Button {disabled} on:click>
  {@html content}
</Button>
