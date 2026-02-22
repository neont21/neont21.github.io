<script lang="ts">
    import SkillCategory from "$lib/component-skills/skill-category.svelte";
    import { skillList } from "$lib/component-skills/skill-list";
    import { onMount } from "svelte";

    import { inview } from "./actions";
    let isVisible = $state(false);

    function setupWaypoints() {
        const skillwidgets = document.querySelectorAll<HTMLElement>(".skill-list");

        if (!skillwidgets.length || typeof window === "undefined" || !("IntersectionObserver" in window)) {
            return;
        }

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const container = entry.target as HTMLElement;
                const progressBars = container.querySelectorAll<HTMLElement>(".skill-progress .progress-bar");

                progressBars.forEach((bar) => {
                    const value = bar.getAttribute("aria-valuenow");
                    if (value) {
                        bar.style.width = `${value}%`;
                    }
                });

                obs.unobserve(container);
            });
        }, { threshold: 0.2 });

        skillwidgets.forEach((item) => observer.observe(item));
    }

    onMount(() => {
        setupWaypoints();
    });
</script>

<section id="skills" use:inview oninview={() => isVisible = true} class:active={isVisible} class="reveal">
    <div class="section-title" class:active={isVisible}>
        <h2>기술</h2>
    </div>
    <div class="skill-container" class:active={isVisible}>
        {#each skillList as skills}
            <SkillCategory category={skills.category} />
        {/each}
    </div>
</section>

<style>
    #skills {
        padding: 8rem 0 2rem 0;
    }
    
    .section-title {
        opacity: 0;
        transition: opacity 1s ease-out;
    }

    .section-title.active {
        opacity: 1;
    }

    .skill-container {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        padding: 1rem;
        transform: translateY(4rem);
        transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .skill-container.active {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 991px) {
        .skill-container {
            flex-direction: column;
        }
    }

    @media (max-width: 540px) {
        .skill-container {
            padding: 0;
        }
    }
</style>