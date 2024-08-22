'use client'

import {
	cx,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { useColorTheme, useGlobalContext } from '@/theme'
import { FC, PropsWithChildren, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import { ModalContext } from './modal-context'

export type ModalSize = 's' | 'm' | 'l'

export interface ModalProps extends MerelyComponentProps<'div'> {
	_size?: ModalSize
	isOpen: boolean
	onClose: () => void
	lockScrollOnMount?: boolean
	isCentered?: boolean
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
	children,
	_size = 'm',
	className,
	theme,
	isOpen,
	onClose,
	lockScrollOnMount = true,
	isCentered,
	...otherProps
}) => {
	const { modal } = useGlobalContext()
	const { theme: cssTheme } = useColorTheme(theme)
	const { isUnmounting, shouldRender } = useDelayUnmount(isOpen, 140)

	useEffect(() => {
		if (lockScrollOnMount && isOpen) document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.removeProperty('overflow')
		}
	}, [isOpen, lockScrollOnMount])

	return (
		<ModalContext.Provider
			value={{
				isOpen,
				onClose,
				isUnmounting
			}}
		>
			{shouldRender &&
				createPortal(
					<merely.div
						className={cx(
							styles.modal,
							styles['size_' + _size],
							styles[cssTheme],
							{
								[styles.unmountModal]: isUnmounting,
								[styles.centered]: isCentered
							},
							className
						)}
						overlapCSS={modal}
						{...otherProps}
					>
						{children}
					</merely.div>,
					document.body
				)}
		</ModalContext.Provider>
	)
}
