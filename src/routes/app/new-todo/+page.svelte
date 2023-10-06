<script lang="ts">
	import NewTodoForm from '$lib/components/elements/NewTodoForm.svelte';
	import NoLongerSignedIn from '$lib/components/elements/NoLongerSignedIn.svelte';
	export let form;
	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);
</script>

{#if session}
	<NewTodoForm {form} />
{:else}
	<NoLongerSignedIn />
{/if}
```
