import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/legacy/image'

import { classNames } from '@/helpers'

import { MdClose } from 'react-icons/md'

import Test from '@/assets/images/test.jpg'

type IDetailProduct = {
  isDetailProduct: boolean
  dispatchDetailProduct: Dispatch<SetStateAction<boolean>>
}

export default function DetailProduct ({
  isDetailProduct,
  dispatchDetailProduct
}: IDetailProduct) {
  const styleBannerProduct = {
    backgroundImage: `url('${Test.src}')`,
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '200px'
  }

  return (
    <div className={classNames(isDetailProduct && 'active', 'detail-producs')}>
      <div className='container mx-auto'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1'>
            {/* Header */}
            <div className='header-detail'>
              <div
                style={styleBannerProduct}
                className='py-2 px-4 rounded-t-3xl'
              >
                <button
                  className='flex items-center justify-center ml-auto bg-white rounded-full h-10 w-10 shadow-md'
                  onClick={() => {
                    dispatchDetailProduct(false)
                  }}
                >
                  <MdClose size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className='content-detail not-scroll'>
              <div className='grid grid-cols-1 gap-6 p-4'>
                <h1 className="text-lg font-semibold">Prueba</h1>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, ducimus? Labore, officiis rerum! Repudiandae
                  reiciendis iusto quas laudantium, accusantium velit accusamus
                  impedit quibusdam deserunt totam. Provident minus dolorem ea
                  sapiente?
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, ducimus? Labore, officiis rerum! Repudiandae
                  reiciendis iusto quas laudantium, accusantium velit accusamus
                  impedit quibusdam deserunt totam. Provident minus dolorem ea
                  sapiente?
                </p>

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, ducimus? Labore, officiis rerum! Repudiandae
                  reiciendis iusto quas laudantium, accusantium velit accusamus
                  impedit quibusdam deserunt totam. Provident minus dolorem ea
                  sapiente?
                </p>

                <p>32.00$</p>

                <button className='btn-md bg-red-200 mx-auto'>Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
