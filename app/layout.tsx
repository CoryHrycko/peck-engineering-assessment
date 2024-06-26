import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SF Food Truck Tracker',
  description: 'SF Food Truck Tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  //
  return (
    <html lang="en">
      <body className={inter.className + ' bg-indigo-500 flex bg-no-repeat'}>
        {children}
      </body>
    </html>
  )
}
