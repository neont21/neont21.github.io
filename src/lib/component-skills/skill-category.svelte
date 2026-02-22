<script lang="ts">
    import SkillItem from "./skill-item.svelte";
    import { skillList } from "./skill-list";

    let { category } = $props();

    let list = skillList.find((element) => element.category === category) ?? { items: [], };
    let items = list.items;
</script>

<div class="skill-category">
    <h3>{ category }</h3>
    <div class="skill-list">
        {#each items as item}
            <SkillItem {item}/>
        {/each}
    </div>
</div>

<style>
    .skill-category {
        flex: 1;
        background: linear-gradient(135deg, var(--surface-color), var(--secondary-color));
        opacity: 0.85;
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.05);
        height: 100%;
        transition: transform 0.3s;
        min-width: 20rem;
    }

    .skill-category:hover {
        transform: scale(0.2rem);
    }

    .skill-category h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
        position: relative;
        padding-bottom: 1rem;
        border-bottom: 2px solid var(--accent-color);
    }

    @media (max-width: 991px) {
        .skill-category {
            margin-bottom: 2rem;
        }

        .skill-category:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: 991px) {
        .skill-category {
            min-width: auto;
        }
    }
</style>