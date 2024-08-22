'use client'

import { cx, getChild, merely, MerelyComponentProps } from '@/style-system'
import { useGlobalContext } from '@/theme'
import { FC, PropsWithChildren } from 'react'
import styles from './Avatar.module.css'
import { AvatarDefault } from './AvatarDefault'

export type AvatarSize = 's' | 'm' | 'l'

export interface AvatarProps extends MerelyComponentProps<'img'> {
	_size?: AvatarSize
}

export const Avatar: FC<PropsWithChildren<AvatarProps>> = ({
	children,
	className,
	_size,
	src,
	...otherProps
}) => {
	const { avatar } = useGlobalContext()
	const badge = getChild(children, '@merely-ui/avatar-badge')

	return (
		<merely.span
			className={cx(styles.avatar, styles['size_' + _size], className)}
			overlapCSS={avatar}
		>
			{src ? <merely.img src={src} {...otherProps} /> : <AvatarDefault />}
			{badge}
		</merely.span>
	)
}
