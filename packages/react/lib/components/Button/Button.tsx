import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { ButtonRecipe } from './Button.recipe'

export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl'
export type ButtonVariant = 'default' | 'outline' | 'clear'

export interface ButtonProps extends MerelyComponentProps<'button'> {
	_size?: ButtonSize
	variant?: ButtonVariant
}

export const Button = (props: ButtonProps) => {
	const {
		children,
		_size = 'm',
		variant = 'default',
		className,
		theme,
		...otherProps
	} = props
	const { button } = useGlobalContext()

	return (
		<merely.button
			tabIndex={0}
			className={cx(
				ButtonRecipe.base,
				ButtonRecipe.sizes[_size],
				ButtonRecipe.variants[variant],
				className
			)}
			overlapCSS={button}
			{...otherProps}
		>
			{children}
		</merely.button>
	)
}
