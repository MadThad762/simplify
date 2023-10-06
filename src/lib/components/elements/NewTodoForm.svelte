<script lang="ts">
	import { enhance } from '$app/forms';
	export let form: any;
</script>

<div class="mx-auto max-w-md w-full h-full flex flex-col items-center justify-center">
	<h1 class="text-4xl sm:text-5xl md:text-5xl font-bold text-center">New Todo</h1>
	<form class="flex flex-col w-full space-y-5 mt-8" method="post" use:enhance>
		<input class="input" type="text" name="title" placeholder="Title" value={form?.title ?? ''} />
		<textarea
			class="textarea"
			rows="4"
			name="description"
			placeholder="Description"
			value={form?.description ?? ''}
		/>
		<button class="btn variant-filled-primary">Submit</button>
	</form>
</div>
