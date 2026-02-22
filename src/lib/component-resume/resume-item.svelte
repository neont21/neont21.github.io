<script lang="ts">
    import Icon from "@iconify/svelte";

    let { title="", period="", location="", tasks=[] } = $props();
</script>

<div class="resume-item">
    <h4>{@html title}</h4>
    <h5>{period}</h5>
    {#if location}
    <p class="company">
        <Icon icon="mdi:office-building" class="company-icon"></Icon>
        <span>{location}</span>
    </p>
    {/if}
    <ul>
        {#each tasks as task}
            <li>{@html task}</li>
        {/each}
    </ul>
</div>

<style>
    .resume-item {
        padding-left: 1.5rem;
        border-left: 2px solid var(--accent-color);
        margin-bottom: 2rem;
        padding-bottom: 0.5rem;
        position: relative;
        min-width: 32rem;
        word-break: keep-all;
    }

    .resume-item:before {
        content: "";
        position: absolute;
        width: 1.2rem;
        height: 0.2rem;
        left: -0.6rem;
        bottom: 0;
        background: var(--accent-color);
    }

    .resume-item h4:before {
        content: "";
        position: absolute;
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 1rem;
        left: -0.6rem;
        top: 0;
        background: var(--accent-color);
    }

    .resume-item h4 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--heading-color);
        font-weight: bold;
    }

    .resume-item h5 {
        font-size: 1.2rem;
        margin: 0 0 0.5rem 0;
        color: var(--accent-color);
    }

    .resume-item .company {
        font-size: 1rem;
        margin: 0;
        color: var(--heading-color);
        display: flex;
        gap: 0.5rem;
        align-content: center;
    }

    :global .resume-item .company-icon {
        height: 1rem;
        width: 1rem;
    }

    .resume-item ul {
        padding-left: 1.5rem;
        margin: 1rem 0 0.5rem 0;
    }

    .resume-item ul li {
        margin-bottom: 0.5rem;
        color: var(--default-color);
        font-size: 1rem;
    }

    .resume-item p {
        color: var(--default-color);
        margin-bottom: 0;
    }

    @media (max-width: 991px) {
        .resume-item {
            min-width: initial;
        }
    }
</style>