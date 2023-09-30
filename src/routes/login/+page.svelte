<!-- src/routes/auth/login.svelte -->
<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	const handleSignIn = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			console.error('Error signing in:', error.message);
			// Optionally provide user feedback here.
		}
	};
</script>

<form on:submit|preventDefault={handleSignIn}>
	<input class="input" placeholder="Email" type="email" autocomplete="email" bind:value={email} />
	<input
		class="input"
		type="password"
		placeholder="Password"
		autocomplete="current-password"
		bind:value={password}
	/>
	<button>Sign in</button>
</form>
