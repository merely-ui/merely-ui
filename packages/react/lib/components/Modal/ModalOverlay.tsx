import { MerelyComponentProps, merely } from '@/style-system'
import { FC } from 'react'
import styles from './Modal.module.css'
import { useModalContext } from './modal-context'

export const ModalOverlay: FC<MerelyComponentProps<'div'>> = ({ ...props }) => {
	const { onClose } = useModalContext()
	return <merely.div onClick={onClose} className={styles.overlay} {...props} />
}

ModalOverlay.displayName = '@merely-ui/modal-overlay'
