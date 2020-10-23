<script lang="ts">
  import Card from "../card.svelte";
  import Header from "../header.internal.svelte";
  import type { Theme } from "../typings/theme";

  export let content: any;
  export let push: boolean;
  export let title: any;
  export let theme: Theme;
</script>

<style>
  .title {
    margin: 1rem;
  }
  .content {
    margin: 1rem;
  }
</style>

<Card on:click {theme} {push}>
  <div class="title" slot="title">
    <Header theme="dark" type="h1">
      {@html title}
    </Header>
  </div>
  <div class="content" slot="content">
    {@html content}
  </div>
</Card>
