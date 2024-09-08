'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorMode } from '@/theme'
import { useGlobalContext } from '@/theme/merely-provider/merely-global-context'
import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.css'

export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'
export type ButtonVariant = 'default' | 'outline' | 'clear'

export interface ButtonProps extends MerelyComponentProps<'button'> {
	_size?: ButtonSize
	variant?: ButtonVariant
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	_size = 'm',
	variant = 'default',
	className,
	theme,
	...otherProps
}) => {
	const { button } = useGlobalContext()
	const { colorMode: cssTheme } = useColorMode(theme)

	return (
		<merely.button
			tabIndex={0}
			className={cx(
				styles.button,
				styles['size_' + _size],
				styles[variant],
				styles[cssTheme],
				className
			)}
			overlapCSS={button}
			{...otherProps}
		>
			{children}
		</merely.button>
	)
}
