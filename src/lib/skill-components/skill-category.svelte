<script>
  import SkillItem from "./skill-item.svelte";
  import { skillList } from "./skill-list.js";
  let { category } = $props();

  let list = skillList.find((element) => element.category === category) ?? {
    items: [],
  };
  let items = list.items;
</script>

<div class="skills-category" data-aos="fade-up" data-aos-delay="200">
  <h3>{category}</h3>
  <div class="skills-animation">
    {#each items as item}
      <SkillItem {item} />
    {/each}
  </div>
</div>

<style>
  .skills-category {
    /* background-color: var(--surface-color); */
    background: linear-gradient(
      135deg,
      var(--surface-color),
      var(--secondary-color)
    );
    opacity: 0.85;
    border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    height: 100%;
    transition: transform 0.3s;
  }

  .skills-category:hover {
    transform: translateY(-5px);
  }

  .skills-category h3 {
    font-size: 24px;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 15px;
  }

  .skills-category h3:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--accent-color);
  }

  /* .skill-box {
    background-color: var(--surface-color);
    padding: 25px 20px;
    border-radius: 8px;
    text-align: center;
    transition: all 0.3s;
    height: 100%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  }

  .skill-box:hover {
    transform: translateY(-5px);
  }

  .skill-box:hover i {
    color: var(--accent-color);
    transform: scale(1.1);
  }

  .skill-box:hover .skill-tooltip {
    opacity: 1;
    transform: translateY(0);
  }

  .skill-box i {
    font-size: 36px;
    color: color-mix(in srgb, var(--accent-color), transparent 20%);
    margin-bottom: 15px;
    display: inline-block;
    transition: all 0.3s;
  }

  .skill-box h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .skill-box .skill-tooltip {
    font-size: 14px;
    color: color-mix(in srgb, var(--default-color), transparent 30%);
    opacity: 0;
    transform: translateY(5px);
    transition: all 0.3s;
  } */

</style>
