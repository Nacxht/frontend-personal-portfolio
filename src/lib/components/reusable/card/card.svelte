<script lang="ts">
	export let href: string | undefined = undefined;
</script>

<svelte:element this={href ? "a" : "div"} {href} class="card {href ? 'card-link' : ''}">
	<slot />
</svelte:element>

<style lang="postcss">
	@reference "tailwindcss";

	.card {
		@apply p-[0.5rem] lg:p-[1rem] rounded-md transition-all ease-in-out
		border border-gray-800 bg-gray-950;
	}

	.card:hover {
		@apply bg-gray-900;
	}

	:global(.light) .card {
		@apply border-gray-300 bg-gray-50;
	}

	:global(.light) .card.card-link:hover {
		@apply bg-gray-200;
	}
</style>
