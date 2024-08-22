'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorTheme, useGlobalContext } from '@/theme'
import { FC, PropsWithChildren } from 'react'
import styles from './Textarea.module.css'

export type TextareaSize = 's' | 'm' | 'l'

export interface TextareaProps extends MerelyComponentProps<'textarea'> {
	_size?: TextareaSize
}

export const Textarea: FC<PropsWithChildren<TextareaProps>> = ({
	children,
	_size = 'm',
	className,
	theme,
	...otherProps
}) => {
	const { textarea } = useGlobalContext()
	const { theme: cssTheme } = useColorTheme(theme)

	return (
		<merely.textarea
			className={cx(
				styles.textarea,
				styles['size_' + _size],
				styles[cssTheme],
				className
			)}
			overlapCSS={textarea}
			{...otherProps}
		>
			{children}
		</merely.textarea>
	)
}
