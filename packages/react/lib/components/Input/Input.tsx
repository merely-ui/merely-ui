import {
	cx,
	merely,
	MerelyComponentProps,
	MerelyStyleProps
} from '@/style-system'
import { useGlobalContext } from '@/theme'
import { getFocusBorderColorVar, InputRecipe } from './Input.recipe'

export type InputSize = 'xs' | 's' | 'm' | 'l' | 'xl'

export interface InputProps extends MerelyComponentProps<'input'> {
	_size?: InputSize
	focusBorderColor?: MerelyStyleProps['color']
}

export const Input = (props: InputProps) => {
	const {
		_size = 'm',
		className,
		theme,
		focusBorderColor,
		...otherProps
	} = props

	const { input } = useGlobalContext()

	return (
		<merely.input
			className={cx(
				getFocusBorderColorVar(focusBorderColor),
				InputRecipe.base,
				InputRecipe.sizes[_size],
				className
			)}
			overlapCSS={input}
			{...otherProps}
		/>
	)
}
