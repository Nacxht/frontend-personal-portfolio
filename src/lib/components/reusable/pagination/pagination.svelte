<script lang="ts">
	import Button from "../button/button.svelte";
	import { ButtonVariant } from "../button/variant";
	import { ChevronLeft, ChevronRight } from "lucide-svelte";

	export let totalPage: number = 1;
	export let currentPage: number = 1;
	export let withOutline: boolean = false;

	function updateSelectedButton(num: number) {
		currentPage = num;
	}

	function previousButton() {
		currentPage -= 1;
	}

	function nextButton() {
		currentPage += 1;
	}
</script>

<div class="pagination {withOutline ? 'pagination-outline' : ''}">
	{#if currentPage === 1}
		<Button variant={ButtonVariant.GHOST} isIcon={true} isDisable={true}>
			<ChevronLeft />
		</Button>
	{:else}
		<Button variant={ButtonVariant.GHOST} isIcon={true} on:click={previousButton}>
			<ChevronLeft />
		</Button>
	{/if}

	{#each Array.from({ length: totalPage }, (v, i) => i + 1) as i}
		{#if i == currentPage}
			<Button isIcon={true} variant={ButtonVariant.OUTLINE} isDisable={true}>
				<div class="button-number-content">
					{i}
				</div>
			</Button>
		{:else}
			<Button
				isIcon={true}
				variant={ButtonVariant.GHOST}
				isDisable={false}
				on:click={() => updateSelectedButton(i)}
			>
				<div class="button-number-content">
					{i}
				</div>
			</Button>
		{/if}
	{/each}

	{#if currentPage === totalPage}
		<Button variant={ButtonVariant.GHOST} isIcon={true} isDisable={true}>
			<ChevronRight />
		</Button>
	{:else}
		<Button variant={ButtonVariant.GHOST} isIcon={true} on:click={nextButton}>
			<ChevronRight />
		</Button>
	{/if}
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.pagination {
		@apply flex gap-[1rem] p-[0.5rem] w-fit max-w-screen rounded-md items-center
		border border-gray-800 transition-all ease-in-out;
	}

	:global(.light) .pagination.pagination-outline {
		@apply border-gray-300;
	}

	.button-number-content {
		@apply w-[1.6rem] h-[1.6rem] flex items-center justify-center;
	}
</style>
