import { Product } from '../../utils/types'

type ITotalPay = {
  products: Product[]
}

export default function TotalPay ({ products }: ITotalPay) {
  return (
    <div className='border-t border-gray-100'>
      <div className='flex items-center justify-between mt-4'>
        <h5>$22.000</h5>
        <button className='btn-md bg-red-400 rounded-full'>Pagar</button>
      </div>
    </div>
  )
}
