<script>
    import { Icon } from "@sveltestrap/sveltestrap";

    let { title="", period="", location="", tasks=[] } = $props();
</script>

<div class="resume-item">
    <h4>{title}</h4>
    <h5>{period}</h5>
    {#if location}
    <p class="company">
        <Icon name="building" class="company-icon"/>
        {location}
    </p>
    {/if}
    <ul>
        {#each tasks as task}
            <li>{@html task}</li>
        {/each}
    </ul>
</div>

<style>

.resume-item {
  padding-left: 1.5rem;
  border-left: 2px solid color-mix(in srgb, var(--accent-color), transparent 80%);
  margin-bottom: 2rem;
  position: relative;
}

.resume-item:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  left: -9px;
  top: 0;
  background: var(--accent-color);
}

.resume-item h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--heading-color);
  font-weight: 600;
}

.resume-item h5 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--accent-color);
}

.resume-item .company {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  color: var(--heading-color);
}

:global .company-icon {
  margin-right: 0.5rem;
}

.resume-item ul {
  padding-left: 1.2rem;
}

.resume-item ul li {
  margin-bottom: 0.5rem;
  color: var(--default-color);
}

.resume-item p {
  color: var(--default-color);
  margin-bottom: 0;
}
</style>