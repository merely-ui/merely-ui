'use client'

import { cx, getChild, merely, MerelyComponentProps } from '@/style-system'
import { useColorMode } from '@/theme'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Popover.module.css'
import { usePopoverContext } from './popover-context'

export const PopoverContent = <C extends ElementType = 'div'>({
	children,
	theme,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { colorMode: cssTheme } = useColorMode(theme)
	const { direction, isUnmounting } = usePopoverContext()

	const closeButton = getChild(children, '@merely-ui/popover-close-button')
	const header = getChild(children, '@merely-ui/popover-header')
	const footer = getChild(children, '@merely-ui/popover-footer')
	const body = getChild(children, '@merely-ui/popover-body')

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
			<div className={styles.headerTop}>
				{header}
				{closeButton}
			</div>
			{body}
			{footer}
		</merely.div>
	)
}

PopoverContent.displayName = '@merely-ui/popover-content'
