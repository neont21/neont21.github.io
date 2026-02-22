<script lang="ts">
    import img_dh from "$lib/assets/danya.png";
</script>

<section id="hero">
    <div id="hero-visual">
        <img src="{img_dh}" alt="다냐">
    </div>
    <div id="hero-title">
        <h1>정주원<sub>[鄭朱原]</sub></h1>
        <h2>Joowon Jung</h2>
    </div>
    <div id="hero-content">
        <p>고립의 시간을 지나, 세상과 다시 연결되기 위해 디자인을 시작했습니다.</p>
        <p>말보다 먼저 닿는 것들이 있습니다. 색과 형태, 여백과 타이포그래피 — 언어가 되기 전의 언어들.</p>
        <p>작은 디테일에 담긴 진심이 사람의 마음을 움직일 수 있다고 믿습니다.
            눈에 띄는 것보다 오래 남는 것을 만들고 싶습니다.</p>
    </div>
    <div id="hero-actions">
        <a href="#projects" class="btn btn-primary">작업물 보기</a>
        <a href="/portfolio_joowon.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">PDF 내려받기</a>
    </div>
</section>

<style>
    #hero {
        padding: 16rem 4rem;
    }

    #hero-visual {
        position: absolute;
        display: flex;
        justify-content: end;
        z-index: 200;
        width: 60%;
    }

    #hero-visual img {
        width: 24rem;
        height: 24rem;
        object-fit: cover;
        animation: floatIcon 4s ease-in-out infinite;
    }

    #hero-title {
        display: flex;
        flex-direction: column;
        width: fit-content;
    }

    #hero-title h1 {
        display: inline;
        font-size: 4rem;
        margin: 1rem 0;
        color: var(--accent-color);
        border-bottom: 2px solid var(--accent-color);
    }

    #hero-title h1 sub {
        font-size: 2rem;
        vertical-align: baseline;
    }

    #hero-title h2 {
        display: inline;
        font-size: 2.4rem;
        margin: 0;
    }

    #hero-content {
        margin: 4rem 0 2rem 0;
        width: 50%;
        line-height: 150%;
        word-break: keep-all;
    }

    #hero-content p {
        margin: 0.5rem 0;
    }

    #hero-actions {
        display: flex;
        gap: 2rem;
    }

    .btn {
        border: 2px solid;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        font-weight: bold;
        border-radius: 2rem;
        transition: all 0.3s ease;
    }

    .btn-primary {
        background-color: var(--accent-color);
        color: var(--contrast-color);
        border-color: var(--accent-color);
    }

    .btn-primary:hover {
        background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
        transform: translateY(0.2rem);
        box-shadow: 0 0.5rem 1rem color-mix(in srgb, var(--accent-color), transparent 70%);
    }

    .btn-secondary {
        background-color: var(--contrast-color);
        color: var(--accent-color);
        border-color: var(--accent-color);
    }
    
    .btn-secondary:hover {
        background-color: color-mix(in srgb, var(--contrast-color), transparent 20%);
        transform: translateY(0.2rem);
        box-shadow: 0 0.5rem 1rem color-mix(in srgb, var(--accent-color), transparent 70%);
    }

    @media (max-width: 1199px) {
        #hero {
            margin: 0;
            padding: 4rem 0;
        }

        #hero-visual {
            margin: 12rem 0;
            justify-content: center;
            width: 100%;
        }
        
        #hero-title {
            margin: 0 auto;
        }

        #hero-content {
            margin: 0 auto;
            padding: 28rem 4.8rem 2rem 4.8rem;
            width: fit-content;
        }

        #hero-actions {
            justify-content: center;
        }
    }

    @keyframes floatIcon {
        0%,
        100% {
            transform: translateY(0) rotate(0);
        }
        50% {
            transform: translateY(-1rem) rotate(5deg);
        }
    }
</style>