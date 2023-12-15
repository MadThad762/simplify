<script lang="ts">
	import NoLongerSignedIn from '$lib/components/elements/NoLongerSignedIn.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import type { PageData } from './$types';
	import newTodoSchema from '$lib/schemas/newTodoSchema';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form, {
		validators: newTodoSchema
	});

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

{#if session}
	<div class="mx-auto max-w-md w-full h-full flex flex-col items-center justify-center">
		<h1 class="text-4xl sm:text-5xl md:text-5xl font-bold text-center">New Todo</h1>
		<form class="flex flex-col w-full space-y-5 mt-8" method="post" use:enhance>
			<input
				class={`${$errors.title && 'input-invalid'} input`}
				type="text"
				name="title"
				aria-invalid={$errors.title ? 'true' : undefined}
				placeholder="Title"
				bind:value={$form.title}
			/>
			{#if $errors.title}<span class="invalid">{$errors.title}</span>{/if}

			<textarea
				class={`${$errors.description && 'input-invalid'} textarea`}
				rows="4"
				name="description"
				aria-invalid={$errors.description ? 'true' : undefined}
				placeholder="Description"
				bind:value={$form.description}
			/>
			{#if $errors.description}<span class="invalid">{$errors.description}</span>{/if}

			<button class="btn variant-filled-primary">Submit</button>
		</form>
	</div>
{:else}
	<NoLongerSignedIn />
{/if}
