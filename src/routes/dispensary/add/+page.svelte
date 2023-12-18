<script lang="ts">
    export let form
    export let data
    let selectedStateId: string = ''

    function handleSelectState(event: any) {
        event.preventDefault()
        const value = event.target.value
        selectedStateId = value === '' ? null : value
        console.log('Selected State ID1:', selectedStateId)
    }

    function handleSubmit(event: Event) {
        event.preventDefault()

        if (selectedStateId !== null) {
            const formData = new FormData(
                event.currentTarget as HTMLFormElement
            )
            formData.set('state', selectedStateId.toString())
            fetch('?/create', {
                method: 'POST',
                body: formData,
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Data inserted successfully:', data)
                })
                .catch((error) => {
                    console.error('Error inserting data:', error)
                })
        } else {
            console.error('No state selected')
        }
    }
</script>

<h1>Add Dispensary</h1>
<form on:submit={handleSubmit}>
    <label>
        Dispensary Name
        <input name="name" type="input" />
    </label>
    <label>
        Address
        <input name="address" type="input" />
    </label>
    <label>
        City
        <input name="city" type="input" />
    </label>
    <label for="selectedStates">
        State
        <select
            id="selectedStates"
            on:change={handleSelectState}
        >
        <option value="" selected={!selectedStateId}>Select a state</option>
            {#each data.states as state (state.id)}
                <option value={state.id} selected={state.id === selectedStateId}>{state.name}</option>
            {/each}
        </select>
    </label>
    <label>
        Zip Code
        <input name="zip" type="input" />
    </label>

    <button type="submit">Save</button>
</form>

<h1>
    Results
    {#if form?.success}
        ✅
    {/if}
</h1>

<pre>{JSON.stringify(form, null, 2)}</pre>
