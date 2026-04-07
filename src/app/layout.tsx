import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '../components/Navigation/NavBar'
import { Footer } from '../components/Layout/Footer'
import { siteConfig } from '../content'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`
        ${montserrat.variable}
        min-h-full flex flex-col
        font-sans
      `}>
        <NavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
