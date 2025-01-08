import { Box } from '@merely-ui/react'

export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<Box maxW={1400} px={12} mx={'auto'}>
			{children}
		</Box>
	)
}
