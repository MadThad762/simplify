<script lang="ts">
	// @ts-ignore
	import Check from 'svelte-heros-v2/Check.svelte';

	export let todos: { id: number; title: string; description: string }[] | undefined;
</script>

<div class="table-container">
	<!-- Native Table Element -->
	<table class="table max-w-4xl w-full">
		<thead>
			<tr>
				<th>Title</th>
				<th>Description</th>
				<th />
			</tr>
		</thead>
		<tbody>
			{#if todos}
				{#each todos as row, i}
					<tr>
						<td>{row.title}</td>
						<td>{row.description}</td>
						<td class="w-px"
							><form class="opacity-30 hover:opacity-100" method="post">
								<input type="hidden" name="id" value={row.id} />
								<button class="btn-icon btn-icon-sm variant-soft-primary"
									><Check
										class={'h-4 w-4 outline-none focus:outline-none'}
										strokeWidth="3"
									/></button
								>
							</form></td
						>
					</tr>
				{/each}
			{/if}
			{#if todos?.length === 0}
				<tr>
					<td colspan="3" class="text-xl font-bold">Todo list conquered! You're on fire!</td>
				</tr>
			{/if}
		</tbody>
	</table>
</div>

<style>
	tr,
	td {
		vertical-align: bottom;
	}
</style>
