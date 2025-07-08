<script lang="ts">
	export let iconSVGs: string[][];
</script>

<div class="container">
	<div class="title-desc">
		<h3 class="title">
			<slot name="title" />
		</h3>

		<p>
			<slot name="description" />
		</p>
	</div>

	<hr class="divider" />

	<div class="techstack-grid">
		{#each iconSVGs as svg}
			<div class="tech">
				{@html svg[1]}
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.container {
		@apply border border-gray-800 rounded-md p-[1.5rem] grid
        gap-[1rem] transition-all ease-in-out;
	}

	:global(.light) .container {
		@apply border-gray-300;
	}

	.container .title-desc {
		@apply grid gap-[0.5rem];
	}

	.container .title-desc h3,
	.container .title-desc p {
		@apply text-center;
	}

	.container .techstack-grid {
		@apply flex flex-wrap gap-[1rem];
	}

	.container .techstack-grid .tech {
		@apply aspect-square bg-gray-800 text-white w-[3.5rem] p-[0.5rem]
        rounded-md flex justify-center items-center mx-auto transition-all
		ease-in-out;
	}

	:global(.light) .container .techstack-grid .tech {
		@apply bg-gray-300 text-black;
	}
</style>
