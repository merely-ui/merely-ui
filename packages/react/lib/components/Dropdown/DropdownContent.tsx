'use client'

import { cx, merely } from '@/style-system'
import { MerelyComponentProps } from '@/style-system/props-types'
import { useColorTheme, useGlobalContext } from '@/theme'
import { ElementType, PropsWithChildren, useContext } from 'react'
import styles from './Dropdown.module.css'
import { DropdownContext } from './dropdown-context'

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
	const { theme: cssTheme } = useColorTheme(theme)
	const { direction, isUnmounting } = useContext(DropdownContext)

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
