<script lang="ts">
	import TechstackCard from "$lib/components/reusable/techstack-card/techstack-card.svelte";

	export let data;
	const { svgs } = data;
</script>

<main>
	<div class="container">
		<section id="title">
			<h1>Tech Stack</h1>
		</section>

		<hr class="divider" />

		<section id="currently-used">
			<TechstackCard iconSVGs={svgs}>
				<div slot="title">Currently Use</div>

				<div slot="description">The tech stack i currently use right now</div>
			</TechstackCard>
		</section>

		<section id="want-learn">
			<TechstackCard iconSVGs={svgs}>
				<div slot="title">I want to learn</div>

				<div slot="description">The things i really want to try or learn</div>
			</TechstackCard>
		</section>
	</div>
</main>

<style lang="postcss">
	@reference "tailwindcss";
</style>
