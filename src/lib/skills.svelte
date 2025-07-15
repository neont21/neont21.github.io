<script>
  import { Container, Col, Row } from "@sveltestrap/sveltestrap";
  import SkillCategory from "./skill-components/skill-category.svelte";
  import { skillList } from "./skill-components/skill-list.js";
  import { onMount } from "svelte";

  function setupWaypoints() {
    let skillsAnimation = document.querySelectorAll(".skills-animation");
    skillsAnimation.forEach((item) => {
      new Waypoint({
        element: item,
        offset: "80%",
        handler: function (direction) {
          let progress = item.querySelectorAll(".progress .progress-bar");
          progress.forEach((el) => {
            el.style.width = el.getAttribute("aria-valuenow") + "%";
          });
        },
      });
    });
  }

  onMount(() => {
    function trySetup() {
      if (window.Waypoint) {
        setupWaypoints();
      } else {
        setTimeout(trySetup, 100); // Retry after 100ms
      }
    }
    trySetup();
  });
</script>

<section class="skills section">
  <Container class="section-title" data-aos="fadeup">
    <h2>기술</h2>
  </Container>

  <Container data-aos="fade-up" data-aos-delay="100">
    <Row>
      {#each skillList as skills}
        <Col lg="3" class="skill-card">
          <SkillCategory category={skills.category} />
        </Col>
      {/each}
    </Row>
  </Container>
</section>

<style>
  @media (max-width: 991.98px) {
    :global .skill-card {
      margin-bottom: 30px;
    }

    :global .skill-card:last-child {
      margin-bottom: 0;
    }
  }
</style>
