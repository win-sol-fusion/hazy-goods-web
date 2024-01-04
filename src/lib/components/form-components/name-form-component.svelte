<script lang="ts">
    export let labelName: string | undefined
    export let inputName: string | undefined
    export let nameError: string[] = []
    export let placeholderName: string | undefined

    const errorHandler = (e: any) => {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/
        const inputValue = e.target.value
        let maxLength = 50
        let minLength = 1
        if (inputValue.trim() === "") {
            nameError.push('Name is required')
        }

        if (!alphanumericRegex.test(inputValue)) {
            nameError.push('Invalid input. Please use numbers or letters')
        }

        if(inputValue.length  > maxLength ) {
            nameError.push('There is a 50 character limit')
        }
        
        if(inputValue.length <= minLength) {
            nameError.push('Must be at least 2 characters')
        }
        
    }
</script>

<div>
    {#if nameError.length > 0}
    {#each nameError as error (error)}
        <p>{error}</p>
        {/each}
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
