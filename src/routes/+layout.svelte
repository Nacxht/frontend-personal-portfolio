<script lang="ts">
	import Footer from "$lib/components/layouts/footer.svelte";
	import Navbar from "$lib/components/layouts/navbar.svelte";
	import ThemeToogle from "$lib/components/layouts/theme-toogle.svelte";
	import "../app.css";

	let { children } = $props();
</script>

<Navbar />

{@render children()}

<ThemeToogle />
<Footer />

<style lang="postcss">
	@reference "tailwindcss";

	/* scrollbar */
	:global(html) {
		scrollbar-width: none;
	}
	/*  */

	/* body */
	:global(body) {
		@apply bg-gray-50;
	}

	:global(.dark body) {
		@apply bg-gray-950 text-gray-950;
	}
	/*  */

	/* page layout */
	:global(main) {
		@apply mx-[1rem] lg:mx-[20rem] my-[1rem] grid gap-[2rem]
		min-h-[90dvh];
	}

	:global(section) {
		@apply grid gap-[1.5rem] h-fit;
	}
	/*  */

	/* typography */
	:global(h1) {
		@apply font-bold uppercase text-3xl lg:text-4xl;
	}

	:global(h2) {
		@apply font-bold capitalize text-2xl lg:text-3xl;
	}

	:global(h3) {
		@apply font-bold capitalize text-xl lg:text-2xl;
	}

	:global(.light h1),
	:global(.light h2),
	:global(.light h3) {
		@apply text-gray-950;
	}

	:global(.dark h1),
	:global(.dark h2),
	:global(.dark h3) {
		@apply text-gray-50;
	}

	:global(p) {
		@apply text-justify;
	}

	:global(.light p) {
		@apply text-gray-600;
	}

	:global(.dark p) {
		@apply text-gray-400;
	}
	/*  */

	/* hr divider */
	:global(.light .divider) {
		@apply border-b border-gray-300;
	}

	:global(.dark .divider) {
		@apply border-b border-gray-800;
	}
	/*  */

	/* modal */
	:global(.modal-on) {
		@apply overflow-hidden;
	}
	/*  */
</style>
