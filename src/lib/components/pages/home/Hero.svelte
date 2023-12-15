<script>
	import screenshot from '$lib/assets/images/screenshot.png';
</script>

<div class="py-24 sm:py-32">
	<div class="mx-auto max-w-6xl px-6 lg:px-8">
		<div class="mx-auto text-center">
			<div class="max-w-2xl mx-auto items-center justify-center flex flex-col mb-16 sm:mb-24">
				<h1 class="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
					Welcome to <span
						class="bg-gradient-to-br from-purple-500 to-green-500 bg-clip-text text-transparent box-decoration-clone"
						>Simplify!</span
					>
				</h1>
				<p class="mt-6 text-lg sm:text-xl leading-8">
					Organizing tasks and capturing your thoughts is more intuitive than ever. Streamline your
					day with ease and let Simplify transform your productivity.
				</p>
				<div class="flex felx-row space-x-4 mt-8">
					<a href={'/sign-up'} class="btn variant-filled-primary">Get Started</a>
					<a href={'/sign-in'} class="btn variant-filled-secondary">Sign In</a>
				</div>
			</div>
			<div class="relative flex flex-col items-center justify-center">
				<div class="img-bg absolute -inset-0" />

				<img
					src={screenshot}
					alt="App screenshot"
					width="2432"
					height="1442"
					class="rounded-md shadow-2xl"
				/>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.img-bg {
		@apply absolute z-[-1] rounded-md blur-[50px] transition-all;
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
			transform: scale(1.1);
		}
	}
</style>
