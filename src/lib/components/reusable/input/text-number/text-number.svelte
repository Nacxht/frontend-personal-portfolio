<script lang="ts">
	import { TextNumberVariant } from "./variant";

	export let type: TextNumberVariant = TextNumberVariant.TEXT;
	export let name: string;
	export let id: string;
	export let isAutocomplete: boolean = false;
	export let width: string = "w-full";
	export let placeholder: string = "";

	export let value: string = "";

	$: if (type === TextNumberVariant.NUMBER) {
		const numRegExp = new RegExp("[0-9]");

		if (!numRegExp.test(value[value.length - 1])) {
			value = value.slice(0, -1);
		}
	}
</script>

<input
	type="text"
	{name}
	{id}
	autocomplete={isAutocomplete ? "on" : "off"}
	{placeholder}
	bind:value
	class={width}
/>

<style lang="postcss">
	@reference "tailwindcss";

	input {
		@apply text-xs lg:text-sm p-[0.7rem] lg:p-[0.5rem] rounded-md h-fit;
	}

	:global(.light) input {
		@apply text-gray-950 border border-gray-300;
	}

	:global(.dark) input {
		@apply text-white border border-gray-800;
	}
</style>
