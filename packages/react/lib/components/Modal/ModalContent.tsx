import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { useModalContext } from './modal-context'
import { ModalRecipe } from './Modal.recipe'

export const ModalContent = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, theme, className, ...otherProps } = props

	const { isUnmounting, _size, isCentered } = useModalContext()

	return (
		<merely.div
			role='dialog'
			aria-modal
			className={cx(
				ModalRecipe.content,
				ModalRecipe.sizes[_size].content,
				{
					[ModalRecipe.unmountContent]: isUnmounting,
					[ModalRecipe.centered]: isCentered
				},
				className
			)}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

ModalContent.displayName = '@merely-ui/modal-content'
