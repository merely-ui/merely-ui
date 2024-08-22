'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import {
	CSSProperties,
	ElementType,
	MouseEvent,
	PropsWithChildren,
	useState
} from 'react'
import styles from './Switch.module.css'

export type SwitchSize = 's' | 'm' | 'l'

export type SwitchProps<C extends ElementType = 'button'> = {
	_size?: SwitchSize
	toggled?: boolean
	onToggle?: () => void
	activeBgColor?: CSSProperties['color']
} & PropsWithChildren<MerelyComponentProps<C>>

export const Switch = <C extends ElementType = 'button'>({
	children,
	className,
	_size = 'm',
	toggled = false,
	onToggle,
	activeBgColor,
	'aria-label': ariaLabel,
	...otherProps
}: SwitchProps<C>) => {
	const [isToggled, setIsToggled] = useState(toggled)
	const { switch: switchCss } = useGlobalContext()

	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsToggled(prev => !prev)
		onToggle && onToggle()
	}

	return (
		<merely.button
			className={cx(
				styles.switch,
				styles['size_' + _size],
				{
					[styles.toggled]: isToggled
				},
				className
			)}
			tabIndex={0}
			overlapCSS={switchCss}
			role='switch'
			aria-checked={isToggled}
			aria-label={ariaLabel ? ariaLabel : 'Switch'}
			onClick={onClick}
			bgColor={isToggled ? activeBgColor : ''}
			{...otherProps}
		>
			<span
				className={cx(styles.ball, {
					[styles.ballToggled]: isToggled
				})}
			/>
		</merely.button>
	)
}
