<script lang="ts">
  import Button from "../button.svelte";
  import { Theme } from "../../typings/theme";

  export let content;
  export let disabled;
  export let theme: Theme;
</script>

<Button {disabled} on:click {theme}>
  {@html content}
</Button>
