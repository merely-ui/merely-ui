import { Button, colors } from '@merely-ui/react'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface DocsTabLinkProps
	extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
	children: React.ReactNode
	isActive: boolean
	href: string
}

export default function DocsTabLink({
	children,
	isActive,
	href
}: DocsTabLinkProps) {
	return (
		<Link href={href}>
			<Button
				_size='s'
				whiteSpace='nowrap'
				bg={isActive ? '' : 'transparent'}
				px={8}
				py={4}
				_dark={{
					color: isActive ? colors.black : colors.white,
					_hover: {
						bgColor: isActive ? '' : colors.gray.$700
					}
				}}
				_light={{
					color: isActive ? colors.white : colors.black,
					_hover: {
						bgColor: isActive ? '' : '#EEE'
					}
				}}
			>
				{children}
			</Button>
		</Link>
	)
}
