<script lang="ts">
    let { tableType, analysis, description } = $props();
</script>

<div class="project-description">
    <h2>기획 의도 및 설명</h2>
    <div class="description-content">
        {#if tableType === "swot"}
            <table class="swot-table">
                <caption>SWOT 분석</caption>
                <tbody>
                    <tr>
                        <th>S - 강점</th>
                        <td>
                            {@html analysis.s}
                        </td>
                    </tr>
                    <tr>
                        <th>W - 약점</th>
                        <td>
                            {@html analysis.w}
                        </td>
                    </tr>
                    <tr>
                        <th>O - 기회</th>
                        <td>
                            {@html analysis.o}
                        </td>
                    </tr>
                    <tr>
                        <th>T - 위협</th>
                        <td>
                            {@html analysis.t}
                        </td>
                    </tr>
                </tbody>
            </table>
        {:else if tableType === "social"}
            <table class="spac-table">
                <caption>SPAC 분석</caption>
                <tbody>
                    <tr>
                        <th>사회 현황</th>
                        <td>
                            {@html analysis.s}
                        </td>
                    </tr>
                    <tr>
                        <th>정책 현황</th>
                        <td>
                            {@html analysis.p}
                        </td>
                    </tr>
                    <tr>
                        <th>사회 인식</th>
                        <td>
                            {@html analysis.a}
                        </td>
                    </tr>
                    <tr>
                        <th>커뮤니케이션 전략</th>
                        <td>
                            {@html analysis.c}
                        </td>
                    </tr>
                </tbody>
            </table>
        {/if}
        <p>
            {@html description}
        </p>
    </div>
</div>

<style>
    .project-description {
        padding: 2rem 0;
    }

    .project-description h2 {
        font-size: 1.6rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }

    .project-description .description-content {
        display: flex;
        gap: 2rem;
    }

    @media (max-width: 1500px) {
        .project-description .description-content {
            flex-direction: column;
        }
    }

    @media (max-width: 1199px) {
        .project-description .description-content {
            flex-direction: row;
        }
    }

    @media (max-width: 991px) {
        .project-description .description-content {
            flex-direction: column;
        }
    }

    .project-description .description-content caption {
        display: none;
    }

    .project-description .description-content .swot-table,
    .project-description .description-content .spac-table {
        flex: 1;
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
        border-collapse: collapse;
    }

    .project-description .description-content .swot-table th,
    .project-description .description-content .spac-table th {
        text-align: center;
        word-break: keep-all;
        background: color-mix(in srgb, var(--secondary-color), transparent 70%);
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
        padding: 1rem;
    }

    .project-description .description-content .swot-table td,
    .project-description .description-content .spac-table td {
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
        padding: 1rem;
        line-height: 1.3;
    }

    :global .project-description .description-content .swot-table td p,
    :global .project-description .description-content .spac-table td p {
        margin: 0.5rem 0;
    }

    .project-description .description-content>p {
        flex: 1;
        padding: 0;
        margin: 0;
        text-align: justify;
        word-break: keep-all;
        line-height: 1.6;
        text-indent: 1rem;
    }
</style>