import { gql } from 'graphql-request'

import { hygraph } from '@/services/Api'

const listProducts = gql`
  {
    products {
      id
      locale
      name
      description
      price
      slug
      stage
    }
  }
`
export const useProducts = async () => {
  const { products }: any = await hygraph.request(listProducts)

  return products
}
