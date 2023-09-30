<!-- src/routes/auth/signup.svelte -->
<script lang="ts">
	export let data;
	let { supabase } = data;
	$: ({ supabase } = data);

	let email: string;
	let password: string;

	const handleSignUp = async () => {
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`
			}
		});

		if (error) {
			console.error('Error signing up:', error.message);
			// Optionally provide user feedback here.
		}
	};
</script>

<form on:submit|preventDefault={handleSignUp}>
	<input class="input" placeholder="Email" type="email" autocomplete="email" bind:value={email} />
	<input
		class="input"
		type="password"
		placeholder="Password"
		autocomplete="current-password"
		bind:value={password}
	/>
	<button>Sign up</button>
</form>
