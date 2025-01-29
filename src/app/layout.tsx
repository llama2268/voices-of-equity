import '../styles/globals.css';
import { Inter, Montserrat } from 'next/font/google';
import NavBar from '../components/Navigation/NavBar';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
});

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'Voices of Equity',
	description: 'Empowering voices for a more equitable future',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${montserrat.className}`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
