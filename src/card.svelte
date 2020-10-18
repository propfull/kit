<script lang="ts">
  import type { Theme } from "./typings/theme";
  import PfButton from "./button.svelte";

  export let theme: Theme = "light";
</script>

<style>
  .pf-card {
    display: flex;
    flex-direction: column;
    color: var(--pf__font-color);
    border-radius: var(--pf__border-radius);
    height: max();
  }
  .title {
    text-align: left;
    font-size: calc(4 * var(--pf__font-size));
    font-weight: 800;
  }

  .content {
    font-weight: 400;
    text-align: justify;
  }
</style>

<div class={`pf-card pf pf-${theme}`}>
  <PfButton {theme} style={'padding: 0; border: none'}>
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </PfButton>
</div>
