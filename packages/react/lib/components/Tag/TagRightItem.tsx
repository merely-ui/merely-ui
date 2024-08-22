'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Tag.module.css'

export const TagRightItem = <C extends ElementType = 'span'>({
	children,
	theme,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	return (
		<merely.span className={cx(styles.tagRight, className)} {...otherProps}>
			{children}
		</merely.span>
	)
}
