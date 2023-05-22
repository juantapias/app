'use client'

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from 'react'

import { classNames } from '@/helpers'
import { IProduct } from '@/utils/types'

import { MdClose } from 'react-icons/md'

import Test from '@/assets/images/test.jpg'
import InputNumber from '../forms/InputNumber'

type IDetailProduct = {
  isDetailProduct: boolean
  product: IProduct | undefined
  dispatchSelectedProduct: Dispatch<SetStateAction<IProduct | undefined>>
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function DetailProduct ({
  isDetailProduct,
  product,
  dispatchSelectedProduct,
  dispatchDetailProduct
}: IDetailProduct) {
  const ref = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState<boolean>(false)

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])

  const handleScroll = () => {
    const scrolled = ref.current && ref.current.scrollTop

    if (scrolled && scrolled >= 150) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  const styleBannerProduct = {
    backgroundImage: `url('${Test.src}')`,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '200px'
  }

  return (
    <div
      ref={ref}
      className={classNames(isDetailProduct && 'active', 'detail-products')}
    >
      <div className='container mx-auto'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1'>
            {/* Header */}
            <div
              className={classNames(
                isSticky ? 'bg-white top-0' : 'bg-transparent top-3',
                'sticky left-0 w-full px-4'
              )}
            >
              <div className='flex items-center justify-center'>
                {isSticky && (
                  <h1 className='font-semibold text-xl'>{product?.title}</h1>
                )}
                <button
                  className={classNames(
                    !isSticky && 'shadow-md',
                    'flex items-center justify-center ml-auto bg-white rounded-full h-10 w-10'
                  )}
                  onClick={() => {
                    dispatchDetailProduct(false)
                    dispatchSelectedProduct(undefined)
                  }}
                >
                  <MdClose size={20} />
                </button>
              </div>
            </div>

            {/* Banner */}
            <div className='header-detail'>
              <div
                style={styleBannerProduct}
                className='py-2 px-4 rounded-t-3xl'
              ></div>
            </div>

            {/* Content */}
            <div className='content-detail not-scroll'>
              <div className='grid grid-cols-1 gap-6 p-4'>
                <h1 className='text-lg font-semibold'>{product?.title}</h1>

                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.description || ''
                  }}
                />

                <p className='font-semibold text-2xl text-center'>
                  {product?.price}$
                </p>

                <div className='fixed flex items-center justify-between bg-white h-20 bottom-16 rounded-t-3xl w-full left-0 px-4 space-x-4'>
                  <div className='w-1/2'>
                    <InputNumber defaultValue={1} min={1} />
                  </div>
                  <div className='w-1/2'>
                    <button className='btn-full justify-around bg-red-200 mx-auto'>
                      <span>Agregar</span> <span>{product?.price}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}