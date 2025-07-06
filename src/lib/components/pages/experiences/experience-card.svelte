<script lang="ts">
	import Badge from "$lib/components/reusable/badge/badge.svelte";
	import { BadgeVariant } from "$lib/components/reusable/badge/variant";
	import Card from "$lib/components/reusable/card/card.svelte";

	export let periodStart: string;
	export let periodEnd: string | undefined = undefined;
	export let category: string;
</script>

<Card>
	<div class="container">
		<div class="top-part">
			<div class="title">
				<h3>
					<slot name="title" />
				</h3>
			</div>

			<div class="years-category">
				<p class="period">
					{periodStart} - {periodEnd || "Now"}
				</p>

				<Badge
					variant={BadgeVariant.CUSTOM}
					customColor="bg-purple-500 dark:bg-purple-800 text-gray-50"
				>
					{category}
				</Badge>
			</div>
		</div>

		<hr class="divider" />

		<div class="bottom-part">
			<p class="description">
				<slot name="description" />
			</p>
		</div>
	</div>
</Card>

<style lang="postcss">
	@reference "tailwindcss";

	.container {
		@apply gap-[1rem] p-[0.5rem] md:p-0;
	}

	.top-part {
		@apply grid gap-[1rem];
	}

	.years-category {
		@apply flex justify-between;
	}
</style>
