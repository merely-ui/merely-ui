'use client'

import { Button, colors, useColorMode } from '@merely-ui/react'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ToggleThemeBtn() {
	const { toggle, colorMode } = useColorMode()
	const [mounted, setMounted] = useState(false)

	const isLight: boolean = colorMode === 'light'

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<Button
			p={8}
			variant='clear'
			onClick={toggle}
			aria-label='Switch Theme'
			_dark={{
				_hover: {
					bgColor: colors.gray.$700
				}
			}}
			_light={{
				_hover: {
					bgColor: colors.gray.$50
				}
			}}
		>
			{isLight ? (
				<Sun width={16} height={16} />
			) : (
				<Moon width={16} height={16} />
			)}
		</Button>
	)
}
