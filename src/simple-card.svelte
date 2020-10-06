<script lang="ts">
  import { Theme } from "../typings/theme";
  import PfButton from "./button.svelte";

  export let title: string;
  export let description: string;
  export let theme: Theme = "light";
</script>

<style>
  .root {
    display: flex;
    flex-direction: column;
    color: var(--pf__font-color);
    padding: 0.5rem;
    border-radius: var(--pf__border-radius);
    height: max();
  }
  .title {
    text-align: left;
    font-size: calc(4 * var(--pf__font-size));
    font-weight: 800;
    padding: 4rem 0 2rem 0;
  }

  .desc {
    padding: 2rem 0 1rem 0;
    font-weight: 400;
    text-align: justify;
  }
</style>

<PfButton>
  <div class={`root pf pf-${theme}`}>
    <div class="title">{title}</div>
    <div class="desc">{description}</div>
  </div>
</PfButton>
