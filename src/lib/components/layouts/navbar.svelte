<script lang="ts">
	import Button from "../reusable/button/button.svelte";
	import { Menu, Home } from "lucide-svelte";
	import { ButtonVariant } from "../reusable/button/variant";
	import Modal from "../reusable/modal/modal.svelte";
</script>

<nav>
	<Button href="/" variant={ButtonVariant.GHOST} isIcon={true}>
		<Home />
	</Button>

	<Modal buttonVariant={ButtonVariant.GHOST} modalTitle={"menu"}>
		<div class="" slot="button-content">
			<Menu />
		</div>

		<div class="menu-modal-content" slot="modal-content">
			<Button variant={ButtonVariant.SECONDARY} isWidthFit={false} href="/projects">
				<p class="menu-modal-text">projects</p>
			</Button>

			<Button variant={ButtonVariant.SECONDARY} isWidthFit={false} href="/educations">
				<p class="menu-modal-text">educations</p>
			</Button>

			<Button variant={ButtonVariant.SECONDARY} isWidthFit={false} href="/experiences">
				<p class="menu-modal-text">experiences</p>
			</Button>

			<Button variant={ButtonVariant.SECONDARY} isWidthFit={false} href="/techstack">
				<p class="menu-modal-text">tech stack</p>
			</Button>

			<div class="last-menu">
				<Button variant={ButtonVariant.SECONDARY} isWidthFit={false} href="/contacts">
					<p class="menu-modal-text">contacts</p>
				</Button>
			</div>
		</div>
	</Modal>
</nav>

<style lang="postcss">
	@reference "tailwindcss";

	nav {
		@apply flex justify-between px-[1rem] lg:px-[30rem] py-[1rem] sticky top-0 z-20
		backdrop-blur-md transition-all ease-in-out border-b border-gray-800;
	}

	:global(.light) nav {
		@apply border-gray-400;
	}

	.menu-modal-content {
		@apply grid grid-cols-2 gap-[0.5rem];
	}

	.menu-modal-content .last-menu {
		@apply col-span-2;
	}
</style>
