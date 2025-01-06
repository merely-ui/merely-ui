import { cx, merely, MerelyComponentProps } from '@/style-system'
import { AvatarRecipe } from './Avatar.recipe'

export type AvatarBadgeSize = 'm' | 'l'
export type AvatarBadgeVariant = 'online' | 'offline' | 'sleep'
export type AvatarBadgePlacement =
	| 'top-right'
	| 'top-left'
	| 'bottom-right'
	| 'bottom-left'

export interface AvatarBadgeProps extends MerelyComponentProps<'img'> {
	_size?: AvatarBadgeSize
	variant?: AvatarBadgeVariant
	placement?: AvatarBadgePlacement
}

export const AvatarBadge = (props: AvatarBadgeProps) => {
	const {
		className,
		_size = 'm',
		variant = 'online',
		placement = 'bottom-right',
		...otherProps
	} = props

	return (
		<merely.div
			className={cx(
				AvatarRecipe.badge,
				AvatarRecipe.variants[variant],
				AvatarRecipe.placement[placement],
				AvatarRecipe.sizes[_size],
				className
			)}
			{...otherProps}
		/>
	)
}

AvatarBadge.displayName = '@merely-ui/avatar-badge'
