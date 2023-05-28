import { useReducer } from 'react'
import constate from 'constate'

type AppState = {
  loading: boolean
  isServices: boolean
  inRestaurant: boolean
}

const initialState: AppState = {
  loading: false,
  isServices: false,
  inRestaurant: false
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

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_IS_SERVICES':
      return { ...state, isServices: action.payload }
    case 'SET_IN_RESTAURANT':
      return { ...state, inRestaurant: action.payload }
  }
}

const useAppState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

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

  return {
    ...state,
    setIsServices,
    setInRestaurant
  }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
