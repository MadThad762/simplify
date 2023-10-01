<script lang="ts">
	import NoLongerSignedIn from '$lib/components/elements/NoLongerSignedIn.svelte';
	import { IconPlus } from '@tabler/icons-svelte';
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	{#if session}
		<div class="relative">
			<div class="img-bg absolute -inset-10" />
			<!-- <a href={'/'} class="btn-icon variant-filled-primary"><IconPlus stroke={3} /></a> -->
		</div>
	{:else}
		<NoLongerSignedIn />
	{/if}
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
