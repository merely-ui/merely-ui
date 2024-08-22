'use client'

import {
	cx,
	getChild,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { FC, PropsWithChildren, useState } from 'react'
import styles from './Hint.module.css'
import { HintContext } from './hint-context'

export type HintDirection = 'left' | 'right' | 'bottom' | 'top'

export interface HintProps extends MerelyComponentProps<'div'> {
	_direction?: HintDirection
}

export const Hint: FC<PropsWithChildren<HintProps>> = ({
	children,
	className,
	_direction = 'right',
	...otherProps
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const { shouldRender, isUnmounting } = useDelayUnmount(isOpen, 150)

	const trigger = getChild(children, '@merely-ui/hint-trigger')
	const content = getChild(children, '@merely-ui/hint-content')

	return (
		<HintContext.Provider
			value={{ isOpen, setIsOpen, direction: _direction, isUnmounting }}
		>
			<merely.div
				role='tooltip'
				className={cx(styles.hint, className)}
				{...otherProps}
			>
				{trigger}
				{shouldRender && <>{content}</>}
			</merely.div>
		</HintContext.Provider>
	)
}
