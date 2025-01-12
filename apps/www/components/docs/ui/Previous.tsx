import { colors, Flex, Text } from '@merely-ui/react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

interface PreviousProps {
	text: string
	link: string
}

export default function Previous({ link, text }: PreviousProps) {
	return (
		<Link href={link}>
			<Flex flexDir='column' alignItems='flex-start' gap={8}>
				<Text color={colors.gray.$200} _size='s'>
					Previous
				</Text>
				<Flex alignItems='center'>
					<ChevronLeft width={16} height={16} />
					<Text _size='s' fontWeight={500}>
						{text}
					</Text>
				</Flex>
			</Flex>
		</Link>
	)
}
