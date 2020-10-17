<script lang="ts">
    import Card from "../card.svelte";
    import type { Theme } from "../typings/theme";
  
    export let content: any;
    export let title: string
    export let theme: Theme;
  </script>
  
  <Card on:click {theme} {title}>
    {@html content}
  </Card>
  