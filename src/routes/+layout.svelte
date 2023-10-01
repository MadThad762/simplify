<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="bg-primary-secondary-tertiary">
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">SIMPLIFY</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if session}
					<form action="/logout" method="POST">
						<button type="submit" class="btn variant-soft-tertiary">Logout</button>
					</form>
				{:else}
					<a class="btn variant-soft-tertiary" href="/login"> Sign In </a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
