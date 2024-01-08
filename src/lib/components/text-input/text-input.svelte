<script lang="ts">
    export let label: string | undefined
    export let name: string
    export let type = 'text'
    export let value = type === 'text' ? '' : null
    export let placeholder: string | undefined = ''
    export let validationErrors: string[] | undefined = []

    let inputErrorStyles = ''
    $: inputErrorStyles =
        validationErrors && validationErrors.length > 0
            ? 'border-error-500'
            : ''

    function handleInput({ target: t }: { target: any }) {
        if (type === 'number') {
            value = t.value === '' ? null : t.valueAsNumber
        } else {
            value = t.value
        }
    }
</script>

<div>
    <label class="label"
        >{label}
        <input
            class="input border-2 {inputErrorStyles}"
            {name}
            {type}
            {value}
            {placeholder}
            on:input={handleInput}
            on:input
            on:blur
        />
    </label>
    <div class="">
        {#if validationErrors && validationErrors.length > 0}
            {#each validationErrors as error (error)}
                <p class="font-light text-sm text-error-500 italic">{error}</p>
            {/each}
        {/if}
    </div>
</div>
