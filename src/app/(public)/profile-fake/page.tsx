import ProfileFake from '@/app/(public)/profile-fake/ProfileFake'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Profile Fake',
}
export default function ProfileFakePage() {
	return <ProfileFake />
}
