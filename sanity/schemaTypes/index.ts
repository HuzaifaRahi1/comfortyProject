import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import { categorySchema } from './categories'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, categorySchema],
}
