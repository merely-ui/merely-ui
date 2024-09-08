'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorMode } from '@/theme'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Hint.module.css'
import { useHintContext } from './hint-context'

export const HintText = <C extends ElementType = 'div'>({
	children,
	theme,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { colorMode: cssTheme } = useColorMode(theme)
	const { direction, isUnmounting } = useHintContext()

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
