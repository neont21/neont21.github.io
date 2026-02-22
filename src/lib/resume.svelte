<script lang="ts">
    import Icon from "@iconify/svelte";
    import ResumeItem from "$lib/component-resume/resume-item.svelte";
    import { experiences } from "$lib/component-resume/experiences";
    import { educations } from "$lib/component-resume/educations";
    import { certifications } from "$lib/component-resume/certifications";
    import { awards } from "$lib/component-resume/awards";

    import { inview } from "./actions";
    let isVisible = $state(false);
</script>

<section id="resume" use:inview oninview={() => isVisible = true} class:active={isVisible} class="reveal">
    <div class="section-title" class:active={isVisible}>
        <h2>이력</h2>
    </div>
    <div class="resume-container" class:active={isVisible}>
        <div class="resume-left">
            <div class="experience" class:active={isVisible}>
                <h3>
                    <Icon icon="mdi:briefcase" class="resume-icon"></Icon>
                    <span>경력</span>
                </h3>
                {#each experiences as experience}
                    <ResumeItem
                        title={experience.title}
                        period={experience.period}
                        location={experience.location}
                        tasks={experience.tasks}
                    />
                {/each}
            </div>
        </div>
        <div class="resume-right">
            <div class="education" class:active={isVisible}>
                <h3>
                    <Icon icon="mdi:graduation-cap" class="resume-icon"></Icon>
                    <span>학력</span>
                </h3>
                {#each educations as education}
                    <ResumeItem
                        title={education.title}
                        period={education.period}
                        location={education.location}
                        tasks={education.tasks}
                    />
                {/each}
            </div>
            <div class="certification" class:active={isVisible}>
                <h3>
                    <Icon icon="mdi:award" class="resume-icon"></Icon>
                    <span>자격증</span>
                </h3>
                {#each certifications as certification}
                    <ResumeItem
                        title={certification.title}
                        period={certification.date}
                        location={certification.organization}
                    />
                {/each}
            </div>
            <div class="award" class:active={isVisible}>
                <h3>
                    <Icon icon="mdi:trophy-award" class="resume-icon"></Icon>
                    <span>수상 이력</span>
                </h3>
                {#each awards as award}
                    <ResumeItem
                        title={award.title}
                        period={award.date}
                        location={award.location}
                    />
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    #resume {
        padding-top: 2rem;
    }

    #resume h3 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: var(--heading-color);
        font-weight: bold;
        display: flex;
        gap: 1rem;
        align-content: center;
    }

    :global #resume .resume-icon {
        color: var(--accent-color);
    }

    .section-title {
        opacity: 0;
        transition: opacity 1s ease-out;
    }

    .section-title.active {
        opacity: 1;
    }

    .resume-container {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .experience, .education, .certification, .award {
        padding: 1rem 0;
        opacity: 0;
        transform: translateY(4rem);
        transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .experience.active, .education.active, .certification.active, .award.active {
        transform: translateY(0);
        opacity: 1;
    }
</style>