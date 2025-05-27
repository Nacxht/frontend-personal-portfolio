<script lang="ts">
	import Button from "../reusable/button/button.svelte";
	import { Menu, Home } from "lucide-svelte";
	import { ButtonVariant } from "../reusable/button/variant";
</script>

<nav>
	<Button href="/" variant={ButtonVariant.GHOST} isIcon={true}>
		<Home />
	</Button>

	<Button variant={ButtonVariant.GHOST} isIcon={true}>
		<Menu />
	</Button>
</nav>

<style lang="postcss">
	@reference "tailwindcss";

	nav {
		@apply flex justify-between px-[1rem] lg:px-[30rem] py-[1rem] sticky top-0 z-[999]
		backdrop-blur-md;
	}

	:global(.light) nav {
		@apply border-b border-gray-400;
	}

	:global(.dark) nav {
		@apply border-b border-gray-800;
	}
</style>
