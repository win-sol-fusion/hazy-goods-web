<script lang="ts">
    import { Icon } from '@steeze-ui/svelte-icon'
    import { MagnifyingGlass } from '@steeze-ui/heroicons'

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
    <div class="card">
        <header class="card-header">
            {dispensary.name}
        </header>
        <section class="p-4">
            <p>{dispensary.address_1}</p>
            <p>{dispensary.address_2}</p>
            <p>{dispensary.city}</p>
            <p>{dispensary.postal_code}</p>
        </section>
        <footer class="card-footer">(footer)</footer>
    </div>
{/each}
