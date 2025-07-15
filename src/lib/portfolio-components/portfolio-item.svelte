<script>
    import { Col, Icon, Image } from "@sveltestrap/sveltestrap";

    let { data } = $props();

</script>

    <Col lg="6" md="6" class="portfolio-item isotope-item filter-{data.category}">
    <div class="portfolio-wrap">
          <img
            src="/{data.thumb}"
            alt="{data.title}"
            class="portfolio-thumb"
          />
        <div class="portfolio-info">
            <div class="content">
                <span class="category">{data.info.category}</span>
                <h4>{data.title}</h4>
                <div class="portfolio-links">
                    <a
                        href='{data.thumb}'
                        aria-label={data.title}
                        class="glightbox"
                        title={data.title}
                        >
                        <Icon name="plus-lg" />
                        </a>
                    <a
                        href="/{data.tag}"
                        title="상세 정보">
                        <Icon name="arrow-right" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</Col>

<style>
:global .gslide-description {
  top: -85px;
  opacity: 50%;
}

:global .portfolio-item {
  height: 350px;
}

.portfolio-wrap {
  transition: 0.4s;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  height: 100%;
}

:global .portfolio-wrap .portfolio-thumb {
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.portfolio-wrap .portfolio-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 25px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 70%, rgba(0, 0, 0, 0) 100%);
  z-index: 3;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateY(20px);
  opacity: 0;
}

.portfolio-wrap .portfolio-info .content {
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateY(20px);
}

.portfolio-wrap .portfolio-info .category {
  display: inline-block;
  color: var(--accent-color);
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  margin-top: 40px;
}

.portfolio-wrap .portfolio-info h4 {
  font-size: 20px;
  color: var(--contrast-color);
  font-weight: 700;
  margin-bottom: 15px;
}

.portfolio-wrap .portfolio-info .portfolio-links {
  display: flex;
  gap: 12px;
}

.portfolio-wrap .portfolio-info .portfolio-links a {
  color: var(--contrast-color);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color-mix(in srgb, var(--accent-color), transparent 30%);
  border-radius: 50%;
  font-size: 18px;
  transition: 0.3s;
}

.portfolio-wrap .portfolio-info .portfolio-links a:hover {
  background-color: var(--accent-color);
  transform: translateY(-3px);
}

.portfolio-wrap:hover {
  transform: translateY(-5px);
}

:global .portfolio-wrap:hover .portfolio-thumb {
  transform: scale(1.08);
}

.portfolio-wrap:hover .portfolio-info {
  transform: translateY(0);
  opacity: 1;
}

.portfolio-wrap:hover .portfolio-info .content {
  transform: translateY(0);
}
</style>