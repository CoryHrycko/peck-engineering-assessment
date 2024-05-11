import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'SF Food Truck Tracker',
  description: 'SF Food Truck Tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'bg-black flex'}>{children}</body>
    </html>
  )
}
