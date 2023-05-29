'use client'

import { Fragment } from 'react'

import { useAppStateContext } from '../context/AppStateContext'
import { useProducts } from '../hooks'

import Header from '../components/shared/Header'
import Banner from '../components/shared/Banner'
import PromsScroll from '../components/shared/PromsScroll'
import ProductScroll from '../components/shared/ProductScroll'
import Social from '../components/shared/Social'

import BannerData from '../data/banner.json'

export default function Page () {
  const { products } = useAppStateContext()
  const productQuery = useProducts()
  return (
    <Fragment>
      <Header title='Inicio' search />
      <main className='space-y-5'>
        <Banner banners={BannerData} />
        <PromsScroll title='Promociones destacadas' viewMore />
        <ProductScroll loading={productQuery.isFetching} products={products} />
        <Social />
      </main>
    </Fragment>
  )
}
