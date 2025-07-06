<script lang="ts">
	import ExperienceCard from "$lib/components/pages/experiences/experience-card.svelte";
	import Button from "$lib/components/reusable/button/button.svelte";
	import { ButtonVariant } from "$lib/components/reusable/button/variant";
	import TextNumber from "$lib/components/reusable/input/text-number/text-number.svelte";
	import { TextNumberVariant } from "$lib/components/reusable/input/text-number/variant";
	import Pagination from "$lib/components/reusable/pagination/pagination.svelte";
</script>

<main>
	<div class="container">
		<section id="page-title">
			<h1>experiences</h1>
		</section>

		<hr class="divider" />

		<section id="search-input">
			<TextNumber
				type={TextNumberVariant.TEXT}
				name="search"
				id="search"
				width="w-full lg:w-[20rem]"
				placeholder="Search experiences..."
			/>

			<Button variant={ButtonVariant.SECONDARY}>Search</Button>
		</section>

		<section id="experiences">
			<div class="experiences-grid">
				<ExperienceCard category="Internship" periodStart="2022" periodEnd="2023">
					<div slot="title">Internship at PT. Pineleng Indah Cemerlang</div>

					<div slot="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi explicabo nostrum
						quibusdam, esse quo debitis, distinctio molestiae laborum excepturi pariatur est impedit
						quas quos eos ipsa, voluptate quisquam iste quasi expedita. Hic incidunt totam
						recusandae molestiae earum fugiat, necessitatibus saepe error sed dolorum numquam eum
						ratione repellat dolor maxime est!
					</div>
				</ExperienceCard>

				<ExperienceCard category="Internship" periodStart="2022" periodEnd="2023">
					<div slot="title">Internship at PT. Pineleng Indah Cemerlang</div>

					<div slot="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi explicabo nostrum
						quibusdam, esse quo debitis, distinctio molestiae laborum excepturi pariatur est impedit
						quas quos eos ipsa, voluptate quisquam iste quasi expedita. Hic incidunt totam
						recusandae molestiae earum fugiat, necessitatibus saepe error sed dolorum numquam eum
						ratione repellat dolor maxime est!
					</div>
				</ExperienceCard>

				<ExperienceCard category="Internship" periodStart="2022" periodEnd="2023">
					<div slot="title">Internship at PT. Pineleng Indah Cemerlang</div>

					<div slot="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi explicabo nostrum
						quibusdam, esse quo debitis, distinctio molestiae laborum excepturi pariatur est impedit
						quas quos eos ipsa, voluptate quisquam iste quasi expedita. Hic incidunt totam
						recusandae molestiae earum fugiat, necessitatibus saepe error sed dolorum numquam eum
						ratione repellat dolor maxime est!
					</div>
				</ExperienceCard>

				<ExperienceCard category="Internship" periodStart="2022" periodEnd="2023">
					<div slot="title">Internship at PT. Pineleng Indah Cemerlang</div>

					<div slot="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi explicabo nostrum
						quibusdam, esse quo debitis, distinctio molestiae laborum excepturi pariatur est impedit
						quas quos eos ipsa, voluptate quisquam iste quasi expedita. Hic incidunt totam
						recusandae molestiae earum fugiat, necessitatibus saepe error sed dolorum numquam eum
						ratione repellat dolor maxime est!
					</div>
				</ExperienceCard>
			</div>
		</section>

		<section id="experiences-pagination">
			<Pagination currentPage={1} totalPage={3} withOutline={true} />
		</section>
	</div>
</main>

<style lang="postcss">
	@reference "tailwindcss";

	#search-input {
		@apply flex items-center gap-[0.5rem];
	}

	#experiences .experiences-grid {
		@apply grid md:grid-cols-2 gap-[1rem];
	}

	#experiences-pagination {
		@apply flex justify-center;
	}
</style>
