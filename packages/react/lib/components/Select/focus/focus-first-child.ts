import { RefObject } from 'react'

export const focusFirstChild = (parentRef: RefObject<HTMLUListElement>) => {
	if (parentRef.current && parentRef.current.firstChild)
		//@ts-expect-error no typings for that
		setTimeout(() => parentRef.current.firstChild.focus(), 10)
}
