<script lang="ts">
    import { createEventDispatcher } from 'svelte'

    export let labelName: string | undefined
    export let inputName: string | undefined
    export let placeholderName: string | undefined

    export let nameErrors: string[] = []
    const dispatch = createEventDispatcher()

    const errorHandler = (e: any) => {
        nameErrors = []

        const alphanumericRegex = /^[a-zA-Z0-9\s]+$/

        const inputValue = e.target.value
        let maxLength = 50
        let minLength = 2
        if (inputValue.trim() === '') {
            nameErrors.push('Name is required')
        }

        if (!alphanumericRegex.test(inputValue)) {
            nameErrors.push('Invalid input. Please use numbers or letters')
        }

        if (inputValue.length > maxLength) {
            nameErrors.push('There is a 50 character limit')
        }

        if (inputValue.length <= minLength) {
            nameErrors.push('Must be at least 2 characters')
        }
        dispatch('inputError', { inputName, nameErrors })
    }

    let inputValue = inputName || ""
    $: {
        inputValue
    }
</script>

<div>
    {#if nameErrors.length > 0}
        {#each nameErrors as error (error)}
            <p>{error}</p>
        {/each}
    {/if}
    <label
        >{labelName}
        <input
            name={inputName}
            bind:value={inputValue}
            type="input"
            placeholder={placeholderName}
            on:input={errorHandler}
        />
    </label>
</div>
