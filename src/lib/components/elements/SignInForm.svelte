<script lang="ts">
	import { enhance } from '$app/forms';
	export let form: any;
</script>

<div class="mx-auto max-w-md w-full h-full flex flex-col items-center justify-center">
	<h1 class="text-4xl sm:text-5xl md:text-5xl font-bold text-center">Sign In</h1>
	<form class="flex flex-col w-full space-y-5 mt-8" method="post" use:enhance>
		<input
			class="input"
			name="email"
			placeholder="Email"
			autocomplete="email"
			value={form?.email ?? ''}
		/>
		<input
			class="input (password)"
			type="password"
			name="password"
			placeholder="Password"
			autocomplete="current-password"
		/>
		<button class="btn variant-filled-primary">Sign In</button>
	</form>
</div>
