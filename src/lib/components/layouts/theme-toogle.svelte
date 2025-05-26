<script lang="ts">
	import { theme } from "$lib/stores/theme";
	import { onMount } from "svelte";
	import { Sun, Moon } from "lucide-svelte";
	import Button from "../reusable/button/button.svelte";
	import { ButtonVariant } from "../reusable/button/variant";

	let currentTheme: "light" | "dark" = "dark";

	function toogleTheme() {
		currentTheme = currentTheme === "light" ? "dark" : "light";
		theme.set(currentTheme);
		updateHTMLClass();
	}

	function updateHTMLClass() {
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(currentTheme);
	}

	onMount(() => {
		theme.subscribe((value) => {
			currentTheme = value;
			updateHTMLClass();
		});
	});
</script>

<div class="container">
	<Button isIcon={true} variant={ButtonVariant.GHOST} on:click={toogleTheme}>
		{#if currentTheme === "light"}
			<Moon />
		{:else}
			<Sun />
		{/if}
	</Button>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.container {
		@apply w-fit h-fit fixed right-5 bottom-5;
	}
</style>
