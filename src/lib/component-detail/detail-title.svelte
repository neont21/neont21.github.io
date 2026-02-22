<script lang="ts">
    let { title } = $props();
</script>

    <div class="page-title">
        <h1>{title}</h1>
        <nav class="breadscrumb-wrap" aria-label="breadscrumb">
            <ol class="breadscrumb">
                <li><a href="/#projects">작업물</a></li>
                <li class="active">{title}</li>
            </ol>
        </nav>
    </div>

<style>
    .page-title {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 0 6rem 0 4rem;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--background-color);
        border-bottom: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
        height: 5rem;
    }

	@media (min-width: 1200px) {
        .page-title {
            margin-left: 24rem;
            padding: 0 4rem;
        }
    }

    .breadscrumb-wrap .breadscrumb {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        list-style: none;
        margin: 0.5rem 0;
    }

    .breadscrumb-wrap .breadscrumb li:nth-child(n+2)::before {
        content: "/";
        margin-right: 1rem;
    }

    @media (max-width: 1500px) {
        .page-title {
            flex-direction: column-reverse;
            align-items: start;
            justify-content: center;
        }

        .page-title h1 {
            margin: 0;
        }

        .breadscrumb-wrap .breadscrumb {
            padding: 0;
        }

        .breadscrumb-wrap .breadscrumb li.active {
            display: none;
        }
    }
</style>