'use client'

import React, { Fragment } from 'react'

import { useAppStateContext } from '@/context/AppStateContext'

import Header from '../../components/shared/Header'
import PromsScroll from '../../components/shared/PromsScroll'
import { useProms } from '@/hooks'
import SkeletonWrap from '@/components/skeletons/SkeletonWrap'

export default function Page () {
  const { proms } = useAppStateContext()

  const promsQuery = useProms()

  return (
    <Fragment>
      <Header title='Promociones' cartBtn />
      <main className='space-y-5'>
        {proms?.sort((a, b) => a?.order! - b?.order!)?.map((prom, key) => (
          <SkeletonWrap
            loading={promsQuery.isFetching}
            variant='rounded'
            height='256px'
            width='128px'
          >
            <PromsScroll
              key={key}
              title={prom.name}
              proms={prom.products}
              loading={promsQuery.isFetching}
            />
          </SkeletonWrap>
        ))}
      </main>
    </Fragment>
  )
}
