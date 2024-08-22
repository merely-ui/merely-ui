'use client'

import { MerelyComponentProps, merely } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { cx } from '@emotion/css'
import { ElementType, ReactNode, useCallback, useContext } from 'react'
import { DropdownContext } from './dropdown-context'
import cls from './Dropdown.module.css'

/** @param C component tag, defaults to 'div' */
export type DropdownTriggerProps<C extends ElementType> = {
	children: (({ isExpanded }: { isExpanded: boolean }) => ReactNode) | ReactNode
} & Omit<MerelyComponentProps<C>, 'children'>

export const DropdownTrigger = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: DropdownTriggerProps<C>) => {
	const { dropdownTrigger } = useGlobalContext()
	const { setIsOpen, isOpen } = useContext(DropdownContext)

	const handleClick = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [setIsOpen])

	return (
		<merely.div
			onClick={handleClick}
			className={cx(cls.trigger, className)}
			overlapCSS={dropdownTrigger}
			role='button'
			aria-haspopup
			aria-expanded={isOpen}
			{...otherProps}
		>
			{typeof children === 'function'
				? children({ isExpanded: isOpen })
				: children}
		</merely.div>
	)
}

DropdownTrigger.displayName = '@merely-ui/dropdown-trigger'
