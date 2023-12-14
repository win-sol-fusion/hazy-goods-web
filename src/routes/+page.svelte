<script>
  export let data;
  import { AppBar, AppShell } from '@skeletonlabs/skeleton';
</script>


<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead">(icon)</svelte:fragment>
	(title)
	<svelte:fragment slot="trail">(actions)</svelte:fragment>
</AppBar>


<pre>{JSON.stringify(data.thing1, null, 2)}</pre>
