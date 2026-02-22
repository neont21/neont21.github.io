<script lang="ts">
	import favicon from "$lib/assets/favicon.png";
	import "$lib/global.css";

	import Header from "$lib/header.svelte";
	import Footer from "$lib/footer.svelte";
	import Scrollup from "$lib/scrollup.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header/>

<main>
	{@render children()}
</main>

<Footer/>

<Scrollup/>

<div class="bg-pattern" id="bg-circle-1"></div>
<div class="bg-pattern" id="bg-circle-2"></div>


<style>
	.bg-pattern {
		background: repeating-linear-gradient(45deg, var(--accent-color), var(--background-color) 0.2rem, var(--accent-color) 0.4rem);
		opacity: 0.3;
		position: fixed;
		border-radius: 50%;
		animation: float 6s ease-in-out infinite;
		z-index: -1;
	}

	#bg-circle-1 {
		width: 10rem;
		height: 10rem;
		top: 10%;
		right: 10%;
	}
	
	#bg-circle-2 {
		width: 15rem;
		height: 15rem;
		bottom: 10%;
		left: 10%;
		animation-delay: 2s;
	}
	
	@media (min-width: 1200px) {
		main {
			margin-left: 24rem;
		}

		#bg-circle-2 {
			left: 28rem;
		}
	}

	@keyframes float {
		0%, 100% {
			transform: translate(0px, 0px);
		}

		50% {
			transform: translate(-2rem, -2rem);
		}
	}
</style>