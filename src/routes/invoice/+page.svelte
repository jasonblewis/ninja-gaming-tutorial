<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data);
</script>
  
<div class="invoices">
    <ul>
        {#each data.invoices.items as invoice}
            <li>
                <a href={`/invoice/${invoice.id}`}>{invoice.id}</a>
            </li>
        {/each}
    </ul>
</div>
  
  <style>
      .invoices {
          margin-top: 20px;
  
      }
      ul  {
          list-style-type: none;
          padding: 0;
      }
  
      a   {
          display: inline-block;
          margin-top: 10px;
          padding: 10px;
          bottom: 1px dotted rgba(255,255,255,0.2);
      }
  </style>