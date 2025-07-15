<script lang="ts">
  import { Nav, NavItem, NavLink, Icon } from "@sveltestrap/sveltestrap";
  import { onMount } from "svelte";

  let toggle = $state(true);
  let headerShow = $state(false);

  function headerToggle() {
    document.querySelector('#header')?.classList.toggle('header-show');
    toggle = !toggle;
  }

  onMount(() => {
// v Hide mobile nav on same-page/hash links
  document.querySelectorAll('.navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });
    });
// ^ Hide mobile nav on same-page/hash links
    // v Navmenu Scrollspy
    let navmenulinks = document.querySelectorAll('.navmenu a');

    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return;
        let section = document.querySelector(navmenulink.hash);
        if (!section) return;
        let position = window.scrollY + 200;
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          navmenulink.classList.add('active');
        } else {
          navmenulink.classList.remove('active');
        }
      })
    }
    window.addEventListener('load', navmenuScrollspy);
    document.addEventListener('scroll', navmenuScrollspy);
    // ^ Navmenu Scrollspy
  });

</script>

<header
    id="header"
    class="header d-flex flex-column justify-content-center"
>
    <!-- svelte-ignore attribute_quoted -->
    <Icon
        name="{toggle ? 'list' : 'x'}"
        class="header-toggle d-xl-none {headerShow ? 'header-show' : ''}" 
        onclick={headerToggle}
    />

    <div class="header-container d-flex flex-column align-items-start">
        <Nav vertical class="navmenu">
                <NavLink href="/#hero">
                        <Icon name="house" class="navicon" />
                        홈
                </NavLink>
                <NavLink href="/#about">
                        <Icon name="person" class="navicon" />
                        소개
                </NavLink>
                <NavLink href="/#resume">
                        <Icon name="file-earmark-text" class="navicon" />
                        이력
                </NavLink>
                <NavLink href="/#portfolio" active>
                        <Icon name="images" class="navicon" />
                        작업물
                </NavLink>
        </Nav>
        <div class="social-links text-center">
            <!-- <a href="https://twitter.com/edenjint3927" class="twitter"><i class="bi bi-twitter-x"></i></a> -->
            <a href="https://mastodon.art/@edenjint3927" rel="me" aria-label="mastodon">
                <Icon name="mastodon"></Icon>
            </a>
            <a href="https://instagram.com/edenjint3927" aria-label="instagram">
                <Icon name="instagram"></Icon>
            </a>
            <a href="http://t.me/edenjint3927" aria-label="telegram">
                <!-- <i class="bi bi-telegram"></i> -->
                <Icon name="telegram"></Icon>
                </a>
            <a href="https://litt.ly/danhwi" aria-label="littly">
                <Icon name="link-45deg"></Icon>
            </a>
        </div>
      </div>
</header>

<style>
.header {
    --background-color: #1b1b1b;
    color: var(--default-color);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0 15px;
    width: 300px;
    transition: all ease-in-out 0.3s;
    overflow-y: auto;
    z-index: 997;
}

.header .header-container {
    border-radius: 20px;
    padding: 15px;
    /* background-color: var(--background-color); */
    background: linear-gradient(
        135deg,
        var(--background-color),
        var(--secondary-color)
    );
    opacity: 0.85;
    border: 1px solid
        color-mix(in srgb, var(--default-color), transparent 80%);
}

.header .social-links {
    margin: 0 0 10px 0;
    display: flex;
    gap: 20px;
}

.header .social-links a {
    flex: 1;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--default-color), transparent 90%);
    color: var(--default-color);
    margin: 0 2px;
    border-radius: 50%;
    text-align: center;
    width: 40px;
    height: 40px;
    transition: 0.3s;
}

.header .social-links a:hover {
    color: var(--contrast-color);
    background: var(--accent-color);
}

@media (max-width: 1199px) {
    .header {
        left: -100%;
    }
}

:global .header.header-show {
    left: 0;
}

:global .header .header-toggle {
    color: var(--contrast-color);
    background-color: var(--accent-color);
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 9999;
    transition: background-color 0.3s;
}

:global .header .header-toggle:hover {
    color: var(--contrast-color);
    background-color: color-mix(
        in srgb,
        var(--accent-color) 90%,
        white 15%
    );
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
:global .navmenu {
    z-index: 9997;
    width: 100%;
    list-style: none;
    padding: 0 0 20px 0;
    margin: 0;
}

:global .navmenu a,
:global .navmenu a:focus {
    color: var(--nav-color);
    padding: 15px 10px;
    font-family: var(--nav-font);
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    white-space: nowrap;
    transition: 0.3s;
    width: 100%;
}

:global .navmenu a .navicon,
:global .navmenu a:focus .navicon {
    font-size: 20px;
    margin-right: 10px;
}

:global .navmenu a:hover,
:global .navmenu .active,
:global .navmenu .active:focus {
    color: var(--nav-hover-color);
}

:global .navmenu a:hover .navicon,
:global .navmenu .active .navicon,
:global .navmenu .active:focus .navicon {
    color: var(--accent-color);
}
</style>