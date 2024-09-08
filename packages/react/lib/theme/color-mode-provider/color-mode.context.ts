import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { MerelyColorMode } from './color-mode.types'

type ColorModeContextProps = {
	colorMode: MerelyColorMode
	setColorMode: Dispatch<SetStateAction<MerelyColorMode>>
}

export const ColorModeContext = createContext<ColorModeContextProps>({
	colorMode: 'dark',
	setColorMode: () => {}
})

export const useColorModeContext = () => useContext(ColorModeContext)
