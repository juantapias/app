import { Fragment } from 'react'

import Header from '../components/shared/Header'
import Proms from '../components/shared/Proms'
import Social from '../components/shared/Social'

import ProductsData from '../data/products.json'
import ProductScroll from '@/components/shared/ProductScroll'

export default function Page () {
  return (
    <Fragment>
      <Header title='Inicio' search />
      <main className="space-y-5">
        <Proms />
        <ProductScroll products={ProductsData} />
        <Social />
      </main>
    </Fragment>
  )
}
