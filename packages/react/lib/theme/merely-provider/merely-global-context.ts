import { MerelyStyleProps } from '@/style-system'
import { createContext, useContext } from 'react'

export type MerelyThemeConfig = {
	button?: MerelyStyleProps
	card?: MerelyStyleProps
	dropdown?: MerelyStyleProps
	dropdownContent?: MerelyStyleProps
	dropdownTrigger?: MerelyStyleProps
	flex?: MerelyStyleProps
	grid?: MerelyStyleProps
	input?: MerelyStyleProps
	popover?: MerelyStyleProps
	popoverContent?: MerelyStyleProps
	popoverTrigger?: MerelyStyleProps
	select?: MerelyStyleProps
	text?: MerelyStyleProps
	title?: MerelyStyleProps
	tag?: MerelyStyleProps
	switch?: MerelyStyleProps
	code?: MerelyStyleProps
	avatar?: MerelyStyleProps
	modal?: MerelyStyleProps
	textarea?: MerelyStyleProps
}

export const MerelyGlobalContext = createContext<MerelyThemeConfig>({})

export const useGlobalContext = () => useContext(MerelyGlobalContext)
