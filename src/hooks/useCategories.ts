import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '../services/Api'

import { useAppStateContext } from '../context/AppStateContext'
import { ICategories, Category } from '../utils/types'

const listCategories = gql`
  {
    categories {
      id
      name
      slug
      icon {
        fileName
        url
      }
      poster {
        fileName
        url
      }
      products {
        name
        price
        description
        stage
        thumbnail {
          fileName
          url
        }
      }
    }
  }
`
export const useCategories = () => {
  const { categories, setCategories } = useAppStateContext()
  const categoryQuery = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      if (!categories.length) {
        const res = (await hygraph.request(listCategories)) as ICategories
        return res.categories
      } else {
        return categories
      }
    },
    cacheTime: 60 * 60 * 1000,
    onSuccess: (data) => {
      setCategories(data as Category[])
    },
  })

  return categoryQuery
}
