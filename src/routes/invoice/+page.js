/** @type {import('./$types').PageLoad} */
export async function load({ fetch,params }) {
     const res = await fetch('http://127.0.0.1:3000/invoice')
      const invoices = await res.json()
      console.log(invoices)
     
      if (res.ok) {
        return {
                invoices
            }
        }
     

     return {
        status: res.status,
        error: new Error('Could not fetch the invoices')
     }
}
    

