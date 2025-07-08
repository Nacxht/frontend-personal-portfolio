<script lang="ts">
	export let contactData: string[][];
</script>

<div class="container">
	{#each contactData as data}
		{@const [name, link, svg] = data}

		<a href="/contacts" class="contact">
			{@html svg}
		</a>
	{/each}
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.container {
		@apply border border-gray-800 rounded-md p-[1.5rem] flex flex-wrap
        gap-[1rem] transition-all ease-in-out;
	}

	:global(.light) .container {
		@apply border-gray-300;
	}

	.container .contact {
		@apply aspect-square bg-inherit text-white w-[3.5rem] p-[0.5rem]
        rounded-md flex justify-center items-center mx-auto transition-all
		ease-in-out border border-gray-800;
	}

	.container .contact:hover {
		@apply bg-gray-900;
	}

	:global(.light) .container .contact {
		@apply text-black border-gray-300;
	}

	:global(.light) .container .contact:hover {
		@apply bg-gray-200;
	}
</style>
