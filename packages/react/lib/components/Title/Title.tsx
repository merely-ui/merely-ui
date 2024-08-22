'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorTheme } from '@/theme'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Title.module.css'
export type TitleSize = 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'

/** @param {ElementType} C Element tag, default to 'h3' */
export type TitleProps<C extends ElementType> = {
	size?: TitleSize
} & MerelyComponentProps<C>

export const Title = <C extends ElementType = 'h3'>({
	children,
	size = 'm',
	className,
	theme,
	...otherProps
}: PropsWithChildren<TitleProps<C>>) => {
	const { theme: cssTheme } = useColorTheme(theme)

	return (
		<merely.h3
			className={cx(
				styles.title,
				styles['size_' + size],
				styles[cssTheme],
				className
			)}
			{...otherProps}
		>
			{children}
		</merely.h3>
	)
}
