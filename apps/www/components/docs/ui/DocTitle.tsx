import { Title, TitleProps } from '@merely-ui/react'

export default function DocTitle({
	children,
	...props
}: { children: React.ReactNode } & TitleProps<'h1'>) {
	return (
		<Title
			as='h1'
			fontSize={30}
			_md={{
				fontSize: 36
			}}
			fontWeight={700}
			{...props}
		>
			{children}
		</Title>
	)
}
