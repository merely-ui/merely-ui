'use client'

import {
	cx,
	getChild,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { useGlobalContext } from '@/theme'
import { FC, PropsWithChildren, useState } from 'react'
import { DropdownContext } from './dropdown-context'
import styles from './Dropdown.module.css'

export type DropdownDirection = 'top' | 'bottom'

export interface DropdownProps extends MerelyComponentProps<'div'> {
	_direction?: DropdownDirection
}

export const Dropdown: FC<PropsWithChildren<DropdownProps>> = ({
	children,
	className,
	_direction = 'bottom',
	...otherProps
}) => {
	const { dropdown } = useGlobalContext()

	const [isOpen, setIsOpen] = useState(false)
	const { shouldRender, isUnmounting } = useDelayUnmount(isOpen, 150)

	const trigger = getChild(children, '@merely-ui/dropdown-trigger')
	const content = getChild(children, '@merely-ui/dropdown-content')

	return (
		<DropdownContext.Provider
			value={{ isOpen, setIsOpen, isUnmounting, direction: _direction }}
		>
			<merely.div
				className={cx(styles.wrapper, className)}
				overlapCSS={dropdown}
				{...otherProps}
			>
				{trigger}
				{shouldRender && <>{content}</>}
			</merely.div>
		</DropdownContext.Provider>
	)
}
