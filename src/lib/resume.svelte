<script>
    import { Col, Container, Icon, Row, Image } from "@sveltestrap/sveltestrap";
    import ResumeItem from "./resume-components/resume-item.svelte";
    import { experiences } from "./resume-components/experiences";
    import { educations } from "./resume-components/educations";
    import { certifications } from "./resume-components/certifications";
</script>

<section id="resume" class="resume section">
    <Container class="section-title" data-aos="fade-up">
        <h2>이력</h2>
    </Container>

    <Container data-aos="fade-up" data-aos-delay="100">
        <Row>
            <Col xxl="6" class="ps-4 ps-lg-5">
                <!-- v Experience Section -->
                <div class="resume-section" data-aos="fade-up">
                    <h3>
                        <Icon name="briefcase" class="me-2 resume-icon" />
                        경력
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
                <!-- ^ Experience Section -->
            </Col>
            <Col lg="6" class="ps-4 ps-lg-5">
                <!-- v Education Section -->
                <div
                    class="resume-section"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h3>
                        <Icon name="mortarboard" class="me-2 resume-icon" />
                        학력
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
                <!-- ^ Education Section -->

                <!-- v Certifications Section -->
                <div
                    class="resume-section"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h3>
                        <Icon name="award" class="me-2 resume-icon" />
                        자격증
                    </h3>

                    {#each certifications as certification}
                        <ResumeItem
                            title={certification.title}
                            period={certification.date}
                        />
                    {/each}
                </div>
                <!-- ^ Certifications Section -->
            </Col>
        </Row>
    </Container>
</section>

<style>
    .resume .resume-section {
        margin-bottom: 3rem;
    }

    .resume .resume-section h3 {
        font-size: 1.75rem;
        margin-bottom: 1.5rem;
        color: var(--heading-color);
        font-weight: 600;
    }

    :global .resume-icon {
        color: var(--accent-color);
    }
</style>
