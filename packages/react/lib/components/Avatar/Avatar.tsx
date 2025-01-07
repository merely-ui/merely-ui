import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { AvatarRecipe } from './Avatar.recipe'

export type AvatarSize = 's' | 'm' | 'l'

export interface AvatarProps extends MerelyComponentProps<'img'> {
	_size?: AvatarSize
}

export const Avatar = (props: AvatarProps) => {
	const { children, className, _size = 'm', ...otherProps } = props
	const { avatar } = useGlobalContext()

	return (
		<merely.span
			className={cx(AvatarRecipe.base, AvatarRecipe.sizes[_size], className)}
			overlapCSS={avatar}
			{...otherProps}
		>
			{children}
		</merely.span>
	)
}
