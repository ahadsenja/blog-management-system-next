import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Dashboard/Navbar'
import Sidebar from './components/Dashboard/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <Sidebar />
          <div className='flex-1'>
            <Navbar />
            <div className='p-8'>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
