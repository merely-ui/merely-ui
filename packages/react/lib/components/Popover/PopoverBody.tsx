import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import styles from './Popover.module.css'

export const PopoverBody = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	return (
		<merely.div className={cx(styles.body, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

PopoverBody.displayName = '@merely-ui/popover-body'
