'use client'

import { AppStateProvider } from '../context/AppStateContext'

import Nav from '../components/navigation/Nav'

import './globals.css'

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <AppStateProvider>
          {children}
          <footer>
            <Nav />
          </footer>
        </AppStateProvider>
      </body>
    </html>
  )
}
