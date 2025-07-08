<script lang="ts">
	import Button from "../button/button.svelte";
	import { ButtonVariant } from "../button/variant";
	import { fade, scale } from "svelte/transition";
	import { X } from "lucide-svelte";
	import { modal } from "$lib/stores/modal";
	import { onMount } from "svelte";
	import { onNavigate } from "$app/navigation";

	export let buttonVariant: ButtonVariant = ButtonVariant.DEFAULT;
	export let modalTitle: string;

	let isModalOpen: boolean = false;

	function openModal() {
		isModalOpen = true;
		modal.set(isModalOpen);

		updateHTMLClass();
	}

	function closeModal() {
		isModalOpen = false;
		modal.set(isModalOpen);

		updateHTMLClass();
	}

	function updateHTMLClass() {
		document.documentElement.classList.remove("modal-on", "modal-off");
		document.documentElement.classList.add(isModalOpen ? "modal-on" : "modal-off");
	}

	onMount(() => {
		modal.subscribe((value) => {
			isModalOpen = value;
			updateHTMLClass();
		});
	});

	onNavigate(() => {
		closeModal();

		modal.subscribe((value) => {
			isModalOpen = value;
			updateHTMLClass();
		});
	});
</script>

{#if isModalOpen}
	<div transition:fade={{ duration: 300 }} class="modal">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button type="button" class="modal-backdrop" on:click={closeModal}></button>

		<div transition:scale={{ start: 0, duration: 300 }} class="modal-content">
			<div class="top-modal">
				<p class="modal-title">
					{modalTitle}
				</p>

				<Button variant={ButtonVariant.GHOST} isIcon={true} on:click={closeModal}>
					<X />
				</Button>
			</div>

			<hr class="divider" />

			<slot name="modal-content" />
		</div>
	</div>
{/if}

<Button variant={buttonVariant} isIcon={true} on:click={openModal}>
	<slot name="button-content" />
</Button>

<style lang="postcss">
	@reference "tailwindcss";

	.modal {
		@apply absolute left-0 top-0 w-fit h-fit flex
		justify-center items-center;
	}

	.modal-backdrop {
		@apply bg-black/70 h-[100dvh] w-screen z-30;
	}

	.modal-content {
		@apply absolute p-[1rem] z-40 w-fit min-w-1/4 rounded-md
		grid gap-[0.5rem] mx-[1rem] bg-gray-950 border border-gray-800;
	}

	:global(.light) .modal-content {
		@apply bg-gray-50 border border-gray-300;
	}

	.modal-content .top-modal {
		@apply flex items-center justify-between;
	}

	.top-modal .modal-title {
		@apply font-bold text-lg capitalize;
	}
</style>
