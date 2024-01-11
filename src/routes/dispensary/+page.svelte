<script lang="ts">
    import { Icon } from '@steeze-ui/svelte-icon'
    import { MagnifyingGlass } from '@steeze-ui/heroicons'
    import DispensaryCard from '$lib/components/dispensary-card/dispensary-card.svelte'
    import { Paginator, type PaginationSettings } from '@skeletonlabs/skeleton'

    export let data

    let dispensaries: any[] = []
    let paginationSettings = {
        page: 0,
        limit: 3,
        size: 0,
        amounts: [3, 10],
    } satisfies PaginationSettings

    $: dispensaries =
        data.dispensariesQuery.data?.slice(
            paginationSettings.page * paginationSettings.limit,
            paginationSettings.page * paginationSettings.limit +
                paginationSettings.limit
        ) || []

    $: paginationSettings.size = data.dispensariesQuery.data?.length || 0
</script>

<h1>Browse Dispensaries</h1>
<div class="input-group input-group-divider grid-cols-[auto_1fr_auto]">
    <div class="input-group-shim">
        <Icon src={MagnifyingGlass} size="24px" theme="outline" />
    </div>
    <input type="search" placeholder="Search dispensaries..." />
    <button class="variant-filled-secondary">Search</button>
</div>
{#each dispensaries as dispensary}
    <DispensaryCard {dispensary} />
{/each}
<Paginator bind:settings={paginationSettings} controlVariant="variant-ghost" />
