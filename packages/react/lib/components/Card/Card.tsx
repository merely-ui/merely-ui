'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorMode, useGlobalContext } from '@/theme'
import { FC, PropsWithChildren } from 'react'
import styles from './Card.module.css'

export type CardSize = 's' | 'm' | 'l'

export interface CardProps extends MerelyComponentProps<'div'> {
	_size?: CardSize
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
	children,
	_size = 'm',
	className,
	theme,
	...otherProps
}) => {
	const { card } = useGlobalContext()
	const { colorMode: cssTheme } = useColorMode(theme)

	return (
		<merely.div
			className={cx(
				styles.card,
				styles['size_' + _size],
				styles[cssTheme],
				className
			)}
			overlapCSS={card}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}
