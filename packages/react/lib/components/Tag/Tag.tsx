'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorTheme, useGlobalContext } from '@/theme'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Tag.module.css'

export type TagVariant = 'solid' | 'outline'
export type TagSize = 's' | 'm' | 'l'

export type TagProps<C extends ElementType = 'span'> = {
	variant?: TagVariant
	_size?: TagSize
} & PropsWithChildren<MerelyComponentProps<C>>

export const Tag = <C extends ElementType = 'span'>({
	children,
	theme,
	className,
	variant = 'solid',
	_size = 'm',
	...otherProps
}: TagProps<C>) => {
	const { tag } = useGlobalContext()
	const { theme: cssTheme } = useColorTheme(theme)

	return (
		<merely.span
			className={cx(
				styles.tag,
				styles['size_' + _size],
				styles[variant],
				styles[cssTheme],
				className
			)}
			overlapCSS={tag}
			{...otherProps}
		>
			{children}
		</merely.span>
	)
}
