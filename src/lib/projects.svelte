<script lang="ts">
    import ProjectItem from "$lib/component-projects/project-item.svelte";
    import { projects } from "./component-projects/projects";
    import { onMount } from "svelte";
    import { flip } from "svelte/animate";

    import { inview } from "./actions";
    import { fade } from "svelte/transition";
    let isVisible = $state(false);

    let currentFilter = $state("*");
    let filteredProjects = $derived(currentFilter === "*"
        ? projects
        : projects.filter(p => p.category === currentFilter)
    );

    onMount(() => {
        document.querySelectorAll(".project-filter li").forEach((filters) => {
            filters.addEventListener("click", () => {
                document.querySelector(".filter-active")?.classList.remove("filter-active");
                filters.classList.add("filter-active");
            });
        });
    });

    const applyFilter = (fitlerValue: string) => {
        currentFilter = fitlerValue;
    };

</script>

<section id="projects" use:inview oninview={() => isVisible = true} class:active={isVisible} class="reveal">
    <div class="section-title" class:active={isVisible}>
        <h2>작업물</h2>
    </div>
    <div class="project-container" class:active={isVisible}>
        <!-- SECTION: FILTER BAR -->
        <div class="filter-bar">
            <ul class="project-filter">
                <li data-filter="*" class="filter-active">
                    <button onclick={() => applyFilter("*")}>
                        모든 작업물
                    </button>
                </li>
                <li data-filter=".filter-web">
                    <button onclick={() => applyFilter("web")}>
                        웹 및 디지털 콘텐츠
                    </button>
                </li>
                <li data-filter=".filter-poster">
                    <button onclick={() => applyFilter("poster")}>
                        포스터 디자인
                    </button>
                </li>
                <li data-filter=".filter-product">
                    <button onclick={() => applyFilter("product")}>
                        제품 및 캐릭터
                    </button>
                </li>
            </ul>
        </div>
        <!-- !SECTION -->
        <!-- SECTION: PROJECTS -->
        <div class="project-gallery">
            {#each filteredProjects as project (project.tag)}
                <div animate:flip={{duration: 400}} transition:fade={{duration: 200}} class="wrap-project-item">
                    <ProjectItem data={project} />
                </div>
            {/each}
        </div>  
        <!-- !SECTION -->
    </div>
</section>

<style>
    #projects {
        padding-top: 2rem;
    }

    .section-title {
        opacity: 0;
        transition: opacity 1s ease-out;
    }

    .section-title.active {
        opacity: 1;
    }

    .project-container {
        opacity: 0;
        transform: translateY(4rem);
        transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .project-container.active {
        transform: translateY(0);
        opacity: 1;
    }

    .filter-bar {
        background: linear-gradient(135deg, var(--surface-color), var(--secondary-color));
        opacity: 0.85;
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 0.3rem 1.5rem rgba(0, 0, 0, 0.85);
    }

    .filter-bar .project-filter {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .filter-bar .project-filter li{
        transition: all 0.3s ease-in-out;
        border-radius: 2rem;
        color: var(--default-color);
        background: transparent;
        border: 2px solid transparent;
    }

    .filter-bar .project-filter li button{
        cursor: pointer;
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1;
        position: relative;
        min-width: 8rem;
        text-align: center;
        color: var(--default-color);
        background: transparent;
        border: 2px solid transparent;
    }
    
    .filter-bar .project-filter li:hover {
        color: var(--accent-color);
        background-color: color-mix(in srgb, var(--surface-color), transparent 90%);
        border: 2px solid color-mix(in srgb, var(--accent-color), transparent 80%);
    }

    .filter-bar .project-filter li.filter-active {
        color: var(--accent-color);
        background-color: color-mix(in srgb, var(--surface-color), transparent 90%);
        border: 2px solid var(--accent-color);
        box-shadow: 0.25rem 0.25rem 0.5rem var(--accent-color);
        font-weight: bold;
    }
    

    @media (max-width: 1440px) {
        .filter-bar .project-filter li {
            min-width: 6rem;
        }
    }

    @media (max-width: 1325px) {
        .filter-bar .project-filter {
            gap: 0;
        }
    }

    @media (max-width: 1276px) {
        .filter-bar .project-filter li {
            min-width: 10rem;
        }
    }

    @media (max-width: 1199px) {
        .filter-bar .project-filter li {
            min-width: 8rem;
        }
    }

    @media (max-width: 993px) {
        .filter-bar .project-filter {
            gap: 1rem;
        }
        .filter-bar .project-filter li {
            min-width: 12rem;
        }
    }
    
    @media (max-width: 746px) {
        .filter-bar .project-filter li {
            min-width: 8rem;
        }
    }

    @media (max-width: 699px) {
        .filter-bar {
            width: fit-content;
            margin: 0 auto;
        }

        .filter-bar .project-filter {
            flex-direction: column;
        }

        .filter-bar .project-filter li {
            width: fit-content;
            margin: 0 auto;
        }
    }

    .project-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding-top: 2rem;
    }

    .wrap-project-item {
        flex: 1;
    }
</style>