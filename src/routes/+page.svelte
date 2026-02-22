<script>
    import "$lib/global.css";
    import Hero from "$lib/hero.svelte";
    import About from "$lib/about.svelte";
    import Resume from "$lib/resume.svelte";
    import Projects from "$lib/projects.svelte";
</script>

<svelte:head>
    <title>정주원: 디자이너 + 개발자</title>
    <meta name="description" content="디자이너이자 개발자 정주원이 Svelte5로 구현한 포트폴리오 사이트">
    <meta name="keywords" content="portfolio, design, develop, it, content">
</svelte:head>

<Hero/>

<About/>

<Resume/>

<Projects/>
