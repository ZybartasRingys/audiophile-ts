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

export async function getProducts() {
  const headphones = await client.fetch('*[_type == "headphones"]')
  console.log(headphones)
  return headphones
}

// Speakers Query

export async function getSpeakers() {
  const speakers = await client.fetch('*[_type == "speakers"]')
  console.log(speakers)
  return speakers
}
