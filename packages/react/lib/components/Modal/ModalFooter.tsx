import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import styles from './Modal.module.css'

export const ModalFooter = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	return (
		<merely.div className={cx(styles.footer, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

ModalFooter.displayName = '@merely-ui/modal-footer'
