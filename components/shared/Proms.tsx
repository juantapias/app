import React from 'react'

import SkeletonWrap from '@/components/skeletons/SkeletonWrap'
import ArticleProms from '@/components/articles/ArticleProms'

export default function Proms () {
  return (
    <section className='proms'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-rows-1'>
          <div className='grid grid-cols-1 gap-4'>
            <div className='inline-flex overflow-x-scroll not-scroll'>
              <div className='space-x-4 flex'>
                {Array.from(new Array(5)).map((_, key) => (
                  <SkeletonWrap
                    key={key}
                    loading={false}
                    variant='rounded'
                    height='256px'
                    width='128px'
                  >
                    <ArticleProms />
                  </SkeletonWrap>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
