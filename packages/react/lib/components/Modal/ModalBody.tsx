import { merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'

export const ModalBody = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, className, ...otherProps } = props

	return <merely.div {...otherProps}>{children}</merely.div>
}

ModalBody.displayName = '@merely-ui/modal-body'
