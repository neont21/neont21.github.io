<script lang="ts">
    import { page } from "$app/state";
</script>

{#if page.status === 404}
    <h1>페이지를 찾을 수 없습니다.</h1>
    <div id="err-msg">
        <p>URL을 다시 확인해 주세요!</p>
    </div>
{:else}
    <h1>{page.error?.message ? "오류가 발생했습니다." : ""}</h1>
    <div id="err-msg">
        <p>{page.status} : {page.error?.message}</p>
    </div>
{/if}

<style>
    h1 {
        text-align: center;
        padding: 2rem;
    }

    #err-msg {
        text-align: center;
        font-size: 1.2em;
        margin: 20vh 20vw;
        padding: 10vh 0;
        border-radius: 2rem;
        background: linear-gradient(135deg, var(--background-color), var(--secondary-color));
        opacity: 0.85;
        border: 1px solid color-mix(in srgb, var(--default-color), transparent 80%);
    }
</style>