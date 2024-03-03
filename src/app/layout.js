import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Servicio Tecnico Computadores La Serena',
  description: '¡Expertos en tecnología a tu servicio! Reparamos computadoras y celulares. Además, desarrollamos aplicaciones web de todo tipo. ¡Confía en nosotros para solucionar tus problemas tecnológicos!',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/favicon.ico?v=4'],
    android: ['/favicon.ico?v=4']
  }
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        {/* Agregar Google Analytics */}
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-RZHR53W640`} // Reemplaza 'UA-XXXXXXXXX-X' con tu ID de seguimiento
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RZHR53W640'); // Reemplaza 'UA-XXXXXXXXX-X' con tu ID de seguimiento
            `,
            }}
          />
          {/* Fin de Google Analytics */}
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  )
}
