import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId  } from '../env'

export const client = createClient({
  projectId:"6tycbfuj",
  dataset: "production",
  apiVersion:'2024-01-04',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
