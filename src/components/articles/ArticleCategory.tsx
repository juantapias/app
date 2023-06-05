import React, { useEffect } from 'react'

import { Category } from '../../utils/types'

type ArticleCategory = {
  category: Category
}

export default function ArticleCategory ({ category }: ArticleCategory) {
  console.log('🚀 ~ file: ArticleCategory.tsx:10 ~ ArticleCategory ~ category:', category.poster.url)
  const styleBackground = {
    backgroundImage: `url("${category.poster.url}")`
  }

  return (
    <div
      style={styleBackground}
      className='flex items-center justify-start bg-white rounded-lg h-32 p-5'
    >
      {category.name}
    </div>
  )
}
