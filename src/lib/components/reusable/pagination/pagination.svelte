<script lang="ts">
	import Button from "../button/button.svelte";
	import { ButtonVariant } from "../button/variant";
	import { ChevronLeft, ChevronRight } from "lucide-svelte";

	export let totalPage: number = 1;
	export let currentPage: number = 1;

	function updateSelectedButton(num: number) {
		currentPage = num;
	}
</script>

<div class="pagination">
	<Button variant={ButtonVariant.GHOST}>
		<div class="button-content">
			<ChevronLeft />
			Previous
		</div>
	</Button>

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

	<Button variant={ButtonVariant.GHOST}>
		<div class="button-content">
			Next
			<ChevronRight />
		</div>
	</Button>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.pagination {
		@apply flex gap-[1rem];
	}

	.button-content {
		@apply flex items-center;
	}

	.button-number-content {
		@apply w-[1.6rem] h-[1.6rem] flex items-center justify-center;
	}
</style>
