import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Explore } from './Explore'

export const metadata: Metadata = {
	title: 'Explore',
	description:
		'Explore various features and content available on our platform.',
}

export default function ExplorePage() {
	return (
		// оборачивается для того чтобы проект собрался, иначе будут ошибки
		<Suspense>
			<Explore />
		</Suspense>
	)
}
