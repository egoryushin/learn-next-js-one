import Profile from '@/app/(public)/user/Profile'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Profile',
}

export default function Page() {
	return <Profile />
}
