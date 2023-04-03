import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export async function load({ fetch, params}) {
    //await new Promise(resolve => setTimeout(resolve, 5000))
    const id = params.id
    const res = await fetch(`http://127.0.0.1:3000/invoice/${id}`)
    console.log(res)

    const invoice = await res.json()
    console.log(invoice)
     
    if (res.ok) {
        return {
              invoice
          }
      }

      //error: new Error('Could not fetch the invoice')
      throw redirect( 301, '/invoices')

   
}
  

