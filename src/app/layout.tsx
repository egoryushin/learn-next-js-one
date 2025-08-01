import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		template: '%s | Learn Next.js',
		default: 'Learn Next.js',
	},
	description: 'Learn Next.js with this comprehensive guide',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${geistSans.variable} antialiased`}>{children}</body>
		</html>
	)
}
