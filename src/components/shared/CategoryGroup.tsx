import React from 'react'

import { Category } from '@/utils/types'
import SkeletonWrap from '../skeletons/SkeletonWrap'
import CardCategory from '../articles/CardCategory'

type ICategoryGroup = {
  loading: boolean
  categories: Category[]
}

export default function CategoryGroup ({ loading, categories }: ICategoryGroup) {
  return (
    <section className='category-group'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            {categories.map((category, key) => (
              <SkeletonWrap
                key={key}
                loading={loading}
                variant='rounded'
                height='136px'
              >
                <CardCategory loading={loading} category={category} />
              </SkeletonWrap>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
