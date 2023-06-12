'use client'

import { Fragment } from 'react'

import { useAppStateContext } from '../context/AppStateContext'
import { useBanner, useFeaturedProms, useProducts, useProms } from '../hooks'

import Header from '../components/shared/Header'
import Banner from '../components/shared/Banner'
import PromsScroll from '../components/shared/PromsScroll'
import ProductScroll from '../components/shared/ProductScroll'
import Social from '../components/shared/Social'
import Author from '../components/shared/Author'
import FeaturedProms from '@/components/shared/FeaturedProms'
import ArticleProms from '@/components/articles/ArticleProms'
import SkeletonWrap from '@/components/skeletons/SkeletonWrap'

export default function Page () {
  const { banner, products } = useAppStateContext()

  const bannerQuery = useBanner()
  const { data, isFetching } = useFeaturedProms()
  const productQuery = useProducts()

  return (
    <Fragment>
      <Header title='Inicio' cartBtn />
      <main className='space-y-5'>
        <Banner loading={bannerQuery.isFetching} banner={banner} />
        <FeaturedProms loading={isFetching} proms={data} />
        <ProductScroll loading={productQuery.isFetching} products={products} />
        <Social />
        <Author />
      </main>
    </Fragment>
  )
}
