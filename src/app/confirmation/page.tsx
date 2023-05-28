import React, { Fragment } from 'react'
import Header from '../../components/shared/Header'
import Confirmation from '@/components/shared/Confirmation'

export default function page () {
  return (
    <Fragment>
      <Header title='Confirmación' goBack />
      <main>
        <Confirmation
          title='Reserva exitosa'
          description='Recuerde que nuestro tiempo estimado de espera es de 10 minutos, al minuto 11 su reserva se levantará automáticamente.'
        />
      </main>
    </Fragment>
  )
}
