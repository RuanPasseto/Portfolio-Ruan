import { NavBar } from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'


export const metadata: Metadata = {
  title: 'Ruan Passeto',
  description: 'Portfolio Ruan Carlos Passeto',
}

const poppins = Poppins({subsets: ["latin"], weight: ['400','500', '600', '700']})
const montserrat = Montserrat({subsets: ["latin"], weight: ['400','500', '600', '700'], variable: '--font-montserrat'})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${montserrat.variable} bg-stone-300 `}>
        <NavBar />
        <main className='h-screen px-4'>
          {children}
        </main>
        </body>
    </html>
  )
}
