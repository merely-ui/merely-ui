import {
	cx,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { useGlobalContext } from '@/theme'
import { useEffect } from 'react'
import { Portal } from '../Portal'
import { ModalContext } from './modal-context'
import { ModalRecipe } from './Modal.recipe'

export type ModalSize = 's' | 'm' | 'l'

export interface ModalProps extends MerelyComponentProps<'div'> {
	_size?: ModalSize
	isOpen: boolean
	onClose: () => void
	lockScrollOnMount?: boolean
	isCentered?: boolean
}

export const Modal = (props: ModalProps) => {
	const {
		children,
		_size = 'm',
		className,
		theme,
		isOpen,
		onClose,
		lockScrollOnMount = true,
		isCentered = false,
		...otherProps
	} = props

	const { modal } = useGlobalContext()
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
				isUnmounting,
				_size,
				isCentered
			}}
		>
			{shouldRender && (
				<Portal>
					<merely.div
						className={cx(
							ModalRecipe.base,
							{
								[ModalRecipe.unmountModal]: isUnmounting
							},
							className
						)}
						overlapCSS={modal}
						{...otherProps}
					>
						{children}
					</merely.div>
				</Portal>
			)}
		</ModalContext.Provider>
	)
}
