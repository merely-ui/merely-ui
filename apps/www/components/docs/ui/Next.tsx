import { colors, Flex, Text } from '@merely-ui/react'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface NextProps {
	text: string
	link: string
}

export default function Next({ link, text }: NextProps) {
	return (
		<Link href={link}>
			<Flex flexDir='column' alignItems='flex-end' gap={8}>
				<Text color={colors.gray.$200} _size='s'>
					Next
				</Text>
				<Flex alignItems='center'>
					<Text _size='s' fontWeight={500}>
						{text}
					</Text>
					<ChevronRight width={16} height={16} />
				</Flex>
			</Flex>
		</Link>
	)
}
