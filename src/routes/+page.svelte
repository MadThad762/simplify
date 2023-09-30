<script lang="ts">
	import { IconPlus } from '@tabler/icons-svelte';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="relative">
		<div class="img-bg absolute -inset-10" />
		<button type="button" class="btn-icon variant-soft-tertiary"><IconPlus stroke={3} /></button>
	</div>
</div>

<style lang="postcss">
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
