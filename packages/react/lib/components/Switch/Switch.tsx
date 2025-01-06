import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { CSSProperties, ElementType, MouseEvent, useState } from 'react'
import { SwitchRecipe } from './Switch.recipe'

export type SwitchSize = 's' | 'm' | 'l'

export type SwitchProps<C extends ElementType = 'button'> = {
	_size?: SwitchSize
	toggled?: boolean
	onToggle?: () => void
	activeBgColor?: CSSProperties['color']
} & MerelyComponentProps<C>

export const Switch = <C extends ElementType = 'button'>(
	props: SwitchProps<C>
) => {
	const {
		children,
		className,
		_size = 'm',
		toggled = false,
		onToggle,
		activeBgColor,
		'aria-label': ariaLabel,
		...otherProps
	} = props

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
				SwitchRecipe.base,
				SwitchRecipe.sizes[_size],
				{
					[SwitchRecipe.toggled]: isToggled
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
				className={cx(SwitchRecipe.ball, SwitchRecipe.ballSizes[_size], {
					[SwitchRecipe.ballToggled]: isToggled
				})}
			/>
		</merely.button>
	)
}
