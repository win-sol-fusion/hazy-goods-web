<script lang="ts">
    // import { createEventDispatcher } from 'svelte'

    export let label: string | undefined
    export let inputName: string | undefined
    export let inputValue: string | undefined
    export let placeholder: string | undefined
    export let validationErrors: string[] = []
    // const dispatch = createEventDispatcher()

    let inputErrorStyles = ''
    $: inputErrorStyles = validationErrors.length > 0 ? 'border-error-500' : ''
</script>

<div>
    <label class="label"
        >{label}
        <input
            class="input border-2 {inputErrorStyles}"
            name={inputName}
            bind:value={inputValue}
            type="input"
            {placeholder}
        />
    </label>
    <div class="">
        {#if validationErrors.length > 0}
            {#each validationErrors as error (error)}
                <p class="font-light text-sm text-error-500 italic">{error}</p>
            {/each}
        {/if}
    </div>
</div>
