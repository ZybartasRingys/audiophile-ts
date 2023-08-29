// sanity.js
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '6otw5j9e',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getProducts() {
  const products = await client.fetch('*[_type == "products"]')
  console.log(products)
  return products
}
