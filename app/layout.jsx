import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Web Developer Portfolio',
  description: 'Wenqi Zhan introduction as a CS student in University of Toronto',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
