<script lang="ts">
    import { Icon } from '@steeze-ui/svelte-icon'
    import { MagnifyingGlass } from '@steeze-ui/heroicons'
    import DispensaryCard from '$lib/components/dispensary-card/dispensary-card.svelte'

    export let data
</script>

<h1>Browse Dispensaries</h1>
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim">
        <Icon src={MagnifyingGlass} size="24px" theme="outline" />
    </div>
    <input type="search" placeholder="Search dispensaries..." />
    <button class="variant-filled-secondary">Search</button>
</div>
{#each data.dispensariesQuery.data || [] as dispensary}
    <DispensaryCard {dispensary} />
{/each}
