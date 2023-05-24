import { useReducer } from 'react'
import constate from 'constate'

type AppState = {
  loading: boolean
  isServices: boolean
}

const initialState: AppState = {
  loading: false,
  isServices: false
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

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_IS_SERVICES':
      return { ...state, isServices: action.payload }
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

  return {
    ...state,
    setIsServices
  }
}

const [AppStateProvider, useAppStateContext] = constate(useAppState)

export { AppStateProvider, useAppStateContext }
