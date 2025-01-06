import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { ModalRecipe } from './Modal.recipe'
import { useModalContext } from './modal-context'

export const ModalHeader = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, className, ...otherProps } = props

	const { _size } = useModalContext()

	return (
		<merely.div
			className={cx(ModalRecipe.sizes[_size].header, className)}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

ModalHeader.displayName = '@merely-ui/modal-header'
