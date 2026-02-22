<script lang="ts">
    import img_jw from "$lib/assets/joowon.jpg";
    import Skills from "$lib/skills.svelte";
    import Icon from "@iconify/svelte";

    import { inview } from "./actions";
    let isVisible = $state(false);
</script>

<section id="about" use:inview oninview={() => isVisible = true} class:active={isVisible} class="reveal">
    <!-- SECTION: Profile Card -->
    <div id="profile">
        <div id="profile-card" class:active={isVisible}>
            <div class="img-container">
                <img src="{img_jw}" alt="정주원">
            </div>
            <div class="profile-title">
                <h3>정주원</h3>
                <div class="profile-base">
                    <p>DOB | 1999. 01. 08.</p>
                    <p>Computer Science Enginnering</p>
                </div>
                <div class="profile-links">
                    <a href="https://brunch.co.kr/@danhwi">
                        <Icon icon="mdi:link"></Icon>
                        브런치 작가
                    </a>
                    <a href="https://tobe.aladin.co.kr/@danhwi">
                        <Icon icon="mdi:link"></Icon>
                        투비컨티뉴드 작가
                    </a>
                </div>
                <div class="contact-links">
                    <a href="mailto:neont21@gmail.com">
                        <Icon icon="mdi:envelope"></Icon>
                        neont21@gmail.com
                    </a>
                    <a href="tel:+821087080383">
                        <Icon icon="mdi:telephone"></Icon>
                        +82 010-8708-0383
                    </a>
                    <p>
                        <Icon icon="mdi:map-marker"></Icon>
                        서울특별시 동북권
                    </p>
                </div>
            </div>
        </div>
        <!-- !SECTION -->
        <!-- SECTION: Profile Content -->
        <div id="profile-content" class:active={isVisible}>
            <div class="content-header">
                <span class="badge">
                    a.k.a. danhwi-jung
                </span>
                <h2>
                    글과 그림을 좋아하는
                    <span>디자이너</span>이자
                    <span>개발자</span>
                </h2>
                <div class="description">
                    <p>글과 그림, 다양한 형태로 세상과 소통하는 것을 좋아합니다. 디자인도 그 방식 중 하나입니다. 
                        무언가를 만들어 누군가에게 닿는다는 것, 그 가능성이 저를 디자인으로 이끌었습니다.</p>
                    <p>단순한 미적 표현을 넘어, 기술적 이해와 창의적 문제 해결이 만날 때 디자인은 더 단단해진다고 생각합니다.
                        그래서 저는 디자인을 공부하면서도 개발을 놓지 않았습니다.
                        개발자의 시각은 사용자 경험을 구조적으로 이해하는 데 도움이 되고, 그 이해가 실질적인 해결책으로 이어진다고 믿기 때문입니다.</p>
                    <p>보기 좋은 것과 잘 작동하는 것이 함께할 때, 비로소 완성된 디자인이라고 생각합니다.
                        그 사이 어딘가에서 저만의 작업 방식을 만들어가고 있습니다.</p>
                </div>
            </div>
        </div>
        <!-- !SECTION -->
    </div>
    <Skills/>
</section>

<style>
    #profile {
        display: flex;
        gap: 4rem;
    }

    /* SECTION: (CSS) Profile Card */
    #profile-card {
        background: linear-gradient(135deg, var(--surface-color) 0%, color-mix(in srgb, var(--surface-color), var(--accent-color) 5%));
        border-radius: 2rem;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0.5rem 0.5rem 1rem var(--accent-color);
        border: 1px solid color-mix(in srgb, var(--accent-color), transparent 90%);
        position: relative;
        width: 20rem;
        opacity: 0;
        transform: translateX(-2rem);
        transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    #profile-card.active {
        opacity: 1;
        transform: translateX(0);
    }

    #profile-card .img-container {
        width: 20rem;
        height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
    }

    #profile-card .img-container img {
        margin: -7.5rem;
    }

    #profile-card .profile-title h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: var(--heading-color);
        letter-spacing: 100%;
        text-indent: 1.5rem;
    }

    #profile-card .profile-title .profile-base p,
    #profile-card .profile-title .profile-links a {
        margin: 0.2rem;
    }

    #profile-card .profile-title .profile-links {
        display: flex;
        flex-direction: column;
        padding: 1rem;
    }

    #profile-card .profile-title .contact-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    #profile-card .profile-title .contact-links a,
    #profile-card .profile-title .contact-links p {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        margin: 0;
        background: color-mix(in srgb, var(--surface-color), var(--background-color) 50%);
        border-radius: 0.75rem;
        color: var(--default-color);
        transition: all 0.3s;
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
    }

    #profile-card .profile-title .contact-links a:hover,
    #profile-card .profile-title .contact-links p:hover {
        background-color: var(--accent-color);
        color: var(--contrast-color);
        transform: translateY(0.2rem);
        box-shadow: 0 0.5rem 0.5rem color-mix(in srgb, var(--accent-color), transparent 70%);
    }
    /* !SECTION */

    /* SECTION: (CSS) Profile Content */
    #profile-content .badge {
        display: inline-block;
        background: linear-gradient(135deg, var(--accent-color), color-mix(in srgb, var(--accent-color), var(--heading-color) 20%));
        color: var(--contrast-color);
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        font-weight: bold;
        letter-spacing: 0.5px;
    }

    #profile-content {
        transform: translateY(4rem);
        transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    #profile-content.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    #profile-content h2 {
        font-size: 2.25rem;
        font-weight: bold;
        word-break: keep-all;
    }

    #profile-content h2 span {
        color: var(--accent-color);
    }

    #profile-content .description {
        font-size: 1.2rem;
        line-height: 160%;
        text-align: justify;
        word-break: keep-all;
    }

    @media (max-width: 1299px) {
        #profile {
            flex-direction: column;
        }

        #profile-card {
            margin: 0 auto;
        }
    }
    
    @media (max-width: 540px) {
        #profile-card {
            width: 60vw;
        }

        #profile-card .img-container {
            width: initial;
            height: initial;
        }
    }
</style>