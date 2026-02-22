<script lang="ts">
    import Icon from "@iconify/svelte";

    let { title, imgs, isCarousel } = $props();

    let imgList = $derived(imgs);
    let isPaused = $state(false);
    const createCarousel = $derived(isCarousel);

    $effect(() => {
        if (!isPaused && createCarousel) {
            const interval = setInterval(() => {
                const [first, ...rest] = imgList;
                imgList = [...rest, first];
            }, 3000);

            return () => clearInterval(interval);
        }
    });

    function prev() {
        if (!isPaused) {
            isPaused = true;
            const last = imgList.at(-1);
            const rest = imgList.slice(0, -1);
            imgList = [last!, ...rest];
            isPaused = false;
        } else {
            const last = imgList.at(-1);
            const rest = imgList.slice(0, -1);
            imgList = [last!, ...rest];
        }
    }

    function next() {
        if (!isPaused) {
            isPaused = true;
            const [first, ...rest] = imgList;
            imgList = [...rest, first];
            isPaused = false;
        } else {
            const [first, ...rest] = imgList;
            imgList = [...rest, first];
        }
    }
</script>

{#if createCarousel}
    <div class="project-carousel">
        <div class="carousel-btns">
            <button class="btn-prev" onclick={prev}>
                <Icon icon="mdi:skip-previous"></Icon>
            </button>
            <button class="btn-pause" onclick={() => isPaused = !isPaused}>
                <Icon icon={isPaused ? "mdi:play" : "mdi:pause"}></Icon>
            </button>
            <button class="btn-next" onclick={next}>
                <Icon icon="mdi:skip-next"></Icon>
            </button>
        </div>
        <ul class="carousel" style="width: {imgs.length * 100}%">
        {#each imgList as img, index (img)}
            <li class="carousel-item">
                <img src="/{img}" alt="{title} {index + 1}">
            </li>
        {/each}
        </ul>
    </div>
{:else}
    <div class="project-imgs">
        {#each imgList as img, index}
            <img src="/{img}" alt="{title} {index + 1}">
        {/each}
    </div>
{/if}

<style>
    .project-carousel {
        overflow: hidden;
    }

    .carousel {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
    } 

    .carousel li {
        width: 100%;
    }

    .carousel img {
        width: 100%;
        /*height: 100%;*/
    }

    .project-carousel {
        margin-top: -4rem;
    }

    .project-carousel .carousel-btns {
        position: relative;
        top: 4rem;
        text-align: center;
        padding: 1rem;
    }

    .project-carousel .carousel-btns button {
        background: color-mix(in srgb, var(--secondary-color), transparent 70%);
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
        color: var(--default-color);
        font-size: 2rem;
        line-height: 0;
    }
    
    .project-carousel .carousel-btns button:hover {
        background: color-mix(in srgb, var(--secondary-color), transparent 30%);
        transform: translateY(-0.2rem);
        box-shadow: 0 0.2rem 0.2rem var(--background-color);
    }

    .btn-prev {
        border-radius: 1rem 0 0 1rem;
    }
    
    .btn-next {
        border-radius: 0 1rem 1rem 0;
    }

    .project-imgs {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
    }

    @media (max-width: 1740px) {
        .project-imgs {
            flex-direction: column;
            gap: 2rem;
        }
    }

    @media (max-width: 1500px) {
        .project-imgs {
            flex-direction: row;
            gap: 1rem;
        }
    }

    @media (max-width: 1320px) {
        .project-imgs {
            flex-direction: column;
            gap: 2rem;
        }
    }
    
    @media (max-width: 991px) {
        .project-imgs {
            flex-direction: row;
            gap: 1rem;
        }
    }

    @media (max-width: 940px) {
        .project-imgs {
            flex-direction: column;
            gap: 2rem;
        }
    }

    .project-imgs img {
        flex: 1;
        width: 100%;
    }
</style>