<script>
    export let form
</script>

<h1>Add Dispensary</h1>
<form method="POST" action="?/create">
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
    <input name="city" type="input"/>
  </label>
  <label>
    State
    <input name="state" type="input"/>
  </label>
  <label>
    Zip Code
    <input name='zip' type="input" />
  </label>
  <label>
    Status
    <input name="status" type="input"/>
  </label>
  <label>
    Created By
    <input name="createdBy" type="input">
  </label>
  <button>Save</button>
</form>

<h1>
    Results
    {#if form?.success}
        ✅
    {/if}
</h1>

<pre>{JSON.stringify(form, null, 2)}</pre>