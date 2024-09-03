'use client'

import { MerelyProvider } from '@merely-ui/react'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
	return <MerelyProvider>{children}</MerelyProvider>
}
