import { Fragment } from 'react'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/shared/Header'))
const Proms = dynamic(() => import('@/components/shared/Proms'))

export default function Page () {
  return (
    <Fragment>
      <Header title='Inicio' search />
      <main>
        <Proms />
      </main>
    </Fragment>
  )
}
