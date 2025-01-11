import { colors, Text } from '@merely-ui/react'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

type SidebarLinkProps = {
	children: React.ReactNode
	href: string
	isActive: boolean
} & AnchorHTMLAttributes<HTMLAnchorElement>

function SidebarLinkText({
	children,
	isActive
}: {
	children: React.ReactNode
	isActive: boolean
}) {
	return (
		<Text
			_size='s'
			display='block'
			fontWeight={500}
			transition='all 0.1s linear'
			_dark={{
				bgColor: isActive ? colors.gray.$700 : '',
				color: isActive ? colors.white : colors.gray.$300,
				_hover: {
					color: colors.white,
					bgColor: colors.gray.$700
				}
			}}
			_light={{
				color: isActive ? colors.black : colors.gray.$500,
				bgColor: isActive ? '#EEE' : '',
				_hover: {
					color: colors.black,
					bgColor: '#EEE'
				}
			}}
			px={12}
			py={6}
			rounded={4}
		>
			{children}
		</Text>
	)
}

export default function SidebarLink({
	children,
	href,
	isActive,
	...otherProps
}: SidebarLinkProps) {
	return (
		<Link href={href} {...otherProps}>
			<SidebarLinkText isActive={isActive}>{children}</SidebarLinkText>
		</Link>
	)
}
