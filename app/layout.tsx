import '@/styles/globals.css'
import {Nunito} from 'next/font/google'

import type {Metadata} from 'next'

const nunito = Nunito({
  weight: '600',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nextjs Template',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${nunito.className}`}>
      <body>{children}</body>
    </html>
  )
}
