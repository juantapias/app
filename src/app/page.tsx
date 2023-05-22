import { Fragment } from 'react'

import Header from '../components/shared/Header'
import PromsScroll from '../components/shared/PromsScroll'
import ProductScroll from '@/components/shared/ProductScroll'
import Social from '../components/shared/Social'

import ProductsData from '../data/products.json'

export default function Page () {
  return (
    <Fragment>
      <Header title='Inicio' search />
      <main className="space-y-5">
        <PromsScroll title='Promociones destacadas' viewMore />
        <ProductScroll products={ProductsData} />
        <Social />
      </main>
    </Fragment>
  )
}
