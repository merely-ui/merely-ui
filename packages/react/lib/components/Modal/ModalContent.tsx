'use client'

import { cx, getChild, merely, MerelyComponentProps } from '@/style-system'
import { useColorTheme } from '@/theme'
import { ElementType, PropsWithChildren } from 'react'
import styles from './Modal.module.css'
import { useModalContext } from './modal-context'

export const ModalContent = <C extends ElementType = 'div'>({
	children,
	theme,
	className,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	const { theme: cssTheme } = useColorTheme(theme)
	const { isUnmounting } = useModalContext()

	const closeButton = getChild(children, '@merely-ui/modal-close-button')
	const header = getChild(children, '@merely-ui/modal-header')
	const footer = getChild(children, '@merely-ui/modal-footer')
	const body = getChild(children, '@merely-ui/modal-body')

	return (
		<merely.div
			role='dialog'
			aria-modal
			className={cx(
				styles.content,
				styles[cssTheme],
				{
					[styles.unmountContent]: isUnmounting
				},
				className
			)}
			{...otherProps}
		>
			<div className={styles.top}>
				{header}
				{closeButton}
			</div>
			{body}
			{footer}
		</merely.div>
	)
}

ModalContent.displayName = '@merely-ui/modal-content'
