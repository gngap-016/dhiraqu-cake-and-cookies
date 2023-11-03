import { Fredoka } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata = {
  title: 'DhiraQu Cake & Cookies',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fredoka.className}>  
        <div className='wrapper'>
          <Navbar />
          <div className='container'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
