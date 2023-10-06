<script lang="ts">
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="relative flex flex-col items-center justify-center">
		<div class="img-bg absolute -inset-0" />
		<h1 class="text-4xl sm:text-5xl md:text-5xl font-bold text-center">Welcome to Simplify!</h1>
		<div class="flex felx-row space-x-4 mt-8">
			<a href={'/sign-up'} class="btn variant-filled-primary">Sign Up</a>
			<a href={'/sign-in'} class="btn variant-filled-secondary">Sign In</a>
		</div>
	</div>
</div>

<style lang="postcss">
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite, glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	}
</style>
