'use client'

import { MerelyComponentProps, cx, merely } from '@/style-system'
import { useColorTheme } from '@/theme'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Text.module.css'

export type TextSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'

export type TextProps<C extends ElementType> = {
	_size?: TextSize
} & MerelyComponentProps<C>

export const Text = <C extends ElementType = 'p'>({
	children,
	_size = 'm',
	className,
	theme,
	...otherProps
}: PropsWithChildren<TextProps<C>>) => {
	const { theme: cssTheme } = useColorTheme(theme)

	return (
		<merely.p
			className={cx(
				styles.text,
				styles['size_' + _size],
				styles[cssTheme],
				className
			)}
			{...otherProps}
		>
			{children}
		</merely.p>
	)
}
