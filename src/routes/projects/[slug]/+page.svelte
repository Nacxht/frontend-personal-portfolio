<script lang="ts">
	import TechstackCard from "$lib/components/reusable/techstack-card/techstack-card.svelte";

	export let data;
	const { svgs } = data;
</script>

<main>
	<div class="container">
		<section id="thumbnail-title">
			<img class="thumbnail" src="https://picsum.photos/1280/720" alt="lorem-ipsum" />
			<h2>Lorem ipsum dolor sit amet.</h2>
		</section>

		<hr class="divider" />

		<section id="project-description">
			<p class="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. In, perspiciatis. Neque,
				blanditiis! Vero sunt totam iusto maxime possimus cum non, iste voluptates assumenda soluta
				dolorem eligendi labore doloribus distinctio culpa autem quis ea, quo temporibus
				exercitationem sapiente corrupti reiciendis. Corrupti consequatur voluptates suscipit ad
				officiis asperiores maxime similique itaque placeat blanditiis officia enim, mollitia ipsum
				cum dicta molestias perspiciatis obcaecati esse commodi odit? Sed magni maiores quo porro
				nemo dolore culpa hic, rem doloremque soluta, molestias recusandae similique quam aut
				deserunt ipsa repellendus laboriosam eos. Quos dolor officia beatae, libero voluptas
				pariatur obcaecati quo ipsum nemo accusamus voluptatem natus fugiat dicta ex, eaque ad quam
				aperiam error repellendus inventore impedit! Eaque at excepturi earum deserunt perspiciatis,
				nobis quisquam, iusto ipsam, aliquid quaerat aperiam dolores porro quia quidem vero soluta
				rerum velit? Praesentium rerum minus inventore nihil reiciendis culpa similique nesciunt.
				Iste rerum totam a ullam! Blanditiis libero officia in repellat, maiores, perferendis enim
				saepe harum consectetur veritatis quia molestiae, numquam ullam earum excepturi modi fugit.
				A iste dignissimos rem ullam minus explicabo, soluta pariatur magnam temporibus aspernatur
				doloremque veniam accusantium sequi tempora nostrum officia voluptates similique illum hic
				esse suscipit. Distinctio laboriosam obcaecati temporibus officiis dolorum id neque eveniet
				ex!

				<br /><br />

				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, fugit eum repellendus ipsum
				consequatur omnis nesciunt asperiores recusandae consequuntur, tempora quos necessitatibus
				maxime doloribus. Amet recusandae nobis rem enim nostrum esse eligendi expedita, nihil cum
				nam? Cumque, nostrum? Fugiat deleniti voluptatum perspiciatis quis iusto! Quaerat pariatur
				assumenda unde ipsa cupiditate enim, neque perferendis nam, exercitationem accusantium nemo
				laboriosam omnis ex, natus adipisci nostrum facilis porro ad officia quam fuga in possimus
				fugiat. Officiis modi dolore, exercitationem omnis laudantium nam ullam dicta deserunt.
				Nulla debitis rem aliquid inventore ducimus cupiditate, reiciendis perferendis quia beatae.
				Exercitationem, tempore. In nulla quibusdam magnam incidunt!
			</p>
		</section>

		<section id="techstack">
			<TechstackCard iconSVGs={svgs}>
				<div slot="title">Tech Stack</div>

				<div slot="description">Tools & Frameworks I used to build this project</div>
			</TechstackCard>
		</section>
	</div>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	#thumbnail-title img.thumbnail {
		@apply object-cover rounded-md border-3 border-gray-800 aspect-video;
	}

	:global(.light) #thumbnail-title img.thumbnail {
		@apply border-gray-300;
	}

	#thumbnail-title h2 {
		@apply text-center;
	}
</style>
