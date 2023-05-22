import React, { ChangeEvent, useEffect, useState } from 'react'

interface IInputNumber {
  defaultValue?: number
  min?: number
  max?: number
}

export default function InputNumber ({ defaultValue, min, max }: IInputNumber) {
  const [number, setNumber] = useState<number>(defaultValue ?? 1)

  const handleAsc = () => {
    setNumber(number + 1)
  }

  const handleDec = () => {
    if (number > min!) {
      setNumber(number - 1)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.currentTarget.value))
  }

  return (
    <div className='flex items-center justify-center border border-blue-500 rounded-full h-10'>
      <button className='h-10 w-10 rounded-l-full' onClick={handleDec}>
        -
      </button>
      <input
        type='text'
        value={number}
        className='outline-none border-0 w-1/2 border-transparent text-center'
        onChange={handleChange}
      />
      <button className='h-10 w-10 rounded-r-full' onClick={handleAsc}>
        +
      </button>
    </div>
  )
}
