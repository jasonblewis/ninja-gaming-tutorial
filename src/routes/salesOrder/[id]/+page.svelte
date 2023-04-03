<script>
    /** @type {import('./$types').PageData} */
    export let data;

</script>
<div class="salesOrder">
  <h2>Sales Order title: {data.title}</h2>
  <p>Sales order id: {data.id}</p>
</div>
<style>
  .salesOrder {
      margin-top: 40px;
      padding: 10px;
      border: 1px dotted rgba(255,255,255,0.2);
  }
</style>