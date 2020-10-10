<script lang="ts">
  import Button from "../button.svelte";
  import { Theme } from "../../typings/theme";

  export let content: any;
  export let disabled: boolean;
  export let theme: Theme;
</script>

<Button {disabled} on:click {theme}>
  {@html content}
</Button>
