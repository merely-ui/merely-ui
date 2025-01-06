import { ComponentPropsWithoutRef, ElementType, RefObject } from 'react'

/** Focus at Element Ref, passed in args */
export const focusItself = <C extends ElementType>(
	ref: RefObject<ComponentPropsWithoutRef<C> | HTMLLIElement>
) => {
	ref.current && ref.current.focus()
}
