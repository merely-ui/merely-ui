import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { CodeRecipe } from './Code.recipe'

export type CodeSize = 's' | 'm' | 'l'

export interface CodeProps extends MerelyComponentProps<'pre'> {
	_size?: CodeSize
}

export const Code = (props: CodeProps) => {
	const { children, theme, className, _size = 'm', ...otherProps } = props
	const { code } = useGlobalContext()

	return (
		<merely.code
			className={cx(CodeRecipe.base, CodeRecipe.sizes[_size], className)}
			overlapCSS={code}
			{...otherProps}
		>
			{children}
		</merely.code>
	)
}
