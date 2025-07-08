<script lang="ts">
	import Button from "$lib/components/reusable/button/button.svelte";
	import { ButtonVariant } from "$lib/components/reusable/button/variant";
	import TextNumber from "$lib/components/reusable/input/text-number/text-number.svelte";
	import { TextNumberVariant } from "$lib/components/reusable/input/text-number/variant";
	import Textarea from "$lib/components/reusable/input/textarea/textarea.svelte";
</script>

<div class="container">
	<form action="" method="post">
		<div class="input fullname">
			<label for="fullname">Fullname</label>

			<TextNumber
				type={TextNumberVariant.TEXT}
				name="fullname"
				id="fullname"
				placeholder="Ex. John Doe"
			/>
		</div>

		<div class="input email">
			<label for="Email">Email</label>

			<TextNumber
				type={TextNumberVariant.TEXT}
				name="Email"
				id="Email"
				placeholder="Ex. johndoe@gmail.com"
			/>
		</div>

		<div class="input subject md:col-span-2">
			<label for="subject">Subject</label>

			<TextNumber
				type={TextNumberVariant.TEXT}
				name="subject"
				id="subject"
				placeholder="Ex. Website feedback"
			/>
		</div>

		<div class="input message md:col-span-2">
			<label for="message">Message</label>

			<Textarea name="message" id="message" height="h-[10rem]" />
		</div>

		<div class="button-container">
			<Button variant={ButtonVariant.DEFAULT}>Submit</Button>
			<Button type="reset" variant={ButtonVariant.DESTRUCTIVE}>Reset</Button>
		</div>
	</form>
</div>

<style lang="postcss">
	@reference "tailwindcss";

	.container {
		@apply border border-gray-800 rounded-md p-[1.5rem]
        transition-all ease-in-out;
	}

	:global(.light) .container {
		@apply border-gray-300;
	}

	.container form {
		@apply grid grid-cols-1 md:grid-cols-2 gap-[1rem];
	}

	.container form .input {
		@apply grid gap-[0.5rem];
	}

	.container form .button-container {
		@apply flex gap-[0.5rem] col-span-full;
	}
</style>
