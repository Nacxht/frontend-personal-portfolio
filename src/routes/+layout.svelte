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
		@apply bg-gray-50 transition-all ease-in-out;
	}

	:global(.dark body) {
		@apply bg-gray-950 text-gray-950;
	}
	/*  */

	/* page layout */
	:global(main) {
		@apply mx-[1rem] lg:mx-[20rem] my-[1rem] min-h-[90dvh];
	}

	:global(section) {
		@apply grid gap-[1.5rem] h-fit;
	}

	:global(main .container) {
		@apply gap-[2rem] grid;
	}
	/*  */

	/* typography */
	:global(h1) {
		@apply font-bold uppercase text-3xl lg:text-4xl
		transition-all ease-in-out;
	}

	:global(h2) {
		@apply font-bold capitalize text-2xl lg:text-3xl
		transition-all ease-in-out;
	}

	:global(h3) {
		@apply font-bold capitalize text-xl lg:text-2xl
		transition-all ease-in-out;
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
		@apply text-justify transition-all ease-in-out text-gray-400;
	}

	:global(.light p) {
		@apply text-gray-600;
	}

	:global(label) {
		@apply text-gray-50 transition-all ease-in-out;
	}

	:global(.light label) {
		@apply text-gray-950;
	}
	/*  */

	/* hr divider */
	:global(.divider) {
		@apply border-b border-gray-800 transition-all ease-in-out;
	}

	:global(.light .divider) {
		@apply border-gray-300;
	}
	/*  */

	/* modal */
	:global(.modal-on) {
		@apply overflow-hidden;
	}
	/*  */
</style>
