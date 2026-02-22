<script lang="ts">
    import Icon from "@iconify/svelte";

    let { data } = $props();
</script>

<div class="project-item filter-{data.category}">
    <img src="/{data.thumb}" alt="{data.title}" class="project-thumb" />
    <div class="project-info">
        <div>
            <span class="category">
                {data.info.category}
            </span>
            <h4>{data.title}</h4>
        </div>
        <a href="/{data.tag}" title="상세 정보">
            <Icon icon="mdi:arrow-right-drop-circle" class="project-icon"></Icon>
        </a>
        <div class="deco"></div>
    </div>
</div>

<style>
    .project-item {
        height: 25rem;
        transition: 0.4s;
        position: relative;
        overflow: hidden;
        border-radius: 1rem;
        box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.08);
        flex: 1;
        min-width: 20rem;
    }

    .project-item .project-thumb {
        transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .project-item .project-info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 2rem;
        background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 100%);
        z-index: 10;
        transition: all 0.4s cubic-bezier(0.215, 0.61. 0.355, 1);
        transform: translateY(2rem);
        opacity: 0;
    }

    .project-item .project-info .category {
        display: inline-block;
        color: var(--accent-color);
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        margin-top: 2.5rem;
    }

    .project-item .project-info h4 {
        font-size: 1.5rem;
        color: var(--contrast-color);
        font-weight: bold;
        margin: 0.5rem 0 1rem 0;
    }

    .project-item .project-info a {
        width: fit-content;
        height: fit-content;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
        z-index: 10;
        overflow: visible;
    }

    :global .project-item .project-info a .project-icon {
        color: var(--contrast-color);
        width: 2.5rem;
        height: 2.5rem;
        background-color: color-mix(in srgb, var(--accent-color), transparent 30%);
        border-radius: 2rem;
        font-size: 1.5rem;
        transition: 0.1s;
    }
    
    :global .project-item .project-info a:hover .project-icon {
        background-color: var(--accent-color);
        transform: translateY(-0.2rem);
        box-shadow: 0.25rem 0.25rem 0.5rem var(--accent-color);
    }

    .project-item .project-info .deco {
        background-color: color-mix(in srgb, var(--accent-color), transparent 30%);
        width: 100%;
        height: 2rem;
        position: absolute;
        left: 0rem;
        right: 0rem;
        bottom: 0rem;
    }

    .project-item:hover {
        transform: translateY(-0.5rem);
    }

    .project-item:hover .project-thumb {
        transform: scale(1.08);
    }

    .project-item:hover .project-info {
        transform: translateY(0);
        opacity: 1;
    }
</style>