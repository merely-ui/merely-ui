import { createContext, Dispatch, SetStateAction } from 'react'
import { MerelyTheme } from './color-theme.types'

type ColorThemeContextProps = {
	theme: MerelyTheme
	changeTheme: Dispatch<SetStateAction<MerelyTheme>>
}

export const ColorThemeContext = createContext<ColorThemeContextProps>({
	theme: 'dark',
	changeTheme: () => {}
})
