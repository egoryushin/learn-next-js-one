export const PAGES = {
	HOME: '/',
	EXPLORE: '/explore',
	PROFILE_FAKE: '/profile-fake',
	PROFILE: (username: string) => `/user/${username}`,
}

// можно еще на классах
class PagesConfig {
	PROFILE(username: string) {
		return `/user/${username}`
	}
}

export const ClassPages = new PagesConfig()
