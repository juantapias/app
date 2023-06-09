import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '../services/Api'

import { useAppStateContext } from '../context/AppStateContext'
import { IProducts, Product } from '../utils/types'

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
      thumbnail {
        fileName
        url
      }
      categories {
        id
        name
      }
    }
  }
`
export const useProducts = () => {
  const { products, setProducts } = useAppStateContext()
  
  const productQuery = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      if (!products.length) {
        const res = (await hygraph.request(listProducts)) as IProducts
        return res.products
      } else {
        return products
      }
    },
    cacheTime: 60 * 60 * 1000,
    onSuccess: (data) => {
      setProducts(data as unknown as Product[])
    },
  })

  return productQuery
}
