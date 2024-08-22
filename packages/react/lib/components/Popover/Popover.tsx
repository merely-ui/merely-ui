'use client'

import { useOutsideDisclosure } from '@/hooks'
import {
	cx,
	getChild,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { FC, PropsWithChildren } from 'react'
import styles from './Popover.module.css'
import { PopoverContext } from './popover-context'

export type PopoverDirection = 'left' | 'right' | 'bottom' | 'top'

export interface PopoverProps extends MerelyComponentProps<'div'> {
	_direction?: PopoverDirection
}

export const Popover: FC<PropsWithChildren<PopoverProps>> = ({
	children,
	className,
	_direction = 'right',
	...otherProps
}) => {
	const { setIsOpen, isOpen, ref } = useOutsideDisclosure()
	const { shouldRender, isUnmounting } = useDelayUnmount(isOpen, 150)

	const trigger = getChild(children, '@merely-ui/popover-trigger')
	const content = getChild(children, '@merely-ui/popover-content')

	return (
		<PopoverContext.Provider
			value={{ isOpen, setIsOpen, direction: _direction, isUnmounting }}
		>
			<merely.div
				_ref={ref}
				role='tooltip'
				className={cx(styles.wrapper, className)}
				{...otherProps}
			>
				{trigger}
				{shouldRender && <>{content}</>}
			</merely.div>
		</PopoverContext.Provider>
	)
}
