export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (...args: Parameters<T>) => void {
	let lastFunc: ReturnType<typeof setTimeout>
	let lastRan: number

	return function (...args: Parameters<T>) {
		//@ts-ignore
		const context = this

		if (!lastRan) {
			func.apply(context, args)
			lastRan = Date.now()
		} else {
			clearTimeout(lastFunc)
			lastFunc = setTimeout(
				() => {
					if (Date.now() - lastRan >= limit) {
						func.apply(context, args)
						lastRan = Date.now()
					}
				},
				limit - (Date.now() - lastRan)
			)
		}
	}
}
