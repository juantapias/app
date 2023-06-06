import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '../services/Api'

import { useAppStateContext } from '../context/AppStateContext'
import { IBanners, Product } from '../utils/types'

const getBanner = gql`
  {
    banners(where: { homeViewable: true }) {
      id
      name
      description
      price
      thumbnail {
        fileName
        url
      }
    }
  }
`

export const useBanner = () => {
  const { banner, setBanner } = useAppStateContext()
  const promsQuery = useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
      if (!banner.length) {
        const res = (await hygraph.request(getBanner)) as IBanners
        return res.banners
      } else {
        return banner
      }
    },
    cacheTime: 60 * 60 * 1000,
    onSuccess: (data) => {
      setBanner(data as Product[])
    },
  })

  return promsQuery
}
