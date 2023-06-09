import React, { useEffect } from 'react'

import { Category } from '../../utils/types'

type ArticleCategory = {
  category: Category
}

export default function ArticleCategory ({ category }: ArticleCategory) {
  
  const styleBackground = {
    backgroundImage: `url("${category?.poster?.url}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }

  return (
    <div
      style={styleBackground}
      className='flex items-center justify-start bg-white rounded-lg h-32 p-4'
    >
      {category.name}
    </div>
  )
}
