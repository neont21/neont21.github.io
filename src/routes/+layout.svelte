<script>
  /**
   * Template Name: SnapFolio
   * Template URL: https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/
   * Updated: Jun 13 2025 with Bootstrap v5.3.6
   * Author: BootstrapMade.com
   * License: https://bootstrapmade.com/license/
   *
   * Font & Color Variables
   * Help: https://bootstrapmade.com/color-system/
   * Migration to Sveltestrap by Daniil A. Np.
   */

  import "$lib/global.css";

  import Header from "$lib/header.svelte";
  import Footer from "$lib/footer.svelte";
  import Scrollup from "$lib/scrollup.svelte";
  import { onMount } from "svelte";
  import AOS from "aos";


  let { children } = $props();

  onMount(() => {
    // v Preloader
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
    // ^ Preloader

    // Register service worker to control HTML caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }

    // v  Init typed.js with retry (like Waypoint)
    function setupTyped() {
      const selectTyped = document.querySelector(".typed");
      if (selectTyped && window.Typed) {
        let typed_strings = selectTyped.getAttribute("data-typed-items");
        let typed_strings_list = typed_strings?.split(",");
        new window.Typed(".typed", {
          strings: typed_strings_list,
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
        });
      } else if (selectTyped) {
        setTimeout(setupTyped, 100); // Retry after 100ms
      }
    }
    setupTyped();
    // ^ Init typed.js

    // v Animation on scroll function and init
    function aosInit() {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
      } else {
        setTimeout(aosInit, 100);
      }
    }
    window.addEventListener("load", aosInit);
    // ^ Animation on scroll function and init

    // v  Init swiper sliders
    // function initSwiper() {
    //   document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
    //     let config = JSON.parse(
    //       swiperElement.querySelector(".swiper-config").innerHTML.trim()
    //     );

    //     if (swiperElement.classList.contains("swiper-tab")) {
    //       initSwiperWithCustomPagination(swiperElement, config);
    //     } else {
    //       new Swiper(swiperElement, config);
    //     }
    //   });
    // }

    // window.addEventListener("load", initSwiper);
    // ^  Init swiper sliders

  });
</script>

<Header />

<main>
  {@render children()}
</main>

<Footer />

<Scrollup />

<!-- Preloader -->
<div id="preloader"></div>

<style>
  @media (min-width: 1200px) {
    main {
      margin-left: 330px;
    }
  }

  /* v Preloader */
  #preloader {
    position: fixed;
    inset: 0;
    z-index: 999999;
    overflow: hidden;
    background: var(--background-color);
    transition: all 0.6s ease-out;
  }

  #preloader:before {
    content: "";
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    border: 6px solid #ffffff;
    border-color: var(--accent-color) transparent var(--accent-color)
      transparent;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: animate-preloader 1.5s linear infinite;
  }

  @keyframes animate-preloader {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
  /* ^ Preloader */

  :global section,
  :global .section {
    color: var(--default-color);
    background-color: var(--background-color);
    padding: 60px 0;
    overflow: clip;
  }
</style>
