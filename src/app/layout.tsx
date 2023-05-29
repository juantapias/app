'use client'

import { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppStateProvider } from '../context/AppStateContext'

import Nav from '../components/navigation/Nav'
import Loading from './loading'

import './globals.css'
import 'react-datepicker/dist/react-datepicker.css'

const queryClient = new QueryClient()

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
      <QueryClientProvider client={queryClient}>
        <AppStateProvider>
          <Suspense fallback={<Loading />}>
            {children}
            <footer>
              <Nav />
            </footer>
          </Suspense>
        </AppStateProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
