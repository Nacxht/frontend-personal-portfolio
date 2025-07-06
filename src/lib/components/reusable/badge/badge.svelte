<script lang="ts">
	import { BadgeVariant } from "./variant";

	export let variant: BadgeVariant = BadgeVariant.DEFAULT;
	export let href: string | undefined = undefined;
	export let customColor: string | undefined = undefined;
</script>

<svelte:element
	this={href ? "a" : "span"}
	{href}
	class="badge {variant === BadgeVariant.CUSTOM ? customColor : variant}"
>
	<slot />
</svelte:element>

<style lang="postcss">
	@reference "tailwindcss";

	.badge {
		@apply p-[0.5rem] rounded-md font-bold text-xs block w-fit h-fit capitalize
        select-none cursor-default transition-all ease-in-out;
	}

	/* badge-primary */
	:global(.light) .badge.badge-default {
		@apply bg-gray-950 text-gray-50;
	}

	:global(.light) .badge.badge-default:hover {
		@apply opacity-70;
	}

	:global(.dark) .badge.badge-default {
		@apply bg-gray-50 text-gray-950;
	}

	:global(.dark) .badge.badge-default:hover {
		@apply bg-gray-400;
	}
	/*  */

	/* badge-secondary */
	:global(.light) .badge.badge-secondary {
		@apply bg-gray-200 text-gray-950;
	}

	:global(.light) .badge.badge-secondary:hover {
		@apply bg-gray-300;
	}

	:global(.dark) .badge.badge-secondary {
		@apply bg-gray-800 text-gray-50;
	}

	:global(.dark) .badge.badge-secondary:hover {
		@apply bg-gray-900;
	}
	/*  */
</style>
