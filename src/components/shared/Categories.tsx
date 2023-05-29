import React from 'react'

import { ICategory } from '../../utils/types'

import SkeletonWrap from '../../components/skeletons/SkeletonWrap'
import ArticleCategory from '../../components/articles/ArticleCategory'

type Categories = {
  categories: ICategory[]
}

export default function Categories ({ categories }: Categories) {
  return (
    <section className='categories'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-2 gap-5'>
            {categories.map((category, key) => (
              <SkeletonWrap key={key} loading={false} variant='rounded' height='128px'>
                <ArticleCategory category={category} />
              </SkeletonWrap>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
