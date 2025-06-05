<script lang="ts">
	import { page } from "$app/state";

	let errorMessage: string = "";

	$: {
		if (page.status === 404) {
			errorMessage = "page not found";
		} else if (page.status === 500) {
			errorMessage = "internal server error";
		}
	}
</script>

<main>
	<section id="error">
		<h1 class="error-code">
			{page.status}
		</h1>

		<p class="error-message">
			&quot;
			{errorMessage}
			&quot;
		</p>
	</section>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	main {
		@apply flex justify-center items-center;
	}

	#error .error-code,
	#error .error-message {
		@apply text-center;
	}

	#error .error-code {
		@apply text-[10rem];
	}

	#error .error-message {
		@apply text-3xl capitalize;
	}
</style>
