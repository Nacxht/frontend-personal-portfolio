<script>
	import Badge from "$lib/components/reusable/badge/badge.svelte";
	import { BadgeVariant } from "$lib/components/reusable/badge/variant";
	import Button from "$lib/components/reusable/button/button.svelte";
	import { ButtonVariant } from "$lib/components/reusable/button/variant";
	import Card from "$lib/components/reusable/card/card.svelte";
	// import { marked } from "marked";
</script>

<main>
	<section id="name-badges-description">
		<h1>wildan haydar amru</h1>

		<div class="badges">
			<Badge variant={BadgeVariant.SECONDARY}>19 years old</Badge>
		</div>

		<p class="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat autem dolor illo ipsum
			provident quasi dolore voluptatibus magnam aspernatur non, vel minus pariatur in voluptatem
			vitae adipisci! Consequuntur, nam consequatur dolore aspernatur deserunt facere, eum, rem
			optio iusto atque eius? Quisquam libero officia ducimus dolores. Id perspiciatis consequatur
			veniam neque laudantium distinctio tenetur incidunt molestias rem illo amet sapiente ducimus
			necessitatibus voluptatibus facilis ex accusantium exercitationem earum nesciunt, animi
			deserunt molestiae consectetur atque! Itaque dolorum, repellat cumque facilis id dolores.
			Maxime quo nobis velit ipsum. Numquam minima est rem sit eum. Ab earum natus eos commodi error
			corporis suscipit. <br /> <br />

			Lorem ipsum dolor sit, amet consectetur adipisicing elit. At neque, sunt nemo qui excepturi
			numquam accusamus in distinctio consequatur iusto deleniti doloribus possimus dignissimos
			quibusdam doloremque, ipsum nostrum adipisci nihil ex eius. Accusantium optio atque deserunt
			sit voluptatibus et doloremque vel laudantium vitae fugit magnam delectus nisi excepturi nemo,
			architecto accusamus quod sequi. Rerum eaque nostrum cumque eius modi porro expedita impedit
			quis fugiat temporibus quaerat quam hic tempora aliquid, alias eligendi consequatur! Neque
			eaque architecto fugit sint deserunt, cum numquam qui? Atque quia, nostrum non excepturi,
			commodi totam expedita neque amet repellendus, pariatur dolores quasi assumenda dolor iusto!
			Necessitatibus.
		</p>
	</section>

	<hr class="divider" />

	<section id="recent-projects">
		<h2>recent projects</h2>

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
		</div>

		<Button variant={ButtonVariant.SECONDARY} href="/projects">show more</Button>
	</section>

	<hr class="divider" />

	<section id="service">
		<h2>service</h2>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit cupiditate vel ipsa magni
			suscipit neque eius! Similique, dolore quaerat! Ipsam modi voluptatem minus earum, sed quaerat
			qui aliquid labore animi rerum possimus repellat. Distinctio ipsam blanditiis et. Iusto
			eveniet excepturi quas ad itaque ut, delectus magnam placeat impedit qui, facilis distinctio
			ipsum quisquam minima optio magni, veritatis labore. Delectus earum praesentium sed. Veritatis
			rem odio libero quam nihil. Magni aliquid recusandae alias quas at labore modi asperiores
			molestiae hic reprehenderit quasi itaque quam dolor tempore eveniet quisquam, ut saepe quia
			assumenda neque culpa. Sit, ab vel fuga corrupti consectetur deserunt.
		</p>

		<div class="button">
			<Button href="/" variant={ButtonVariant.SECONDARY}>contact me</Button>
		</div>
	</section>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	section {
		@apply grid gap-[1.5rem];
	}

	#service .button {
		@apply w-[10rem];
	}

	#recent-projects .projects-grid {
		@apply grid grid-cols-2 gap-[0.5rem];
	}

	#recent-projects .card-content {
		@apply grid gap-[0.5rem];
	}

	#recent-projects .card-content img {
		@apply object-cover w-[100%] aspect-video rounded-md;
	}

	:global(.light) .card-content img {
		@apply border-2 border-gray-300;
	}

	:global(.dark) .card-content img {
		@apply border-2 border-gray-800;
	}

	#recent-projects .card-content .project-title {
		@apply flex justify-center items-center;
	}

	#recent-projects .card-content p {
		@apply text-xs lg:text-lg capitalize font-bold;
	}

	:global(.light) #recent-projects .card-content p {
		@apply text-gray-950;
	}

	:global(.dark) #recent-projects .card-content p {
		@apply text-gray-50;
	}
</style>
