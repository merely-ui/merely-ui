import { createContext, Dispatch, SetStateAction, useContext } from 'react'
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

export const useHintContext = () => useContext(HintContext)
