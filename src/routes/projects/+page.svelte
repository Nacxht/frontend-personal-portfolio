<script lang="ts">
	import Button from "$lib/components/reusable/button/button.svelte";
	import { ButtonVariant } from "$lib/components/reusable/button/variant";
	import Card from "$lib/components/reusable/card/card.svelte";
	import TextNumber from "$lib/components/reusable/input/text-number/text-number.svelte";
	import { TextNumberVariant } from "$lib/components/reusable/input/text-number/variant";
	import Pagination from "$lib/components/reusable/pagination/pagination.svelte";

	//
</script>

<main>
	<section id="projects">
		<h1>projects</h1>

		<hr class="divider" />

		<div class="search-input">
			<TextNumber
				type={TextNumberVariant.TEXT}
				name="search"
				id="search"
				width="w-full lg:w-[20rem]"
				placeholder="Search projects..."
			/>
			<Button variant={ButtonVariant.SECONDARY}>Search</Button>
		</div>

		<div class="projects-grid">
			<Card href="/">
				<div class="card-content">
					<img src="https://picsum.photos/1280/720" alt="lorem-ipsum" />

					<hr class="divider" />

					<div class="project-title">
						<p>lorem ipsum</p>
					</div>
				</div>
			</Card>

			<Card href="/">
				<div class="card-content">
					<img src="https://picsum.photos/1280/720" alt="lorem-ipsum" />

					<hr class="divider" />

					<div class="project-title">
						<p>lorem ipsum</p>
					</div>
				</div>
			</Card>

			<Card href="/">
				<div class="card-content">
					<img src="https://picsum.photos/1280/720" alt="lorem-ipsum" />

					<hr class="divider" />

					<div class="project-title">
						<p>lorem ipsum</p>
					</div>
				</div>
			</Card>

			<Card href="/">
				<div class="card-content">
					<img src="https://picsum.photos/1280/720" alt="lorem-ipsum" />

					<hr class="divider" />

					<div class="project-title">
						<p>lorem ipsum</p>
					</div>
				</div>
			</Card>

			<Card href="/">
				<div class="card-content">
					<img src="https://picsum.photos/1280/720" alt="lorem-ipsum" />

					<hr class="divider" />

					<div class="project-title">
						<p>lorem ipsum</p>
					</div>
				</div>
			</Card>

			<Card href="/">
				<div class="card-content">
					<img src="https://picsum.photos/1280/720" alt="lorem-ipsum" />

					<hr class="divider" />

					<div class="project-title">
						<p>lorem ipsum</p>
					</div>
				</div>
			</Card>
		</div>

		<div class="project-pagination">
			<Pagination totalPage={3} withOutline={true} />
		</div>
	</section>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	#projects .search-input {
		@apply flex items-center gap-[0.5rem];
	}

	#projects .projects-grid {
		@apply grid grid-cols-2 gap-[0.5rem];
	}

	#projects .card-content {
		@apply grid gap-[0.5rem];
	}

	#projects .card-content img {
		@apply object-cover w-[100%] aspect-video rounded-md;
	}

	:global(.light) .card-content img {
		@apply border-2 border-gray-300;
	}

	:global(.dark) .card-content img {
		@apply border-2 border-gray-800;
	}

	#projects .card-content .project-title {
		@apply flex justify-center items-center;
	}

	#projects .card-content p {
		@apply text-xs lg:text-lg capitalize font-bold;
	}

	:global(.light) #projects .card-content p {
		@apply text-gray-950;
	}

	:global(.dark) #projects .card-content p {
		@apply text-gray-50;
	}

	#projects .project-pagination {
		@apply flex justify-center;
	}
</style>
