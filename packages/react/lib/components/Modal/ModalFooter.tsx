import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import { ModalRecipe } from './Modal.recipe'

export const ModalFooter = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, className, ...otherProps } = props

	return (
		<merely.div className={cx(ModalRecipe.footer, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

ModalFooter.displayName = '@merely-ui/modal-footer'
