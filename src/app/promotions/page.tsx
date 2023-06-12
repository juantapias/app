'use client'

import React, { Fragment } from 'react'

import { useAppStateContext } from '@/context/AppStateContext'
import { useProms } from '@/hooks'

import Header from '../../components/shared/Header'
import PromsScroll from '../../components/shared/PromsScroll'
import SkeletonWrap from '@/components/skeletons/SkeletonWrap'

export default function Page () {
  const { proms } = useAppStateContext()

  const promsQuery = useProms()

  return (
    <Fragment>
      <Header title='Promociones' cartBtn />
      <main className='space-y-5'>
        {proms
          ?.sort((a, b) => a?.order! - b?.order!)
          ?.map((prom, key) => (
            <SkeletonWrap
              key={key}
              loading={promsQuery.isFetching}
              variant='rounded'
              height='256px'
              width='128px'
            >
              <PromsScroll
                title={prom.name}
                proms={prom}
                loading={promsQuery.isFetching}
              />
            </SkeletonWrap>
          ))}
      </main>
    </Fragment>
  )
}
