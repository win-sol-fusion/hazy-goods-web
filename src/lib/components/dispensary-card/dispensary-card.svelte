<script lang="ts">
    import FirstComponent from '../first-component/first-component.svelte'

    interface Dispensary {
        name: string
        address_1: string
        address_2: string
        city: string
        postal_code: string
    }

    export let dispensary: Dispensary
</script>

<div class="card">
    <header class="card-header">
        <FirstComponent
            inputName="Title"
            firstName={dispensary.name}
            errorMessage={dispensary.city}
        />
    </header>
    <section class="p-4">
        <p>{dispensary.address_1}</p>
        <p>{dispensary.address_2}</p>
        <p>{dispensary.city}</p>
        <p>{dispensary.postal_code}</p>
    </section>
    <footer class="card-footer">(footer)</footer>
</div>
