<script lang="ts">
    export let firstName: string
    export let inputName: string
    export let errorMessage: string | undefined
</script>

<div class="bg-primary-500 p-2">
    <p class="bg-secondary-500">{inputName} for {firstName}</p>
    {#if errorMessage}
        <p class="text-error-800">{errorMessage}</p>
    {/if}
</div>
