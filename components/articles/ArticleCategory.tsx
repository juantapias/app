import React from 'react'

import { ICategories } from '@/utils/types'

type ArticleCategory = {
  category: ICategories
}

export default function ArticleCategory ({ category }: ArticleCategory) {
  return <div className='flex items-center justify-center bg-white rounded-lg h-32'>{category.title}</div>
}
