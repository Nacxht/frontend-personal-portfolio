<script lang="ts">
	import { Menu } from "lucide-svelte";
	import Button from "../button/button.svelte";
	import { ButtonVariant } from "../button/variant";
</script>

<div class="modal">
	<!--  -->
</div>

<Button variant={ButtonVariant.GHOST} isIcon={true} on:click>
	<Menu />
</Button>

<style lang="postcss">
	@reference "tailwindcss";
</style>
