<script lang="ts">
	import Card from "$lib/components/reusable/card/card.svelte";

	export let title: string;
	export let date: string;
</script>

<div class="step">
	<div class="line"></div>

	<Card>
		<div class="container">
			<div class="title-date">
				<h3>{title}</h3>
				<p>{date}</p>
			</div>

			<hr class="divider" />

			<div class="step-content">
				<p>
					<slot />
				</p>
			</div>
		</div>
	</Card>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.step {
		@apply relative border-l-2 border-gray-800 pl-[2rem] mx-[0.5rem]
		md:mx-0 transition-all ease-in-out;
	}

	:global(.light) .step {
		@apply border-gray-300;
	}

	.step .line {
		@apply absolute aspect-square w-[1.5rem] rounded-full bg-gray-800 
		left-[-0.8rem] transition-all ease-in-out;
	}

	:global(.light) .step .line {
		@apply bg-gray-300;
	}

	.container {
		@apply grid gap-[1rem] p-[0.5rem];
	}

	.title-date {
		@apply md:flex justify-between items-center;
	}

	.title-date h3 {
		@apply text-base md:text-2xl;
	}
</style>
