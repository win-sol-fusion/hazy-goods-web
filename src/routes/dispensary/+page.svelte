<script>
  export let form;
</script>

<h1>Create Dispensary</h1>
<form method="POST" action="?/create">
  <label>
    Name
    <input name="name" type="input" />
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
