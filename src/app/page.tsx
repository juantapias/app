'use client'

import { Fragment } from 'react'

import { useAppStateContext } from '../context/AppStateContext'
import { useBanner, useProducts, useProms } from '../hooks'

import Header from '../components/shared/Header'
import Banner from '../components/shared/Banner'
import PromsScroll from '../components/shared/PromsScroll'
import ProductScroll from '../components/shared/ProductScroll'
import Social from '../components/shared/Social'
import Author from '../components/shared/Author'

export default function Page () {
  const { banner, proms, products } = useAppStateContext()

  const bannerQuery = useBanner()
  const promsQuery = useProms()
  const productQuery = useProducts()

  return (
    <Fragment>
      <Header title='Inicio' cartBtn />
      <main className='space-y-5'>
        <Banner loading={bannerQuery.isFetching} banner={banner} />
        <PromsScroll
          title='Promociones destacadas'
          loading={promsQuery.isFetching}
          proms={proms}
          viewMore
        />
        <ProductScroll loading={productQuery.isFetching} products={products} />
        <Social />
        <Author />
      </main>
    </Fragment>
  )
}
