// sanity.js
import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: '6otw5j9e',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

// headphones Query

export async function getHeadphones() {
  const headphones = await client.fetch('*[_type == "headphones"]')
  return headphones
}

// Speakers Query

export async function getSpeakers() {
  const speakers = await client.fetch('*[_type == "speakers"]')
  return speakers
}

// Earphones Query

export async function getEarphones() {
  const earphones = await client.fetch('*[_type == "earphones"]')
  return earphones
}

//fetch all products

export async function getAllProducts() {
  const allProducts = await client.fetch('*[_type in ["earphones", "headphones", "speakers"]]')
  return allProducts
}

// Fetch product by slug

export async function getProductsBySlug(slug: string) {
  try {
    const query = `*[_type in ['earphones', 'headphones', 'speakers'] && slug.current == "${slug}"]`
    const products = await client.fetch(query)
    console.log(products)
    return products
  } catch (error) {
    // Handle errors (log them or throw a custom error)
    console.error('Error fetching products by slug:', error)
  }
}
