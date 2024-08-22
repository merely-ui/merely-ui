import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import styles from './Popover.module.css'

export const PopoverHeader = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	return (
		<merely.div className={cx(styles.header, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

PopoverHeader.displayName = '@merely-ui/popover-header'
