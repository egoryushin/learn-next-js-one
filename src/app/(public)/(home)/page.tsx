import { Tweet } from '@/app/(public)/(home)/Tweet'
import { TWEETS } from '@/shared/data/tweets.data'

export default function Home() {
	return (
		<div>
			<h1 className='text-3xl font-bold mb-6'>Home</h1>
			<div className='space-y-6'>
				{TWEETS.map((tweet, index) => (
					<Tweet key={index} tweet={tweet} />
				))}
			</div>
		</div>
	)
}
