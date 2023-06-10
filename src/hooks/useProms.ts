import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'

import { hygraph } from '../services/Api'

import { useAppStateContext } from '../context/AppStateContext'
import { IProms, Prom } from '../utils/types'

const listProms = gql`
  {
    proms {
      id
      name
      description
      order
      thumbnail {
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

export const useProms = () => {
  const { proms, setProms } = useAppStateContext()
  const promsQuery = useQuery({
    queryKey: ['proms'],
    queryFn: async () => {
      if (!proms.length) {
        const res = (await hygraph.request(listProms)) as IProms
        return res.proms
      } else {
        return proms
      }
    },
    cacheTime: 60 * 60 * 1000,
    onSuccess: (data) => {
      setProms(data as Prom[])
    },
  })

  return promsQuery
}
