import { colors, Text, TextProps } from '@merely-ui/react'

export default function DocText({
	children,
	...props
}: { children: React.ReactNode } & TextProps<'p'>) {
	return (
		<Text
			_dark={{
				color: colors.gray.$200
			}}
			_light={{
				color: colors.gray.$500
			}}
			{...props}
		>
			{children}
		</Text>
	)
}
