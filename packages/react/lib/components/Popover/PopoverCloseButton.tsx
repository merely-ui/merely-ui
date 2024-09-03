'use client'

import { MerelyComponentProps, cx } from '@/style-system'
import { Cross, useColorTheme } from '@/theme'
import { FC, ReactNode } from 'react'
import { Button } from '../Button'
import styles from './Popover.module.css'
import { usePopoverContext } from './popover-context'

export interface PopoverCloseButtonProps
	extends MerelyComponentProps<'button'> {
	icon?: ReactNode
}

export const PopoverCloseButton: FC<PopoverCloseButtonProps> = ({
	children,
	className,
	theme,
	icon,
	...otherProps
}) => {
	const { setIsOpen } = usePopoverContext()
	const { theme: cssTheme } = useColorTheme(theme)
	const fill = cssTheme === 'dark' ? 'white' : 'black'

	const onClick = () => setIsOpen(false)

	return (
		<Button
			variant='clear'
			onClick={onClick}
			tabIndex={0}
			className={cx(styles.closeButton, styles[cssTheme], className)}
			{...otherProps}
		>
			{icon ? icon : <Cross fill={fill} />}
		</Button>
	)
}

PopoverCloseButton.displayName = '@merely-ui/popover-close-button'
