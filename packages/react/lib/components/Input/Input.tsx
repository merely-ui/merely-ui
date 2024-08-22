'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorTheme, useGlobalContext } from '@/theme'
import { FC } from 'react'
import styles from './Input.module.css'

export type InputSize = 'xs' | 's' | 'm' | 'l' | 'xl'
export type InputVariant = 'default' | 'outline'

export interface InputProps extends MerelyComponentProps<'input'> {
	_size?: InputSize
	variant?: InputVariant
}

export const Input: FC<InputProps> = ({
	_size = 'm',
	variant = 'default',
	className,
	theme,
	...otherProps
}) => {
	const { input } = useGlobalContext()
	const { theme: cssTheme } = useColorTheme(theme)

	return (
		<merely.input
			className={cx(
				styles.input,
				styles['size_' + _size],
				styles[variant],
				styles[cssTheme],
				className
			)}
			overlapCSS={input}
			{...otherProps}
		/>
	)
}
