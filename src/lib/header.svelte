<script lang="ts">
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    let toggle = $state(true);
    let headerShow = $state(false);
    
    function toggleHeader() {
        document.querySelector("#header")?.classList.toggle("header-show");
        toggle = !toggle;
    }

    onMount(() => {
        document.querySelectorAll(".navmenu a").forEach(navmenu => {
            navmenu.addEventListener("click", () => {
                if (document.querySelector(".header-show")) {
                    toggleHeader();
                }
            })
        });

        // navmenu scrollspy
        const navmenuLinks = document.querySelectorAll<HTMLAnchorElement>(".navmenu a");

        function scrollSpy() {
            navmenuLinks.forEach(link => {
                if (!link.hash) return;

                const section = document.querySelector<HTMLElement>(link.hash);
                if (!section) return;

                let position = window.scrollY + 200;
                if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
                    document.querySelectorAll(".navmenu a.active").forEach(lk => {
                        lk.classList.remove("active");
                    });
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });
        }
        
        window.addEventListener("load", scrollSpy);
        document.addEventListener("scroll", scrollSpy);
    });
</script>

<header id="header">
    <button id="header-btn" aria-label="메뉴 열기" class="{headerShow ? "header-show" : ""}" onclick={toggleHeader}>
        <Icon icon="mdi:{toggle ? "menu" : "close"}"></Icon>
    </button>

    <div id="header-content">
        <!-- SECTION: Navigation Menus -->
        <nav class="navmenu">
            <a href="/#hero" class="navitem">
                <Icon icon="mdi:home" class="navicon"></Icon>
                홈
            </a>
            <a href="/#about" class="navitem">
                <Icon icon="mdi:account" class="navicon"></Icon>
                소개
            </a>
            <a href="/#resume" class="navitem">
                <Icon icon="mdi:file-document" class="navicon"></Icon>
                이력
            </a>
            <a href="/#projects" class="navitem">
                <Icon icon="mdi:image-multiple" class="navicon"></Icon>
                작업물
            </a>
        </nav>
        <!-- !SECTION -->

        <!-- SECTION: Social Links -->
        <div id="social-links">
            <a href="https://mastodon.art/@edenjint3927" rel="me" target="_blank" aria-label="Mastodon">
                <Icon icon="mdi:mastodon" class="social-icon"></Icon>
            </a>
            <a href="https://www.instagram.com/edenjint3927" target="_blank" aria-label="Instagram">
                <Icon icon="mdi:instagram" class="social-icon"></Icon>
            </a>
            <a href="http://t.me/edenjint3927" target="_blank" aria-label="Telegram">
                <Icon icon="mdi:telegram" class="social-icon"></Icon>
            </a>
            <a href="https://litt.ly/danhwi" target="_blank" aria-label="Littly">
                <Icon icon="mdi:link" class="social-icon"></Icon>
            </a>
        </div>
        <!-- !SECTION -->
    </div>
</header>

<style>
    #header {
        color: var(--default-color);
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0 2rem;
        width: 20rem;
        transition: all ease-in-out 0.3s;
        overflow-y: auto;
        z-index: 1000;
    }

    #header-content {
        border-radius: 2rem;
        padding: 1rem;
        background: linear-gradient(135deg, var(--background-color), var(--secondary-color));
        opacity: 0.85;
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
    }

    #social-links {
        margin: 0 0 1em 0;
        display: flex;
        gap: 1.2em;
    }

    #social-links a {
        flex: 1;
        font-size: 1.2em;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: color-mix(in srgb, var(--default-color), transparent 90%);
        color: var(--default-color);
        margin: 0 0.25em;
        border-radius: 50%;
        text-align: center;
        width: 2.5em;
        height: 2.5em;
        transition: 0.3s;
    }

    #social-links a:hover {
        color: var(--contrast-color);
        background: var(--accent-color);
    }

    
    @media (max-width: 1199px) {
        #header {
            left: -100%;
        }

        #header-btn {
            display: flex;
        }
    }

    :global #header.header-show {
        left: 0;
    }

    :global #header-btn {
        position: fixed;
        color: var(--contrast-color);
        background-color: var(--accent-color);
        font-size: 2rem;
        display: none;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        cursor: pointer;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
        transition: background-color 0.3s;
    }

    :global #header-btn:hover {
        background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
    }

    :global .navmenu {
        z-index: 8888;
        width: 100%;
        list-style: none;
        padding: 0 0 2em 0;
        margin: 0;
    }

    :global .navmenu a,
    :global .navmenu a:focus {
        color: var(--nav-color);
        padding: 1.2em 1.2em;
        font-family: var(--nav-font);
        font-size: 1.2em;
        font-weight: 400;
        display: flex;
        align-items: center;
        white-space: nowrap;
        transform: 0.3s;
        width: 100%;
    }

    :global .navicon {
        font-size: 1.2em;
        margin-right: 1.2em;
    }

    :global .navmenu a:hover,
    :global .navmenu a:hover .navicon,
    :global .navmenu .active,
    :global .navmenu .active .navicon,
    :global .navmenu .active:focus,
    :global .navmenu .active:focus .navicon {
        color: var(--nav-hover-color);
    }
</style>