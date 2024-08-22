'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useColorTheme, useGlobalContext } from '@/theme'
import { FC, PropsWithChildren } from 'react'
import styles from './Code.module.css'

export type CodeSize = 'm' | 'l'

export interface CodeProps extends MerelyComponentProps<'pre'> {
	_size?: CodeSize
}

export const Code: FC<PropsWithChildren<CodeProps>> = ({
	children,
	theme,
	className,
	_size,
	...otherProps
}) => {
	const { code } = useGlobalContext()
	const { theme: cssTheme } = useColorTheme(theme)

	return (
		<merely.pre
			className={cx(
				styles.code,
				styles['size_' + _size],
				styles[cssTheme],
				className
			)}
			overlapCSS={code}
			{...otherProps}
		>
			<code>{children}</code>
		</merely.pre>
	)
}
