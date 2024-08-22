import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import styles from './Modal.module.css'

export const ModalHeader = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	return (
		<merely.div className={cx(styles.header, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

ModalHeader.displayName = '@merely-ui/modal-header'
