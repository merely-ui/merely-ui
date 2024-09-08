'use client'

import { cx, merely } from '@/style-system'
import { MerelyComponentProps } from '@/style-system/props-types'
import { useColorMode, useGlobalContext } from '@/theme'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Dropdown.module.css'
import { useDropdownContext } from './dropdown-context'

export type DropdownContentProps<C extends ElementType> = PropsWithChildren<
	MerelyComponentProps<C>
>

export const DropdownContent = <C extends ElementType = 'div'>({
	children,
	theme,
	className,
	...otherProps
}: DropdownContentProps<C>) => {
	const { dropdownContent } = useGlobalContext()
	const { colorMode: cssTheme } = useColorMode(theme)
	const { direction, isUnmounting } = useDropdownContext()

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
			role='menu'
			overlapCSS={dropdownContent}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

DropdownContent.displayName = '@merely-ui/dropdown-content'
