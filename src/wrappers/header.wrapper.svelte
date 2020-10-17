<script lang="ts">
  import Header from "../header.internal.svelte";
  import type { Theme } from "../typings/theme";
  import type { HeaderType } from "../typings/header-type";

  export let content: any;
  export let type: HeaderType;
  export let theme: Theme;
</script>

<Header {theme} {type}>
  {@html content}
</Header>
