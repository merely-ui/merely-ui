import {
	Children,
	ReactNode,
	RefObject,
	useEffect,
	useState,
	useSyncExternalStore
} from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
	place?: RefObject<HTMLElement | null>
	children: ReactNode
}

export const Portal = (props: PortalProps) => {
	const { children, place } = props

	const [container, setContainer] = useState(place?.current)
	const isServer = useSyncExternalStore(
		subscribe,
		() => false,
		() => true
	)

	useEffect(() => {
		setContainer(() => place?.current)
	}, [place])

	if (isServer) return <>{children}</>

	const mountNode = container ?? document.body
	return <>{Children.map(children, child => createPortal(child, mountNode))}</>
}

const subscribe = () => () => {}
