'use client'

import React, { Fragment } from 'react'

import { useAppStateContext } from '@/context/AppStateContext'

import Header from '../../components/shared/Header'
import PromsScroll from '../../components/shared/PromsScroll'
import { useProms } from '@/hooks'

export default function Page () {
  const { proms } = useAppStateContext()

  const promsQuery = useProms()

  return (
    <Fragment>
      <Header title='Promociones' cartBtn />
      <main className='space-y-5'>
        <PromsScroll
          title='Feliz día Mamá'
          proms={proms}
          loading={promsQuery.isFetching}
        />
        <PromsScroll
          title='Para compartir'
          proms={proms}
          loading={promsQuery.isFetching}
        />
        <PromsScroll
          title='Domingo feliz'
          proms={proms}
          loading={promsQuery.isFetching}
        />
        <PromsScroll
          title='Gourmet'
          proms={proms}
          loading={promsQuery.isFetching}
        />
      </main>
    </Fragment>
  )
}
