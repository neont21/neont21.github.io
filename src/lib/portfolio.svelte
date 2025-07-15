<script>
    import { Col, Container, Row } from "@sveltestrap/sveltestrap";
    import PortfolioItem from "./portfolio-components/portfolio-item.svelte";
    import { portfolios } from "./portfolio-components/data.js";
    import { onMount } from "svelte";
    import AOS from "aos";

    onMount(() => {
        // v Animation on scroll function and init
        function aosInit() {
            AOS.init({
                duration: 600,
                easing: "ease-in-out",
                once: true,
                mirror: false,
            });
        }
        window.addEventListener("load", aosInit);
        // ^ Animation on scroll function and init

        // v Init isotope layout and filters
        document
            .querySelectorAll(".isotope-layout")
            .forEach(function (isotopeItem) {
                let layout =
                    isotopeItem.getAttribute("data-layout") ?? "masonry";
                let filter =
                    isotopeItem.getAttribute("data-default-filter") ?? "*";
                let sort =
                    isotopeItem.getAttribute("data-sort") ?? "original-order";

                let initIsotope;
                imagesLoaded(
                    isotopeItem.querySelector(".isotope-container"),
                    function () {
                        initIsotope = new Isotope(
                            isotopeItem.querySelector(".isotope-container"),
                            {
                                itemSelector: ".isotope-item",
                                layoutMode: layout,
                                filter: filter,
                                sortBy: sort,
                            },
                        );
                    },
                );

                isotopeItem
                    .querySelectorAll(".isotope-filters li")
                    .forEach(function (filters) {
                        filters.addEventListener(
                            "click",
                            function () {
                                isotopeItem
                                    .querySelector(
                                        ".isotope-filters .filter-active",
                                    )
                                    .classList.remove("filter-active");
                                this.classList.add("filter-active");
                                initIsotope.arrange({
                                    filter: this.getAttribute("data-filter"),
                                });
                                if (typeof aosInit === "function") {
                                    aosInit();
                                }
                            },
                            false,
                        );
                    });
            });
        // ^ Init isotope layout and filters

        // v Initiate glightbox
        const glightbox = GLightbox({
            selector: ".glightbox",
        });
        // ^ Initiate glightbox
    });
</script>

<section id="portfolio" class="portfolio section">
    <Container class="section-title" data-aos="fade-up">
        <h2>작업물</h2>
    </Container>

    <Container data-aos="fade-up" data-aos-delay="100">
        <div
            class="isotope-layout"
            data-default-filter="*"
            data-layout="masonry"
            data-sort="original-order"
        >
            <div class="lg=12 filter-sidebar">
                <div
                    class="filters-wrapper"
                    data-aos="fade-right"
                    data-aos-delay="150"
                >
                    <ul class="portfolio-filters isotope-filters">
                        <li data-filter="*" class="filter-active">
                            모든 포트폴리오 작업물
                        </li>
                        <li data-filter=".filter-web">웹 & 디지털 콘텐츠</li>
                        <li data-filter=".filter-poster">포스터 디자인</li>
                        <li data-filter=".filter-product">제품 & 캐릭터</li>
                    </ul>
                </div>
            </div>

            <Col lg="12">
                <!-- v Portfolio Container -->
                <Row
                    class="gy-4 portfolio-container isotope-container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    {#each portfolios as item}
                        <PortfolioItem data={item} />
                    {/each}
                </Row>
                <!-- ^ Portfolio Container -->
            </Col>
        </div>
    </Container>
</section>

<style>
    /* @media (max-width: 991px) { */
    .portfolio .filter-sidebar {
        margin-bottom: 30px;
    }
    /* } */

    .portfolio .filters-wrapper {
        /* background-color: color-mix(in srgb, var(--surface-color), var(--default-color) 3%); */
        background: linear-gradient(
            135deg,
            var(--surface-color),
            var(--secondary-color)
        );
        opacity: 0.85;
        border: 1px solid
            color-mix(in srgb, var(--default-color), transparent 80%);
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
    }

    @media (max-width: 991px) {
        .portfolio .filters-wrapper {
            padding: 20px;
        }
    }

    .portfolio .portfolio-filters {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        /* flex-direction: column; */
        flex-wrap: wrap;
        gap: 10px;
    }

    @media (max-width: 991px) {
        .portfolio .portfolio-filters {
            flex-direction: row;
            /* flex-wrap: wrap; */
            justify-content: center;
        }
    }

    .portfolio .portfolio-filters li {
        cursor: pointer;
        padding: 12px 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: var(--default-color);
        transition: all 0.3s ease-in-out;
        border-radius: 6px;
        background: transparent;
        position: relative;
        border-left: 3px solid transparent;
    }

    @media (max-width: 991px) {
        .portfolio .portfolio-filters li {
            padding: 8px 16px;
            background-color: color-mix(
                in srgb,
                var(--default-color),
                transparent 90%
            );
            border: 1px solid
                color-mix(in srgb, var(--accent-color), transparent 80%);
            border-left-width: 3px;
        }
    }

    .portfolio .portfolio-filters li:hover {
        color: var(--accent-color);
        background-color: color-mix(
            in srgb,
            var(--accent-color),
            transparent 90%
        );
        border-left-color: color-mix(
            in srgb,
            var(--accent-color),
            transparent 50%
        );
    }

    .portfolio .portfolio-filters li.filter-active {
        color: var(--accent-color);
        background-color: color-mix(
            in srgb,
            var(--accent-color),
            transparent 90%
        );
        border-left-color: var(--accent-color);
        font-weight: 600;
    }
</style>
