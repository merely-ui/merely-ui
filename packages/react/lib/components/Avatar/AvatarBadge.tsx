'use client'

import { cx, merely, MerelyComponentProps } from '@/style-system'
import { FC } from 'react'
import styles from './Avatar.module.css'

export type AvatarBadgeSize = 'm' | 'l'
export type AvatarBadgeVariant = 'online' | 'offline'
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

export const AvatarBadge: FC<AvatarBadgeProps> = ({
	className,
	_size,
	variant = 'online',
	placement = 'bottom-right',
	...otherProps
}) => {
	return (
		<merely.div
			className={cx(
				styles.avatarBadge,
				styles[variant],
				styles[placement],
				styles['size_' + _size],
				className
			)}
			{...otherProps}
		/>
	)
}

AvatarBadge.displayName = '@merely-ui/avatar-badge'
