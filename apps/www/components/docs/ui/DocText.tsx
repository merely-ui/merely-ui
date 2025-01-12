import { colors, Text, TextProps } from '@merely-ui/react'

export default function DocText({
	children,
	...props
}: { children: React.ReactNode } & TextProps<'p'>) {
	return (
		<Text color={colors.gray.$200} {...props}>
			{children}
		</Text>
	)
}
