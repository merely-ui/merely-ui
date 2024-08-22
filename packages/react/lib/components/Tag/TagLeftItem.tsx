'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Tag.module.css'

export const TagLeftItem = <C extends ElementType = 'span'>({
	children,
	theme,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	return (
		<merely.span className={cx(styles.tagLeft, className)} {...otherProps}>
			{children}
		</merely.span>
	)
}
