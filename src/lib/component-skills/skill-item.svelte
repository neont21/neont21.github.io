<script lang="ts">
    let { item } = $props();
</script>

<div class="skill-item">
    <div class="skill-title">
        <h4>{item.skill}</h4>
        <span class="skill-percentage">{item.level}%</span>
    </div>
    <div class="skill-progress">
        <div class="progress-bar" role=progressbar aria-valuenow={item.level} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="skill-tooltip">
        {item.description}
    </div>
</div>

<style>
    .skill-item {
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        position: relative;
    }

    .skill-item:last-child {
        margin-bottom: 0rem;
    }

    .skill-item .skill-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    
    .skill-item h4 {
        font-size: 1rem;
        margin: 0;
    }

    .skill-item .skill-percentage {
        font-size: 0.825rem;
    }

    .skill-progress  {
        height: 0.5rem;
        background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
        border-radius: 1rem;
        overflow: hidden;
        position: relative;
    }

    .skill-progress .progress-bar {
        background-color: var(--accent-color);
        transition: width 1.5s ease-in-out;
        width: 0;
        height: 100%;
        border-radius: 1rem;
    }

    .skill-item .skill-tooltip {
        position: absolute;
        inset: 1rem 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0.5rem;
        font-size: 0.825rem;
        color: var(--default-color);
        background-color: color-mix(in srgb, var(--background-color), transparent 40%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        text-align: center;
        word-break: keep-all;
        z-index: 2;
        border-radius: 0.5rem;
    }

    .skill-item:hover .skill-tooltip {
        opacity: 1;
    }
</style>