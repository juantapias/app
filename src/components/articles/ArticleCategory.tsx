import React from 'react'

import { Category } from '../../utils/types'
import Link from 'next/link'

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
    <Link href={`/menu/category/${category.slug}`}>
    <div
      style={styleBackground}
      className='flex items-center justify-start bg-white rounded-lg h-32 p-4'
    >
      {category.name}
    </div>
    </Link>
  )
}
