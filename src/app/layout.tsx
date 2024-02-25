import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Raffle365',
  description:
    'Raffle365 é o melhor lugar pra se ganhar prêmios todos os dias.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="space-y-5 bg-zinc-800 p-3 text-zinc-50 md:p-5">
          <div className="min-h-screen">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
