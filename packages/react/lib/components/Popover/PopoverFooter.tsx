import { cx, merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'
import styles from './Popover.module.css'

export const PopoverFooter = <C extends ElementType = 'div'>({
	children,
	className,
	...otherProps
}: MerelyComponentProps<C>) => {
	return (
		<merely.div className={cx(styles.footer, className)} {...otherProps}>
			{children}
		</merely.div>
	)
}

PopoverFooter.displayName = '@merely-ui/popover-footer'
