<script lang="ts">
    import Icon from '@iconify/svelte';

    let scroll = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />

<button id="scroll-top" aria-label="scroll-top" class="{scroll > 100 ? 'active' : ''}" onclick={() => {
    window.scrollTo({ top: 0, behavior: "smooth"});}}>
    <Icon icon="mdi:chevron-up"></Icon>
</button>

<style>
    #scroll-top {
        position: fixed;
        visibility: hidden;
        opacity: 0;
        color: var(--contrast-color);
        background-color: var(--accent-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
        right: 1rem;
        bottom: -10rem;
        z-index: 9999;
        transition: all 0.4s;
    }

    #scroll-top:hover {
        background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
    }

    #scroll-top.active {
        visibility: visible;
        opacity: 1;
        bottom: 1rem;
    }
</style>