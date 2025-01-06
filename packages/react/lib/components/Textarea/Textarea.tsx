import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { TextareaRecipe } from './Textarea.recipe'

export type TextareaSize = 's' | 'm' | 'l'

export interface TextareaProps extends MerelyComponentProps<'textarea'> {
	_size?: TextareaSize
}

export const Textarea = (props: TextareaProps) => {
	const { children, _size = 'm', className, theme, ...otherProps } = props

	const { textarea } = useGlobalContext()

	return (
		<merely.textarea
			className={cx(TextareaRecipe.base, className)}
			overlapCSS={textarea}
			{...otherProps}
		>
			{children}
		</merely.textarea>
	)
}
