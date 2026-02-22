<script lang="ts">
    import DetailCarousel from "$lib/component-detail/detail-carousel.svelte";
    import DetailDescription from "$lib/component-detail/detail-description.svelte";
    import DetailInfo from "$lib/component-detail/detail-info.svelte";
    import DetailTitle from "$lib/component-detail/detail-title.svelte";
    
    let { data } = $props();
    let project = $derived(data.project);

</script>

<svelte:head>
    <title>{project.title}</title>
</svelte:head>

<DetailTitle title={project.title} />
<section id="detail-page">
    <div class="detail-top">
        <DetailCarousel title={project.title} imgs={project.imgs} isCarousel={project.carousel} />
        <DetailInfo info={project.info} />
    </div>
    <div class="detail-bottom">
        <DetailDescription tableType={project.table} analysis={project.swot} description={project.description}/>
    </div>
</section>

<style>
    #detail-page {
        padding: 0 4rem;
        margin-top: 10rem;
    }

    .detail-top {
        display: flex;
        gap: 2rem;
    }

    :global .detail-top>div:first-child {
        width: 70%;
    }

    :global .detail-top>div:last-child {
        width: 30%;
    }

    @media (max-width: 1500px) {
        .detail-top {
            flex-direction: column-reverse;
        }
        
        :global .detail-top>div:first-child {
            width: initial;
        }

        :global .detail-top>div:last-child {
            width: initial;
        }
    }

    @media (max-width: 1199px) {
        .detail-top {
            flex-direction: row;
        }
        
        :global .detail-top>div:first-child {
            width: 70%;
        }

        :global .detail-top>div:last-child {
            width: 30%;
        }
    }

    @media (max-width: 991px) {
        .detail-top {
            flex-direction: column-reverse;
        }
        
        :global .detail-top>div:first-child {
            width: initial;
        }

        :global .detail-top>div:last-child {
            width: initial;
        }
    }

</style>