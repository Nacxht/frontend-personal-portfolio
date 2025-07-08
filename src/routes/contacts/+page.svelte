<script lang="ts">
	import ContactGrid from "$lib/components/pages/contacts/contact-grid.svelte";
	import EmailForm from "$lib/components/pages/contacts/email-form.svelte";

	export let data;
	const { contacts } = data;
</script>

<main>
	<div class="container">
		<section id="page-title">
			<h1>Contact Me</h1>
		</section>

		<hr class="divider" />

		<section id="page-description">
			<p>
				If you're interested in collaborating, have any questions, or just want to discuss further
				about projects or creative ideas, please don't hesitate to contact me. I'm always open to
				new opportunities and happy to discuss how we can create something amazing together.
			</p>
		</section>

		<section id="contacts">
			<ContactGrid contactData={contacts} />
		</section>

		<section id="email-form">
			<EmailForm />
		</section>
	</div>
</main>

<style lang="postcss">
	@reference "tailwindcss";
</style>
