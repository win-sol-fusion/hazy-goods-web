<script lang="ts">
    import { applyAction, enhance } from '$app/forms'
    import { goto } from '$app/navigation'
    import TextInput from '$lib/components/text-input/text-input.svelte'
    import type { SubmitFunction } from '@sveltejs/kit'
    import { validate } from 'validate.js'

    interface DispensaryFormData {
        name?: string
        address?: string
        city?: string
        region_id?: number
        zip?: string
    }

    const dispensaryFormDataValidations = {
        name: {
            presence: { allowEmpty: false },
        },
        address: {
            presence: { allowEmpty: false },
        },
        city: {
            presence: { allowEmpty: false },
        },
        region_id: {
            presence: { allowEmpty: false },
        },
        zip: {
            presence: { allowEmpty: false },
        },
    }

    export let form
    export let data

    // export let formData: DispensaryFormData = {}
    let formElement: HTMLFormElement | undefined

    let selectedStateId: string = ''
    let formValidationErrors: Partial<Record<string, string[]>> = {}

    // function handleSelectState(event: any) {
    //     event.preventDefault()
    //     const value = event.target.value
    //     formData.region_id = value === '' ? null : value
    // }

    function handleSubmit(event: Event) {
        event.preventDefault()
        // formValidationErrors = validate(formData, dispensaryFormDataValidations)
        fetch('?/create', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new FormData(formElement),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Data inserted successfully:', data)
            })
            .catch((error) => {
                console.error('Error inserting data:', error)
            })
    }

    const submitEnhancer: SubmitFunction = ({
        formElement,
        formData,
        action,
        cancel,
        submitter,
    }) => {
        const validationErrors = validate(
            Object.fromEntries(formData),
            dispensaryFormDataValidations
        )
        if (validationErrors) {
            formValidationErrors = validationErrors
            cancel()
        } else {
            // clear form validation errors
            formValidationErrors = {}
        }
    }

    // let currentFormData: DispensaryFormData
    // $: currentFormData = Object.fromEntries(new FormData(formElement))
</script>

<h1>Add Dispensary</h1>
<form
    method="POST"
    action="?/create"
    use:enhance={submitEnhancer}
    bind:this={formElement}
>
    <!-- bind:value={formData.name} -->
    <TextInput
        label="Dispensary Name"
        name="name"
        placeholder="Enter a dispensary name"
        validationErrors={formValidationErrors.name}
    />
    <!-- bind:value={formData.address} -->
    <TextInput
        label="Address"
        name="address"
        placeholder="Street Address"
        validationErrors={formValidationErrors.address}
    />
    <!-- bind:value={formData.city} -->
    <TextInput
        label="City"
        name="city"
        placeholder="City"
        validationErrors={formValidationErrors.city}
    />
    <label for="selectedStates">
        State
        <!-- on:change={handleSelectState} -->
        <select
            id="selectedStates"
            name="region_id"
            bind:value={selectedStateId}
        >
            <option value="" selected={!selectedStateId}>Select a state</option>
            {#each data.states as state (state.id)}
                <option value={state.id}>{state.name}</option>
            {/each}
        </select>
    </label>
    <!-- bind:value={formData.zip} -->
    <TextInput
        label="Zip Code"
        name="zip"
        placeholder="Zip Code"
        validationErrors={formValidationErrors.zip}
    />

    <button type="submit">Save</button>
</form>

<h1>
    Results
    {#if form?.success}
        ✅
    {/if}
</h1>
<pre>{JSON.stringify(form, null, 2)}</pre>

<!-- <h1>Current Form</h1>
<pre>{JSON.stringify(currentFormData, null, 2)}</pre> -->
