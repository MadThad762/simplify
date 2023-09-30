<script>
	import LoginSignUp from '$lib/components/elements/LoginSignUpForm.svelte';
	export let form;
</script>

<LoginSignUp {form} isLogin={false} />
