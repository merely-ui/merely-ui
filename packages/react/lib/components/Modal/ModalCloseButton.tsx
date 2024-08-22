import { MerelyComponentProps, cx } from '@/style-system'
import { Cross, useColorTheme } from '@/theme'
import { FC, ReactNode } from 'react'
import { Button } from '../Button'
import { useModalContext } from './modal-context'
import styles from './Modal.module.css'

export interface ModalCloseButtonProps extends MerelyComponentProps<'button'> {
	icon?: ReactNode
}

export const ModalCloseButton: FC<ModalCloseButtonProps> = ({
	children,
	className,
	theme,
	icon,
	...otherProps
}) => {
	const { onClose } = useModalContext()
	const { theme: cssTheme } = useColorTheme(theme)
	const fill = cssTheme === 'dark' ? 'white' : 'black'

	return (
		<Button
			variant='clear'
			onClick={onClose}
			tabIndex={0}
			className={cx(styles.closeButton, styles[cssTheme], className)}
			{...otherProps}
		>
			{icon ? icon : <Cross fill={fill} />}
		</Button>
	)
}

ModalCloseButton.displayName = '@merely-ui/modal-close-button'
