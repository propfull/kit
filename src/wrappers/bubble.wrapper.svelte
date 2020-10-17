<script lang="ts">
  import Bubble from "../bubble.svelte";
  import type { Theme } from "../typings/theme";

  export let content: any;
  export let theme: Theme;
</script>

<Bubble {theme}>
  {@html content}
</Bubble>
