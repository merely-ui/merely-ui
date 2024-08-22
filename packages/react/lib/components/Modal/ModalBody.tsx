import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import styles from './Modal.module.css'

export const ModalBody = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	return (
		<merely.div className={cx(styles.body, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

ModalBody.displayName = '@merely-ui/modal-body'
