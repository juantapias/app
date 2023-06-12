import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '../services/Api'

import { FeaturedProms } from '../utils/types'

const listFeaturedProms = gql`
  {
    productProms(where: { featured: true }) {
      id
      name
      description
      price
      tags
      thumbnail {
        fileName
        url
      }
    }
  }
`

export const useFeaturedProms = () => {
  const promsQuery = useQuery({
    queryKey: ['productProms'],
    queryFn: async () => {
      const res = (await hygraph.request(listFeaturedProms)) as FeaturedProms
      return res
    },
    cacheTime: 60 * 60 * 1000,
  })

  return promsQuery
}
