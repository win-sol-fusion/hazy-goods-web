<script>
    export let data
</script>

<ul class="mt-8">
    <li>
        <span>(icon)</span>
        <span class="flex-auto"
            ><pre>{JSON.stringify(data.thing1, null, 2)}</pre></span
        >
    </li>
    <!-- ... -->
</ul>
