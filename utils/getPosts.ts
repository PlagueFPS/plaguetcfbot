import { ContentfulCollection } from 'contentful'
import { client } from '../contentful/contentful'

export async function getPosts<T,>(searchParams: object) {
  const response = await client.getEntries<T>(searchParams)
  return response
}