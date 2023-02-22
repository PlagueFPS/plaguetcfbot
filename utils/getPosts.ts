import { client } from '../contentful/contentful'

export async function getPosts(searchParams: object) {
  const response = await client.getEntries(searchParams)
  return response
}