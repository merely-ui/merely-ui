import { MerelyComponentProps, cx, merely } from '@/style-system'
import { useModalContext } from './modal-context'
import { ModalRecipe } from './Modal.recipe'

export const ModalOverlay = (props: MerelyComponentProps<'div'>) => {
	const { className, ...otherProps } = props

	const { onClose } = useModalContext()

	return (
		<merely.div
			onClick={onClose}
			className={cx(ModalRecipe.overlay, className)}
			{...otherProps}
		/>
	)
}

ModalOverlay.displayName = '@merely-ui/modal-overlay'
