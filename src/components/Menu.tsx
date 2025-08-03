'use client'

import { MenuItem } from '@/components/MenuItem'
import { MENU } from '@/shared/data/menu.data'
import { usePathname, useSelectedLayoutSegment } from 'next/navigation'
import { match } from 'path-to-regexp'

export function Menu() {
	const pathname = usePathname()
	const segment = useSelectedLayoutSegment() // user

	console.log('segmet', segment) // segmet user
	console.log('pathname', pathname) // pathname /user/redgroup/test

	return (
		<nav className='flex gap-6 text-white/80'>
			{MENU.map(menuItem => (
				<MenuItem
					key={menuItem.name}
					menuItem={menuItem}
					isActive={!!match(menuItem.href)(pathname)}
				/>
			))}
		</nav>
	)
}
