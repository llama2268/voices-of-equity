import '../styles/globals.css'
import { Montserrat, Playfair_Display } from 'next/font/google'
import NavBar from '../components/Navigation/NavBar'
import { Footer } from '../components/Layout/Footer'
import { siteConfig } from '../content'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
	variable: '--font-playfair',
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
		<html lang="en" className="h-full">
			<body className={`
				${montserrat.variable} 
				${playfair.variable}
				min-h-full flex flex-col
				font-display
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
