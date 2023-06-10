import { IBooking, Product } from '../utils/types'

import { totalPay } from '../utils/calc'
import moment from 'moment'

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(' ')
}

export const whatsAppOrder = (order: string[], products: Product[]) => {
  const whatsapp: number = +573002964590

  const orderStructure = order.toString().replace(',', '\n')

  let head: string = ''
  head += '¡Hola!, Quisiera hacer un pedido %0A'
  head += 'Pedido: %0A'

  const encode = encodeURIComponent(orderStructure)

  let food: string = ''
  food += `%0A%0ATotal a pagar: $${totalPay(products)}`

  let action: string = ''
  const cacheDelivery = localStorage.getItem('deliveryAddress')
  const cachePickup = localStorage.getItem('pickupStore')

  if (cacheDelivery) {
    const parsedData = JSON.parse(cacheDelivery)
    const address = parsedData.delivery.address

    action += '%0A%0ADomicilio: '
    action += encodeURIComponent(address)
  }

  if (cachePickup) {
    const parsedData = JSON.parse(cachePickup)

    const store = parsedData.store.store
    const time = parsedData.store.time

    action += '%0A%0ARecogida: '
    action += `${encodeURIComponent(store)} a las ${encodeURIComponent(time)}`
  }

  window.open(
    `https://wa.me/${whatsapp}?text=${head + encode + food + action}`,
    '_blank'
  )
}

export const whatsAppBooking = (booking: IBooking) => {
  const whatsapp: number = +573002964590

  let head: string = ''
  head += `¡Hola!, Quisiera hacer una reserva para el día ${moment(
    booking.dateEvent
  ).format('DD/MM/YYYY')} a las ${booking.timeEvent} %0A`
  head += 'Mis datos: %0A'

  let body: string = ''
  body += `Nombre: ${booking.name} ${booking.surname} %0A`
  body += `Cédula: ${booking.dni} %0A`
  body += `Teléfono: ${booking.phone} %0A`
  body += `Email: ${booking.mail} %0A%0A`

  body += 'Tipo de evento: %0A'
  body += `Evento: ${booking.event} %0A`
  body += `Cantidad de comensales: ${booking.people} %0A`

  if (booking.request) {
    body += `Nota: ${booking.request} %0A`
  }

  window.open(`https://wa.me/${whatsapp}?text=${head + body}`, '_blank')
}
