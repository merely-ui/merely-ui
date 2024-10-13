'use client'

import { cx, merely } from '@/style-system'
import { MerelyComponentProps } from '@/style-system/props-types'
import { useGlobalContext } from '@/theme'
import { ElementType } from 'react'
import styles from './Flex.module.css'

const Flex = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	const { flex } = useGlobalContext()

	return (
		<merely.div
			className={cx(styles.flex, className)}
			overlapCSS={flex}
			{...otherProps}
		>
			{children}
		</merely.div>
	)
}

export { Flex, Flex as Stack }
