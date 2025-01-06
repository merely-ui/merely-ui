import { cx, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { AvatarRecipe } from './Avatar.recipe'
import { AvatarDefault } from './AvatarDefault'

export type AvatarSize = 's' | 'm' | 'l'

export interface AvatarProps extends MerelyComponentProps<'img'> {
	_size?: AvatarSize
}

export const Avatar = (props: AvatarProps) => {
	const { children, className, _size = 'm', src, ...otherProps } = props
	const { avatar } = useGlobalContext()

	return (
		<merely.span
			className={cx(AvatarRecipe.base, AvatarRecipe.sizes[_size], className)}
			overlapCSS={avatar}
		>
			{src ? (
				<merely.img src={src} {...otherProps} />
			) : (
				<AvatarDefault {...otherProps} />
			)}
			{children}
		</merely.span>
	)
}
