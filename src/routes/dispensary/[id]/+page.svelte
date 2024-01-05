<script lang="ts">
    export let data
    const dispensary = data.dispensaryQuery.data
</script>

<h1>Show Dispensary</h1>
{#if !dispensary}
    <div>No record found</div>
{/if}
{#if dispensary}
    <div>
        <h1>{dispensary.name}</h1>
        <h3>{dispensary.address_1}</h3>
    </div>
{/if}
