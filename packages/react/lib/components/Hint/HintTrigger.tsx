'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Hint.module.css'
import { useHintContext } from './hint-context'

export const HintTrigger = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { setIsOpen } = useHintContext()

	const onMouseEnter = () => setIsOpen(true)
	const onMouseLeave = () => setIsOpen(false)
	const onClick = () => setIsOpen(prev => !prev)

	return (
		<merely.div
			className={cx(styles.trigger, className)}
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
			onClick={onClick}
			aria-haspopup
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

HintTrigger.displayName = '@merely-ui/hint-trigger'
