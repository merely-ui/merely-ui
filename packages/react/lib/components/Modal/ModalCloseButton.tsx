import { MerelyComponentProps, cx } from '@/style-system'
import { Cross } from '@/theme'
import { ReactNode } from 'react'
import { Button } from '../Button'
import { useModalContext } from './modal-context'
import { ModalRecipe } from './Modal.recipe'

export interface ModalCloseButtonProps extends MerelyComponentProps<'button'> {
	icon?: ReactNode
}

export const ModalCloseButton = (props: ModalCloseButtonProps) => {
	const { children, className, theme, icon, ...otherProps } = props

	const { onClose } = useModalContext()

	return (
		<Button
			variant='clear'
			onClick={onClose}
			tabIndex={0}
			className={cx(ModalRecipe.closeButton, className)}
			{...otherProps}
		>
			{icon ? icon : <Cross />}
			{children}
		</Button>
	)
}

ModalCloseButton.displayName = '@merely-ui/modal-close-button'
