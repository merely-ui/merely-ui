'use client'

import { Select, SelectItem, useColorMode } from '@merely-ui/react'
import { memo } from 'react'

function ToggleTheme() {
	const { colorMode, setColorMode } = useColorMode()

	return (
		<Select onChangeValue={value => setColorMode(value)} minW={110}>
			<SelectItem value='dark' selected={colorMode === 'dark'}>
				Dark
			</SelectItem>
			<SelectItem value='light' selected={colorMode === 'light'}>
				Light
			</SelectItem>
		</Select>
	)
}

export default memo(ToggleTheme)
