<script lang="ts">
	import NoLongerSignedIn from '$lib/components/elements/NoLongerSignedIn.svelte';
	import RadioGroup from '$lib/components/elements/RadioGroup.svelte';
	import TodoTable from '$lib/components/elements/TodoTable.svelte';
	import Plus from 'svelte-heros-v2/Plus.svelte';
	export let data;

	let { supabase, session, todos } = data;
	$: ({ supabase, session, todos } = data);

	let value: number = 0;
</script>

<div class="container h-full mx-auto flex flex-col items-center">
	{#if session}
		<h1 class="text-7xl mb-32 pt-16 sm:pt-24 lg:pt-32">
			<span
				class="bg-gradient-to-br from-purple-500 to-green-500 bg-clip-text text-transparent box-decoration-clone"
				>Simplify!</span
			>
		</h1>
		<div class="flex w-full justify-between mb-5 px-3 max-w-4xl">
			<span class="btn-icon"
				><Plus
					class={'h-6 w-6 outline-none focus:outline-none text-transparent'}
					strokeWidth="3"
				/></span
			>
			<RadioGroup bind:value />
			<a href={'/app/new-todo'} class="btn-icon variant-filled-primary"
				><Plus class={'h-6 w-6 outline-none focus:outline-none'} strokeWidth="3" /></a
			>
		</div>
		<div class="relative w-full max-w-4xl mx-auto">
			<div class="glow-bg absolute -inset-5 rounded-xl" />
			{#if value === 0}
				<TodoTable {todos} />
			{:else if value === 1}
				<div><p class="text-center py-20 text-2xl sm:text-3xl md:text-4xl">Coming Soon!</p></div>
			{/if}
		</div>
	{:else}
		<NoLongerSignedIn />
	{/if}
</div>
