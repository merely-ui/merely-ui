import { useEffect, useState } from 'react'

export const useDelayUnmount = (isMounted: boolean, delayTime: number) => {
	const [shouldRender, setShouldRender] = useState(false)
	const [isUnmounting, setIsUnmounting] = useState(false)

	useEffect(() => {
		let timeoutId: number
		if (isMounted && !shouldRender) {
			setShouldRender(true)
		} else if (!isMounted && shouldRender) {
			setIsUnmounting(true)
			timeoutId = window.setTimeout(() => {
				setIsUnmounting(false)
				setShouldRender(false)
			}, delayTime)
		}
		return () => clearTimeout(timeoutId)
	}, [isMounted, delayTime, shouldRender])
	return { shouldRender, isUnmounting }
}
