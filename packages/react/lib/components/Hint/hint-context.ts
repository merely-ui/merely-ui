import { createContext, Dispatch, SetStateAction } from 'react'
import { HintDirection } from './Hint'

type HintContextType = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	direction: HintDirection
	isUnmounting: boolean
}

export const HintContext = createContext<HintContextType>({
	isOpen: false,
	setIsOpen: () => {},
	direction: 'left',
	isUnmounting: false
})
