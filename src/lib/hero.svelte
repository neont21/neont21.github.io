<script>
    import { Container, Row, Col, Icon, Image } from "@sveltestrap/sveltestrap";
    import imgDH from "$lib/assets/danya.png";
</script>

<section id="hero" class="hero section">
    <div class="background-elements">
        <div class="bg-circle circle-1"></div>
        <div class="bg-circle circle-2"></div>
    </div>

    <div class="hero-content">
        <Container class="hero-container">
            <Row class="align-items-center">
                <!-- v Hero Text -->
                <Col lg="7" data-aos="fade=right" data-aos-delay="100">
                    <div class="hero-text">
                        <h1><span class="accent-text">정주원</span></h1>
                        <h2>Joowon Jung</h2>
                        <p class="lead">
                            저는 <span
                                class="typed"
                                data-typed-items="편집 디자이너, UI/UX 디자이너, 웹 개발자"
                            ></span>입니다.
                        </p>
                        <p class="description">
                            고립의 시간을 지나, 세상과 다시 연결되기 위해
                            디자인을 시작했습니다.<br />작은 디테일에 담긴
                            진심이 사람의 마음을 움직일 수 있다고 믿습니다.
                        </p>

                        <div class="hero-actions">
                            <a href="#portfolio" class="btn btn-primary"
                                >작업물 보기</a
                            >
                        </div>
                    </div>
                </Col>
                <!-- ^ Hero Text -->

                <!-- Hero Visual -->
                <Col lg="5" data-aos="fade-left" data-aos-delay="200">
                    <div class="hero-visual">
                        <div class="profile-container">
                            <Image fluid
                                src={imgDH}
                                alt="주원 캐릭터"
                                class="profile-image" />
                            <div class="floating-elements">
                                <div class="floating-icon icon-1">
                                    <Icon name="palette" />
                                </div>
                                <div class="floating-icon icon-2">
                                    <Icon name="code-slash" />
                                </div>
                                <div class="floating-icon icon-3">
                                    <Icon name="lightbulb" />
                                </div>
                                <div class="floating-icon icon-4">
                                    <Icon name="graph-up" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <!-- ^ Hero Visual -->
            </Row>
        </Container>
    </div>
</section>

<style>
    .hero {
        min-height: 100vh;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
    }

    .hero .background-elements {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        overflow: hidden;
    }

    .hero .background-elements .bg-circle {
        position: absolute;
        border-radius: 50%;
        background: linear-gradient(
            45deg,
            color-mix(in srgb, var(--accent-color), transparent 90%),
            color-mix(in srgb, var(--accent-color), transparent 95%)
        );
        animation: float 6s ease-in-out infinite;
    }

    .hero .background-elements .bg-circle.circle-1 {
        width: 300px;
        height: 300px;
        top: 10%;
        right: 10%;
        animation-delay: 0s;
    }

    .hero .background-elements .bg-circle.circle-2 {
        width: 200px;
        height: 200px;
        bottom: 20%;
        left: 5%;
        animation-delay: 2s;
    }

    .hero .hero-content {
        position: relative;
        width: 100%;
        z-index: 2;
    }

    :global .hero .container {
        position: relative;
        z-index: 3;
    }

    .hero .hero-text h1 {
        font-size: 72px;
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 15px;
        color: var(--heading-color);
    }

    .hero .hero-text h1 .accent-text {
        color: var(--accent-color);
        position: relative;
    }

    .hero .hero-text h1 .accent-text::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(
            90deg,
            var(--accent-color),
            color-mix(in srgb, var(--accent-color), transparent 50%)
        );
    }

    .hero .hero-text h2 {
        font-size: 32px;
        font-weight: 600;
        color: var(--heading-color);
        margin-bottom: 10px;
    }

    .hero .hero-text .lead {
        font-size: 24px;
        margin-bottom: 20px;
        color: var(--default-color);
    }

    .hero .hero-text .lead span {
        color: var(--accent-color);
        font-weight: 600;
        border-bottom: 2px solid var(--accent-color);
        padding-bottom: 2px;
    }

    .hero .hero-text .description {
        font-size: 18px;
        line-height: 1.6;
        color: color-mix(in srgb, var(--default-color), transparent 20%);
        margin-bottom: 40px;
        /* max-width: 500px; */
    }

    .hero .hero-actions {
        display: flex;
        gap: 20px;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }

    .hero .hero-actions .btn {
        padding: 14px 30px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 50px;
        text-decoration: none;
        transition: all 0.3s ease;
        border: 2px solid;
    }

    .hero .hero-actions .btn.btn-primary {
        background-color: var(--accent-color);
        color: var(--contrast-color);
        border-color: var(--accent-color);
    }

    .hero .hero-actions .btn.btn-primary:hover {
        background-color: color-mix(in srgb, var(--accent-color), black 10%);
        transform: translateY(-2px);
        box-shadow: 0 8px 25px
            color-mix(in srgb, var(--accent-color), transparent 70%);
    }

    .hero .hero-visual {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .hero .hero-visual .profile-container {
        position: relative;
        width: 400px;
        height: 400px;
    }

    :global .hero .hero-visual .profile-container .profile-image {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;
        z-index: 2;
        animation: floatIcon 4s ease-in-out infinite;
    }

    .hero .hero-visual .profile-container .floating-elements .floating-icon {
        position: absolute;
        width: 60px;
        height: 60px;
        background-color: var(--surface-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        color: var(--accent-color);
        box-shadow: 0 8px 25px
            color-mix(in srgb, var(--default-color), transparent 85%);
        animation: floatIcon 4s ease-in-out infinite;
    }

    .hero
        .hero-visual
        .profile-container
        .floating-elements
        .floating-icon.icon-1 {
        top: -10px;
        right: 50px;
        animation-delay: 0s;
    }

    .hero
        .hero-visual
        .profile-container
        .floating-elements
        .floating-icon.icon-2 {
        bottom: 80px;
        right: -20px;
        animation-delay: 1s;
    }

    .hero
        .hero-visual
        .profile-container
        .floating-elements
        .floating-icon.icon-3 {
        bottom: -10px;
        left: 50px;
        animation-delay: 2s;
    }

    .hero
        .hero-visual
        .profile-container
        .floating-elements
        .floating-icon.icon-4 {
        top: 100px;
        left: -20px;
        animation-delay: 3s;
    }

    @keyframes float {
        0%,
        100% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-20px);
        }
    }

    @keyframes floatIcon {
        0%,
        100% {
            transform: translateY(0px) rotate(0deg);
        }

        50% {
            transform: translateY(-10px) rotate(5deg);
        }
    }

    @media (max-width: 992px) {
        .hero .hero-text {
            text-align: center;
            margin-bottom: 50px;
        }

        .hero .hero-text h1 {
            font-size: 56px;
        }

        .hero .hero-text h2 {
            font-size: 28px;
        }

        .hero .hero-text .lead {
            font-size: 20px;
        }

        .hero .hero-visual .profile-container {
            width: 350px;
            height: 350px;
        }

        .hero .hero-actions {
            justify-content: center;
        }
    }

    @media (max-width: 768px) {
        .hero .hero-text h1 {
            /* font-size: 42px; */
            font-size: 8vw;
        }

        .hero .hero-text h2 {
            /* font-size: 24px; */
            font-size: 5vw;
        }

        .hero .hero-text .lead {
            /* font-size: 18px; */
            font-size: 3vw;
        }

        .hero .hero-text .description {
            /* font-size: 16px; */
            font-size: 2vw;
        }

        .hero .hero-actions {
            justify-content: center;
        }

        .hero .hero-actions .btn {
            padding: 12px 25px;
            font-size: 14px;
        }

        .hero .hero-visual .profile-container {
            width: 300px;
            height: 300px;
        }

        .hero
            .hero-visual
            .profile-container
            .floating-elements
            .floating-icon {
            width: 50px;
            height: 50px;
            font-size: 20px;
        }

        .hero .background-elements .bg-circle.circle-1 {
            width: 200px;
            height: 200px;
        }

        .hero .background-elements .bg-circle.circle-2 {
            width: 150px;
            height: 150px;
        }
    }
</style>
