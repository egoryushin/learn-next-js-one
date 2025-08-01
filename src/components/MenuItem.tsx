import type { IMenuItem } from '@/shared/data/menu.data'
import Link from 'next/link'

interface Props {
	menuItem: IMenuItem
	isActive: boolean
}

export function MenuItem({ menuItem, isActive }: Props) {
	return (
		<Link
			className={isActive ? 'text-white' : 'text-white/50'}
			href={menuItem.href}>
			{menuItem.name}
		</Link>
	)
}
