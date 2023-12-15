<script lang="ts">
	import NoLongerSignedIn from '$lib/components/elements/NoLongerSignedIn.svelte';
	import TodoTable from '$lib/components/elements/TodoTable.svelte';
	// @ts-ignore
	import Plus from 'svelte-heros-v2/Plus.svelte';
	export let data;

	let { supabase, session, todos } = data;
	$: ({ supabase, session, todos } = data);
</script>

<div class="container h-full mx-auto flex flex-col pt-16 sm:pt-24 lg:pt-32 items-center">
	{#if session}
		<h1 class="text-7xl mb-32">
			<span
				class="bg-gradient-to-br from-purple-500 to-green-500 bg-clip-text text-transparent box-decoration-clone"
				>Simplify!</span
			>
		</h1>
		<div class="relative w-full max-w-4xl mx-auto">
			<div class="glow-bg absolute -inset-5 rounded-xl" />
			<div class="flex w-full justify-end mb-5 pr-3">
				<a href={'/app/new-todo'} class="btn-icon variant-filled-primary"
					><Plus class={'h-6 w-6 outline-none focus:outline-none'} strokeWidth="3" /></a
				>
			</div>
			<TodoTable {todos} />
		</div>
	{:else}
		<NoLongerSignedIn />
	{/if}
</div>
