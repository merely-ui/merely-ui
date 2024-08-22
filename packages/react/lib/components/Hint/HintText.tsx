'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorTheme } from '@/theme'
import { ElementType, PropsWithChildren, useContext } from 'react'
import styles from './Hint.module.css'
import { HintContext } from './hint-context'

export const HintText = <C extends ElementType = 'div'>({
	children,
	theme,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { theme: cssTheme } = useColorTheme(theme)
	const { direction, isUnmounting } = useContext(HintContext)

	return (
		<merely.div
			className={cx(
				styles.content,
				styles[cssTheme],
				styles[direction],
				{
					[styles['unmount_' + direction]]: isUnmounting
				},
				className
			)}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

HintText.displayName = '@merely-ui/hint-content'
