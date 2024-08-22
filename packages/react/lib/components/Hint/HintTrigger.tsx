'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren, useCallback, useContext } from 'react'
import styles from './Hint.module.css'
import { HintContext } from './hint-context'

export const HintTrigger = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { setIsOpen } = useContext(HintContext)

	const onMouseEnter = useCallback(() => {
		setIsOpen(true)
	}, [setIsOpen])

	const onMouseLeave = useCallback(() => {
		setIsOpen(false)
	}, [setIsOpen])

	return (
		<merely.div
			className={cx(styles.trigger, className)}
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
			aria-haspopup
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

HintTrigger.displayName = '@merely-ui/hint-trigger'
