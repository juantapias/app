import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '../services/Api'

import { IInfo } from '../utils/types'

const getInfo = gql`
  {
    infos {
      id
      compamy
      address
      location {
        latitude
        longitude
      }
      social {
        whatsapp
        instagram
        twitter
        tiktok
      }
    }
  }
`

export const useInfo = () => {
  const infoQuery = useQuery({
    queryKey: ['infos'],
    queryFn: async () => {
      const res = (await hygraph.request(getInfo)) as IInfo
      return res
    },
    cacheTime: 60 * 60 * 1000,
  })

  return infoQuery
}
