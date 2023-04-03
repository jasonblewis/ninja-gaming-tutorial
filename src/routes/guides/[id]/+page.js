import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */


export async function load({ fetch, params}) {
    //await new Promise(resolve => setTimeout(resolve, 5000))
    const id = params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    const guide = await res.json()
    //console.log(guide)
   
    if (res.ok) {
      return {
              guide
          }
      }

      //error: new Error('Could not fetch the guide')
      throw redirect( 301, '/guides')

   
}
  

