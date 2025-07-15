<script>
    import {
        Breadcrumb,
        BreadcrumbItem,
        Carousel,
        CarouselControl,
        CarouselIndicators,
        CarouselItem,
        Col,
        Container,
        Row,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    let { data } = $props();

    const portfolio = data.portfolio;
    const info = portfolio.info;
    const swot = portfolio.swot;
    const imgs = portfolio.imgs;

    let activeIndex = $state(0); // for Carousel
    

    let interval;
    const start = () => interval = setInterval(() => activeIndex = (activeIndex + 1) % imgs.length, 5000);
	const stop = () => clearInterval(interval);

	onMount(() => {
		start();
		return () => stop(); //executed when component is destroyed
	})
</script>

<svelte:head>
    <title>세부 정보 ― {portfolio.title}</title>
</svelte:head>

<div class="page-title dark-background">
    <Container
        class="d-lg-flex justify-content-between align-items-center title-container"
    >
        <h1 class="mb-2 mb-lg-0">{portfolio.title}</h1>
        <Breadcrumb divider="/" listClassName="breadcrumb">
            <BreadcrumbItem>
                <a href="/#portfolio">메인 화면</a>
            </BreadcrumbItem>
            <BreadcrumbItem active style="color:white">세부 정보</BreadcrumbItem
            >
        </Breadcrumb>
    </Container>
</div>

<section id="portfolio-details" class="portfolio-details section">
    <Container data-aos="fade-up" data-aos-delay="100">
        <Row class="gy-4">
            <Col lg="8">
                {#if portfolio.carousel}
                    <Carousel items={imgs} interval={3000} ride>
                        <CarouselIndicators bind:activeIndex items={imgs}/>
                        <div class="carousel-inner">
                            {#each imgs as item, index}
                                <CarouselItem
                                    bind:activeIndex
                                    itemIndex={index}
                                >
                                    <div class="cl-img-wrap">
                                            <img
                                                src="/{item}"
                                                alt="{portfolio.title} {index + 1}"
                                                class="carousel-img"
                                            />
                                    </div>
                                </CarouselItem>
                            {/each}
                        </div>

                        <CarouselControl
                            direction="prev"
                            bind:activeIndex
                            items={imgs}
                            class="carousel-ctrl"
                        />
                        <CarouselControl
                            direction="next"
                            bind:activeIndex
                            items={imgs}
                            class="carousel-ctrl"
                        />
                    </Carousel>
                {:else}
                    <Row>
                        {#each imgs as img, index}
                            <Col>
                                <div class="cl-img-wrap">
                                    <!-- {#await import(`../${img}`) then { default: src }} -->
                                        <img
                                                src="/{img}"
                                            alt="{portfolio.title} {index + 1}"
                                            class="col-img"
                                        />
                                    <!-- {/await} -->
                                </div>
                            </Col>
                        {/each}
                    </Row>
                {/if}
            </Col>

            <Col lg="4">
                <div
                    class="portfolio-info"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <h3>작업물 정보</h3>
                    <ul>
                        <li><strong>분류</strong>: {info.category}</li>
                        <li><strong>사용한 도구</strong>: {info.tools}</li>
                        <li><strong>작업 시기</strong>: {info.period}</li>
                    </ul>
                </div>
            </Col>

            <Col lg="12">
                <div
                    class="portfolio-description"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    <h2>기획 의도 및 설명</h2>

                    <Row class="gy-4">
                        {#if portfolio.table === "swot"}
                            <Col lg="5">
                                <table class="swot-table">
                                    <caption>SWOT 분석</caption>
                                    <tbody>
                                        <tr>
                                            <th>S - 강점</th>
                                            <td>
                                                {@html swot.s}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>W - 약점</th>
                                            <td>
                                                {@html swot.w}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>O - 기회</th>
                                            <td>
                                                {@html swot.o}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>T - 위협</th>
                                            <td>
                                                {@html swot.t}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        {:else if portfolio.table === "social"}
                            <Col lg="5">
                                <table class="swot-table">
                                    <caption>SWOT 분석</caption>
                                    <tbody>
                                        <tr>
                                            <th>사회 현황</th>
                                            <td>
                                                {@html swot.s}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>정책 현황</th>
                                            <td>
                                                {@html swot.p}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>사회 인식</th>
                                            <td>
                                                {@html swot.a}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>커뮤니케이션 전략</th>
                                            <td>
                                                {@html swot.c}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Col>
                        {/if}
                        <Col lg="7">
                            <p>
                                {@html portfolio.description}
                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
</section>

<style>
    .page-title {
        color: var(--default-color);
        padding: 25px 0 0 0;
        position: relative;
    }

    :global .page-title .title-container {
        border-bottom: 1px solid
            color-mix(in srgb, var(--default-color), transparent 90%);
        padding-bottom: 25px;
    }

    .page-title h1 {
        font-size: 24px;
        font-weight: 700;
    }

    :global .page-title .breadcrumbs {
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-weight: 400;
    }

    .carousel-img {
        object-fit: cover;
        max-width: 98%;
        max-height: 80vh;
    }

    .col-img {
        max-width: 100%;
    }

    .portfolio-details .portfolio-info {
        padding: 30px;
        background-color: var(--surface-color);
        border-radius: 8px;
        box-shadow: 0 0 30px rgba(var(--default-color), 0.1);
    }

    .portfolio-details .portfolio-info h3 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid
            color-mix(in srgb, var(--default-color), transparent 90%);
    }

    .portfolio-details .portfolio-info ul {
        padding: 0;
        list-style: none;
    }

    .portfolio-details .portfolio-info ul li {
        padding: 10px 0;
        border-bottom: 1px solid
            color-mix(in srgb, var(--default-color), transparent 90%);
    }

    .portfolio-details .portfolio-info ul li:last-child {
        border-bottom: 0;
    }

    .portfolio-details .portfolio-info ul li strong {
        font-weight: 600;
        margin-right: 10px;
        color: var(--heading-color);
    }

    .portfolio-details .portfolio-description h2 {
        font-size: 26px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .portfolio-details .portfolio-description p {
        padding: 0;
        margin-bottom: 20px;
        color: color-mix(in srgb, var(--default-color), transparent 20%);
        text-align: justify;
    }

    @media (max-width: 991px) {
        .portfolio-details .portfolio-info {
            margin-top: 20px;
        }

        .col-img {
            max-width: 70vw;
        }
    }

    @media (max-width: 768px) {
        .portfolio-details .portfolio-description h2 {
            font-size: 24px;
        }
    }

    .swot-table {
        border: 1px solid var(--default-color);
        width: 100%;
    }

    .swot-table th,
    td {
        border: 1px solid var(--default-color);
        padding: 10px;
    }

    .swot-table th {
        width: 100px;
        text-align: center;
        background-color: color-mix(
            in srgb,
            var(--default-color),
            transparent 90%
        );
    }

    .portfolio-details .portfolio-info {
        background: linear-gradient(
            135deg,
            var(--background-color),
            var(--secondary-color)
        );
        opacity: 0.85;
        border: 1px solid
            color-mix(in srgb, var(--default-color), transparent 80%);
        padding: 20px;
    }

    .portfolio-details .portfolio-info > * {
        margin: 0px;
    }

    :global .cl-img-wrap {
        display: flex;
        justify-content: center;
        align-content: flex-start;
    }

    :global .carousel-ctrl {
        /* color: linear-gradient(
            135deg,
            var(--background-color),
            var(--secondary-color)
        ); */
        background-color: var(--secondary-color);
        opacity: 0%;
    }
</style>
