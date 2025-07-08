<script>
	//
</script>

<footer>
	<div class="up-content">
		<a href="https://github.com/Nacxht" target="_blank" class="nickname">zkyzors</a>

		<p class="purpose">A reflection of my journey as developer</p>
	</div>

	<hr class="divider" />

	<div class="copyright">
		<p>&copy; 2025 ZkyZors. All Rights Reserved</p>
	</div>
</footer>

<style lang="postcss">
	@reference "tailwindcss";

	footer {
		@apply grid gap-[2rem] py-[2rem] px-[1rem] lg:px-[10rem]
		border-t border-gray-800 transition-all ease-in-out;
	}

	:global(.light) footer {
		@apply border-gray-300;
	}

	.up-content {
		@apply flex justify-between items-center;
	}

	.up-content .nickname {
		@apply text-lg lg:text-2xl font-bold uppercase
		transition-all ease-in-out text-gray-50;
	}

	:global(.light) .up-content .nickname {
		@apply text-gray-950;
	}

	.up-content .purpose {
		@apply italic text-xs lg:text-sm;
	}

	.copyright {
		@apply flex justify-center text-xs lg:text-sm;
	}
</style>
