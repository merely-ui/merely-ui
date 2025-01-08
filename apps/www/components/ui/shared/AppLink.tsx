import { Text } from '@merely-ui/react'
import Link from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export default function AppLink({
	children,
	href,
	...otherProps
}: {
	children: React.ReactNode
	href: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link href={href} {...otherProps}>
			<Text
				//FIXME: fix this
				_dark={{
					textDecoration: 'underline'
				}}
				_light={{
					textDecoration: 'underline'
				}}
				_size='s'
				fontWeight={500}
			>
				{children}
			</Text>
		</Link>
	)
}
