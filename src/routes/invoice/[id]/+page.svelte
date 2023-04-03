<script>
      /** @type {import('./$types').PageData} */
      export let data;

</script>
<div class="invoice">
    <h2>{data.invoice.tranId}</h2>
    <p>Customer Code: {data.invoice.custbody_customername}</p>
    <p>Date: {data.invoice.tranDate}</p>
    <p>Total: {data.invoice.total}</p>
    <p>Account id: {data.invoice.account.id}</p>
    <p>Entity: {data.invoice.entity.refName}</p>
</div>
<style>
    .invoice {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>