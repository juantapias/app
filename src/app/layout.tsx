'use client'

import { AppStateProvider } from '../context/AppStateContext'

import Nav from '../components/navigation/Nav'

import './globals.css'
import { Suspense } from 'react'
import Loading from './loading'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <AppStateProvider>
          <Suspense fallback={<Loading />}>
            {children}
            <footer>
              <Nav />
            </footer>
          </Suspense>
        </AppStateProvider>
      </body>
    </html>
  )
}
