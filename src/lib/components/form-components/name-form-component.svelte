<script lang="ts">
    export let labelName: string | undefined
    export let inputName: string | undefined
    export let nameError: string[] = []
    export let placeholderName: string | undefined

    const errorHandler = (e: any) => {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/
        const inputValue = e.target.value

        if (inputValue.trim() === "") {
            nameError.push('Name is required')
        }

        if (!alphanumericRegex.test(inputValue)) {
            nameError.push('Invalid input. Please use numbers or letters')
        }
    }
</script>

<div>
    {#if nameError}
        <p>{nameError}</p>
    {/if}
    <label
        >{labelName}
        <input
            name={inputName}
            value={inputName}
            type="input"
            placeholder={placeholderName}
            on:input={errorHandler}
        />
    </label>
</div>
