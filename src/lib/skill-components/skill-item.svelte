<script>
    let { item } = $props();

    let skill = item.skill;
    let level = item.level;
    let description = item.description;
</script>

<div class="skill-item">
    <div class="d-flex justify-content-between align-items-center">
        <h4>{skill}</h4>
        <span class="skill-percentage">{level}%</span>
    </div>
    <div class="progress">
        <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow={level}
            aria-valuemin="0"
            aria-valuemax="100"
        ></div>
    </div>
    <div class="skill-tooltip">{description}</div>
</div>

<style>
.skill-item {
  margin-bottom: 25px;
}

.skill-item:last-child {
  margin-bottom: 0;
}

.skill-item h4 {
  font-size: 16px;
  margin-bottom: 8px;
}

.skill-item .skill-percentage {
  font-size: 14px;
  color: color-mix(in srgb, var(--heading-color), transparent 30%);
}

.skill-item .progress {
  height: 8px;
  background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.skill-item .progress .progress-bar {
  background-color: var(--accent-color);
  transition: width 1.5s ease-in-out;
  width: 0;
  height: 100%;
  border-radius: 20px;
}

.skill-item .skill-tooltip {
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  margin-top: 8px;
  opacity: 0;
  transform: translateY(-5px);
  transition: all 0.3s;
}

.skill-item:hover .skill-tooltip {
  opacity: 1;
  transform: translateY(0);
}
</style>