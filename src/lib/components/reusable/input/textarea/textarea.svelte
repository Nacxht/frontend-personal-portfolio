<script lang="ts">
	export let name: string;
	export let id: string;
	export let width: string = "w-full";
	export let height: string = "";
	export let placeholder: string = "";
	export let value: string = "";
	export let isResizeable: boolean = false;
</script>

<textarea
	{name}
	{id}
	{placeholder}
	bind:value
	class="{width} {height} {isResizeable ? 'resize' : 'resize-none'}"
></textarea>

<style lang="postcss">
	@reference "tailwindcss";

	textarea {
		@apply text-xs lg:text-sm p-[0.7rem] lg:p-[0.5rem] rounded-md
        border border-gray-800 text-gray-50 transition-all ease-in-out;
	}

	:global(.light) textarea {
		@apply text-gray-950 border-gray-300;
	}
</style>
