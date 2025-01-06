import {
	cx,
	merely,
	MerelyComponentProps,
	useDelayUnmount
} from '@/style-system'
import { useState } from 'react'
import { HintRecipe } from './Hint.recipe'

export type HintDirection = 'left' | 'right' | 'bottom' | 'top'
export type HintSize = 's' | 'm' | 'l'

export interface HintProps extends MerelyComponentProps<'div'> {
	_direction?: HintDirection
	_size?: HintSize
	text: string
}

export const Hint = (props: HintProps) => {
	const {
		children,
		className,
		text,
		_direction = 'right',
		_size = 'm',
		...otherProps
	} = props

	const [isOpen, setIsOpen] = useState(false)
	const { shouldRender, isUnmounting } = useDelayUnmount(isOpen, 150)

	const onMouseEnter = () => setIsOpen(true)
	const onMouseLeave = () => setIsOpen(false)

	return (
		<merely.div
			role='tooltip'
			aria-haspopup
			className={cx(HintRecipe.base, className)}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...otherProps}
		>
			{children}
			{shouldRender && (
				<merely.div
					className={cx(
						HintRecipe.content,
						HintRecipe.sizes[_size].content,
						HintRecipe[_direction],
						{
							[HintRecipe[`unmount_${_direction}`]]: isUnmounting
						},
						className
					)}
				>
					{text}
				</merely.div>
			)}
		</merely.div>
	)
}
