<script>
  import { onMount } from "svelte";
  import { Icon } from "@sveltestrap/sveltestrap";

  let scroll = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />

<button
  id="scroll-top"
  aria-label="scroll-top"
  class="scroll-top d-flex align-items-center justify-content-center {scroll >
  100
    ? 'active'
    : ''}"
  onclick={() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  <Icon name="arrow-up-short" class="scroll-icon" />
</button>

<style>
  .scroll-top {
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: -15px;
    z-index: 99999;
    background-color: var(--accent-color);
    width: 44px;
    height: 44px;
    border-radius: 50px;
    transition: all 0.4s;
  }

  :global .scroll-icon {
    font-size: 24px;
    color: var(--contrast-color);
    line-height: 0;
  }

  .scroll-top:hover {
    background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
    color: var(--contrast-color);
  }

  .scroll-top.active {
    visibility: visible;
    opacity: 1;
    bottom: 15px;
  }
</style>
