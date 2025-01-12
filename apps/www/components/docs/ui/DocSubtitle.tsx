import { Title, TitleProps } from '@merely-ui/react'

export default function DocSubTitle({
	children,
	...props
}: { children: React.ReactNode } & TitleProps<'h2'>) {
	return (
		<Title as='h2' _size='2xl' mb={12} scrollMarginTop={112 + 24} {...props}>
			{children}
		</Title>
	)
}
