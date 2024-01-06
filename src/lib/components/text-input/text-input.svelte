<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let label: string | undefined
    export let inputName: string | undefined
    export let inputValue: string | undefined
    export let placeholder: string | undefined

    export let validationErrors: string[] = []
    const dispatch = createEventDispatcher()
</script>

<div>
    {#if validationErrors.length > 0}
        {#each validationErrors as error (error)}
            <p>{error}</p>
        {/each}
    {/if}
    <label class="label"
        >{label}
        <input
            class="input"
            name={inputName}
            bind:value={inputValue}
            type="input"
            {placeholder}
        />
    </label>
</div>
