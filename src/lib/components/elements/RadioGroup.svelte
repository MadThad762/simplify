<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	export let value: number;
</script>

<RadioGroup active="variant-filled-primary" hover="hover:variant-soft-primary">
	<RadioItem bind:group={value} name="justify" value={0}>Todos</RadioItem>
	<RadioItem bind:group={value} name="justify" value={1}>Notes</RadioItem>
</RadioGroup>
