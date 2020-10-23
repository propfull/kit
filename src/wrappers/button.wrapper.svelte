<script lang="ts">
  import Button from "../button.svelte";
  import type { Theme } from "../typings/theme";

  export let content: any;
  export let disabled: boolean;
  export let push: boolean;
  export let theme: Theme;
</script>

<Button {disabled} on:click {theme} {push}>
  {@html content}
</Button>
