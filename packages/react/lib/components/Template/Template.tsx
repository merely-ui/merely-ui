import { merely, MerelyComponentProps } from '@/style-system'
import { ElementType, PropsWithChildren } from 'react'

const Template = <C extends ElementType = 'div'>({
	children,
	...otherProps
}: PropsWithChildren<MerelyComponentProps<C>>) => {
	return <merely.div {...otherProps}>{children}</merely.div>
}

export { Template as Box, Template }
