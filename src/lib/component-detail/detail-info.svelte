<script lang="ts">
    let { info } = $props();
</script>

<div class="project-info">
    <h3>작업물 정보</h3>
    <table>
        <caption>작업물 정보</caption>
        <tbody>
            <tr>
                <th>분류</th>
                <td>{info.category}</td>
            </tr>
            <tr>
                <th>사용한 도구</th>
                <td>{info.tools}</td>
            </tr>
            <tr>
                <th>작업 시기</th>
                <td>{info.period}</td>
            </tr>
        </tbody>
    </table>
</div>

<style>
    .project-info {
        padding: 0 2rem;
        background: color-mix(in srgb, var(--secondary-color), transparent 70%);
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
        border-radius: 1rem;
        box-shadow: 0 0 2rem rgba(var(--default-color), 0.1);
        height: fit-content;
    }

    .project-info h3 {
        font-size: 1.6rem;
        font-weight: bold;
        border-bottom: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
        padding: 0.5rem 0 1rem 0;
        margin-bottom: 0;
    }

    .project-info table {
        padding: 0.5rem 0;
        width: 100%;
    }

    .project-info table caption {
        display: none;
    }

    .project-info tr *{
        border-bottom: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
        font-size: 1.1rem;
    }

    .project-info tr:last-child *{
        border-bottom: none;
    }

    .project-info tr {
        display: flex;
        flex-direction: column;
    }

    .project-info td {
        padding-bottom: 1rem;
    }

    .project-info th {
        width: 6rem;
        text-align: left;
        padding-top: 1rem;
        padding-bottom: 0.5rem;
    }
</style>