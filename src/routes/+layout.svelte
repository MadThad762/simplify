<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
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
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"
					><strong class="text-2xl mb-32">
						<span
							class="bg-gradient-to-br from-purple-500 to-green-500 bg-clip-text text-transparent box-decoration-clone"
							>Simplify</span
						>
					</strong></a
				>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				{#if session}
					<form action="/sign-out" method="POST">
						<button type="submit" class="btn variant-soft-primary">Logout</button>
					</form>
				{:else}
					<a class="btn variant-soft-tertiary" href="/sign-in"> Sign In </a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<main class="px-4 sm:px-6 lg:px-8 h-full">
		<slot />
	</main>
	<svelte:fragment slot="pageFooter"
		><p class="text-center text-sm leading-5 pb-12">
			&copy; {new Date().getFullYear()} Simplify. All rights reserved.
		</p></svelte:fragment
	>
</AppShell>
