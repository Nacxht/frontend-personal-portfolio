<script lang="ts">
	import Button from "../button/button.svelte";
	import { ButtonVariant } from "../button/variant";
	import { ChevronLeft, ChevronRight } from "lucide-svelte";

	//
</script>

<div class="pagination">
	<Button variant={ButtonVariant.GHOST}>
		<ChevronLeft />
		Previous
	</Button>

	<!--  -->

	<Button variant={ButtonVariant.GHOST}>
		Next
		<ChevronRight />
	</Button>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
