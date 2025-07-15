<script>
    import { page } from '$app/stores';
</script>

{#if $page.status == '404'}
<h1>페이지를 찾을 수 없습니다.</h1>
<div class="error-message">
    <p>URL을 다시 확인해 주세요!</p>
</div>
{:else}
    <h1>{$page.error.message}</h1>
{/if}

<style>
    h1 {
        text-align: center;
        padding: 40px;
    }

    .error-message {
        text-align: center;
        margin: 20vh 20vw;
        padding: 10vh 0;
    border-radius: 20px;
    background: linear-gradient(
        135deg,
        var(--background-color),
        var(--secondary-color)
    );
    opacity: 0.85;
    border: 1px solid
        color-mix(in srgb, var(--default-color), transparent 80%);
    }
</style>