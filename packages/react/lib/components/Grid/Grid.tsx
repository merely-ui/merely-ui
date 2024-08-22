'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { ElementType } from 'react'
import styles from './Grid.module.css'

export const Grid = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	const { grid } = useGlobalContext()

	return (
		<merely.div
			className={cx(styles.grid, className)}
			overlapCSS={grid}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}
