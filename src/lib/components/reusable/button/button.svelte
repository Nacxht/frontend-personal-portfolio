<script lang="ts">
	import { ButtonVariant } from "./variant";

	export let variant: ButtonVariant = ButtonVariant.DEFAULT;
	export let href: string | undefined = undefined;
	export let isIcon: boolean = false;
	export let isWidthFit: boolean = true;
	export let isDisable: boolean = false;

	let isClicked: boolean = false;

	function click() {
		isClicked = true;

		setTimeout(() => {
			isClicked = false;
		}, 100);
	}
</script>

{#if isDisable}
	<button
		type="button"
		class="btn {variant} {isIcon ? 'btn-icon' : ''} {isClicked ? 'btn-click' : ''}"
		on:click
		on:click={click}
		disabled
	>
		<slot />
	</button>
{:else if href}
	<a
		{href}
		class="btn {variant} {isIcon ? 'btn-icon' : ''} {isClicked ? 'btn-click' : ''} {isWidthFit
			? 'btn-fit'
			: 'btn-full'}"
		on:click={click}
	>
		<slot />
	</a>
{:else}
	<button
		type="button"
		class="btn {variant} {isIcon ? 'btn-icon' : ''} {isClicked ? 'btn-click' : ''}"
		on:click
		on:click={click}
	>
		<slot />
	</button>
{/if}

<style lang="postcss">
	@reference "tailwindcss";

	/* button */
	.btn {
		@apply cursor-pointer transition-all rounded-md px-[2rem] py-[0.5rem] font-bold
        capitalize flex justify-center h-fit text-sm lg:text-lg w-fit;
	}

	.btn-icon {
		@apply px-[0.5rem] py-[0.5rem];
	}

	.btn-click {
		@apply scale-90;
	}

	.btn-full {
		@apply w-full;
	}
	/*  */

	/* btn-secondary */
	:global(.light) .btn.btn-secondary {
		@apply bg-gray-200 text-gray-950;
	}

	:global(.light) .btn.btn-secondary:hover {
		@apply bg-gray-300;
	}

	:global(.dark) .btn.btn-secondary {
		@apply bg-gray-800 text-white;
	}

	:global(.dark) .btn.btn-secondary:hover {
		@apply bg-gray-900;
	}

	/*  */

	/* btn-ghost */

	:global(.light) .btn.btn-ghost {
		@apply text-gray-950;
	}

	:global(.light) .btn.btn-ghost:hover {
		@apply bg-gray-200;
	}

	:global(.dark) .btn.btn-ghost {
		@apply text-gray-50;
	}

	:global(.dark) .btn.btn-ghost:hover {
		@apply bg-gray-800;
	}
	/*  */

	/* btn-outline */
	:global(.light) .btn.btn-outline {
		@apply bg-gray-50 border border-gray-300 text-gray-950;
	}

	:global(.light) .btn.btn-outline:hover {
		@apply bg-gray-300;
	}

	:global(.dark) .btn.btn-outline {
		@apply bg-gray-950 border border-gray-800 text-gray-50;
	}

	:global(.dark) .btn.btn-outline:hover {
		@apply bg-gray-800;
	}
	/*  */
</style>
