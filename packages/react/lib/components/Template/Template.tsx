import { merely, MerelyComponentProps } from '@/style-system'
import { ElementType } from 'react'

const Template = <C extends ElementType = 'div'>(
	props: MerelyComponentProps<C>
) => {
	const { children, ...otherProps } = props

	return <merely.div {...otherProps}>{children}</merely.div>
}

export { Template as Box, Template }
