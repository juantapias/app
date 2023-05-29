'use client'

import { useCallback, useReducer } from 'react'
import constate from 'constate'
import { Product } from '../utils/types'

type AppState = {
  isLoading: boolean
  isServices: boolean
  inRestaurant: boolean
  products: Product[]
}

const initialState: AppState = {
  isLoading: false,
  isServices: false,
  inRestaurant: false,
  products: []
}

type Action =
  | {
      type: 'SET_LOADING'
      payload: boolean
    }
  | {
      type: 'SET_IS_SERVICES'
      payload: boolean
    }
  | {
      type: 'SET_IN_RESTAURANT'
      payload: boolean
    }
  | {
      type: 'SET_PRODUCTS'
      payload: Product[]
    }

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload }
    case 'SET_IS_SERVICES':
      return { ...state, isServices: action.payload }
    case 'SET_IN_RESTAURANT':
      return { ...state, inRestaurant: action.payload }
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload }
  }
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const isLoading = (isLoading: boolean) => {
    dispatch({
      type: 'SET_IS_SERVICES',
      payload: isLoading
    })
  }

  const setIsServices = (isServices: boolean) => {
    dispatch({
      type: 'SET_IS_SERVICES',
      payload: isServices
    })
  }

  const setInRestaurant = (inRestaurant: boolean) => {
    dispatch({
      type: 'SET_IN_RESTAURANT',
      payload: inRestaurant
    })
  }

  const setProducts = useCallback(
    (products: Product[]) => {
      dispatch({
        type: 'SET_PRODUCTS',
        payload: products
      })
    },
    [dispatch]
  )

  return {
    ...state,
    isLoading,
    setIsServices,
    setInRestaurant,
    setProducts
  }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
