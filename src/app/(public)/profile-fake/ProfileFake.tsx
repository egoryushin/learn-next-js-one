'use client'
import { PAGES } from '@/config/pages.config'
import { useRouter } from 'next/navigation'

export default function ProfileFake() {
	const router = useRouter()
	return (
		<div>
			<h1 className='text-3xl font-bold mb-6'>Profile Fake</h1>
			<button
				className='text-white cursor-pointer border border-amber-300'
				onClick={() => router.push(PAGES.HOME)}>
				Go to home
			</button>
		</div>
	)
}
