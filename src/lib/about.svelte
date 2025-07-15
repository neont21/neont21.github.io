<script>
    import imgJW from "$lib/assets/joowon.jpg";
    import { Col, Container, Icon, Row, Image } from "@sveltestrap/sveltestrap";
    import Skills from "$lib/skills.svelte";
</script>

<section id="about" class="about section">
    <Container data-aos="fade-up" data-aos-delay="100">
        <Row>
            <!-- v Profile Card -->
            <Col lg="4" data-aos="zoom-in" data-aos-delay="200">
                <div class="profile-card">
                    <div class="profile-header">
                        <div class="profile-image">
                            <Image
                                fluid
                                src={imgJW}
                                alt="Profile"
                                class="inner-image"
                            />
                        </div>
                        <div class="profile-badge">
                            <Icon name="check-circle-fill" class="badge-icon" />
                        </div>
                    </div>

                    <div class="profile-content">
                        <h3>정주원</h3>
                        <!-- <p class="profession"></p> -->

                        <p>
                            DOB | 1999. 01. 08.<br />
                            컴퓨터공학 전공
                        </p>
                        <p>
                            <a href="https://brunch.co.kr/@danhwi">
                                <Icon name="link" />
                                브런치 작가
                            </a><br />
                            <a href="https://tobe.aladin.co.kr/t/danhwi">
                                <Icon name="link" />
                                투비컨티뉴드 작가</a
                            >
                        </p>

                        <div class="contact-links">
                            <a
                                href="mailto:neont21@gmail.com"
                                class="contact-item"
                            >
                                <Icon name="envelope" class="contact-icon" />
                                neont21@gmail.com
                            </a>
                            <a href="tel:+821087080383" class="contact-item">
                                <Icon name="telephone" class="contact-icon" />
                                +82 010-8708-0383
                            </a>
                            <div class="contact-item">
                                <Icon name="geo-alt" class="contact-icon" />
                                서울특별시 동북권
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <!-- ^ Profile Card -->

            <!-- v About Content -->
            <Col lg="7" data-aos="fade-left" data-aos-delay="300">
                <div class="about-content">
                    <div class="section-header">
                        <span class="badge-text">a.k.a. danhwi-jung</span>
                        <h2>
                            글과 그림을 좋아하는
                            <span class="profession">디자이너</span>
                            이자
                            <span class="profession">개발자</span>
                        </h2>
                    </div>

                    <div class="description">
                        <p>
                            글과 그림, 그리고 그 밖의 다양한 형태로 세상과
                            소통하고자 합니다. 디자인 또한 그러한 소통 방식 중
                            하나라고 생각합니다. 단순한 미적 표현을 넘어, 기술적
                            이해와 창의적인 문제 해결이 함께 할 때 진정한 의미의
                            디자인을 해 나갈 수 있습니다.
                        </p>

                        <p>
                            디자인은 문제를 해결하는 창의적인 과정입니다. 저는
                            디자인 작업에 개발자적인 시각을 더하여 사용자 경험을
                            기술적 관점에서 이해하고, 그에 맞는 해결책을
                            제시하고자 합니다. 그리하여 보다 실용적이고 효과적인
                            디자인을 만들어 나가고자 합니다.
                        </p>
                    </div>
                </div>
            </Col>
            <!-- ^ About Content -->
        </Row>
    </Container>

    <Skills />
</section>

<style>
    .about .profile-card {
        background: linear-gradient(
            135deg,
            var(--surface-color) 0%,
            color-mix(in srgb, var(--surface-color), var(--accent-color) 5%)
                100%
        );
        border-radius: 2rem;
        padding: 2.5rem;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        border: 1px solid
            color-mix(in srgb, var(--accent-color), transparent 90%);
        position: relative;
        overflow: hidden;
    }

    .about .profile-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(
            90deg,
            var(--accent-color),
            color-mix(in srgb, var(--accent-color), var(--heading-color) 30%)
        );
    }

    @media (max-width: 991px) {
        .about .profile-card {
            margin-bottom: 3rem;
        }
    }

    .about .profile-header {
        position: relative;
        margin-bottom: 2rem;
    }

    .about .profile-header .profile-image {
        width: 160px;
        height: 160px;
        margin: 0 auto 1.5rem;
        border-radius: 50%;
        overflow: hidden;
        border: 4px solid var(--accent-color);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    :global .about .profile-header .profile-image .inner-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .about .profile-header .profile-badge {
        position: absolute;
        bottom: 20px;
        right: calc(50% - 65px);
        width: 32px;
        height: 32px;
        background-color: var(--accent-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid var(--surface-color);
    }

    :global .about .profile-header .profile-badge .badge-icon {
        color: var(--contrast-color);
        font-size: 14px;
    }

    .about .profile-content h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
        color: var(--heading-color);
    }

    /* .about .profile-content .profession { */
    .about .about-content .profession {
        color: var(--accent-color);
        /* font-weight: 500; */
        margin-bottom: 2rem;
    }

    .about .contact-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .about .contact-links .contact-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background-color: color-mix(
            in srgb,
            var(--surface-color),
            var(--background-color) 50%
        );
        border-radius: 0.75rem;
        text-decoration: none;
        color: var(--default-color);
        transition: all 0.3s;
        border: 1px solid
            color-mix(in srgb, var(--default-color), transparent 90%);
    }

    .about .contact-links .contact-item:hover {
        background-color: var(--accent-color);
        color: var(--contrast-color);
        transform: translateY(-2px);
        box-shadow: 0 5px 20px
            color-mix(in srgb, var(--accent-color), transparent 70%);
    }

    :global .about .contact-links .contact-item .contact-icon {
        font-size: 1rem;
        width: 18px;
    }

    .about .about-content {
        padding-left: 3rem;
    }

    @media (max-width: 991px) {
        .about .about-content {
            padding-left: 0;
        }
    }

    .about .about-content .section-header {
        margin-bottom: 2rem;
    }

    .about .about-content .section-header .badge-text {
        display: inline-block;
        background: linear-gradient(
            135deg,
            var(--accent-color),
            color-mix(in srgb, var(--accent-color), var(--heading-color) 20%)
        );
        color: var(--contrast-color);
        padding: 0.5rem 1.5rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 1.5rem;
    }

    .about .about-content .section-header h2 {
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 1.3;
        margin: 0;
    }

    @media (max-width: 768px) {
        .about .about-content .section-header h2 {
            /* font-size: 1.875rem; */
            font-size: 1.7rem;
        }
    }

    .about .about-content .description {
        margin-bottom: 2.5rem;
    }

    .about .about-content .description p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: color-mix(in srgb, var(--default-color), transparent 20%);
        margin-bottom: 1.5rem;
        text-align: justify;
    }

    .about .about-content .description p:last-child {
        margin-bottom: 0;
    }
</style>
