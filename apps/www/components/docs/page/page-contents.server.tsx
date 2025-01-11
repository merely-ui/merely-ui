import { colors, Flex, Text } from '@merely-ui/react'
import Link from 'next/link'
import { Title } from './page-contents'

export function PageContentsBox({ children }: { children: React.ReactNode }) {
	return (
		<Flex flexDir='column' alignItems='flex-start' py={24} px={8}>
			<Flex flexDir='column' pos='sticky' top={112 + 24} gap={8}>
				{children}
			</Flex>
		</Flex>
	)
}

export function PageContentsText() {
	return (
		<Text _size='s' fontWeight={600} mb={8}>
			On this page
		</Text>
	)
}

export function PageContentsLink({
	idAttr,
	text,
	titleId
}: Title & { titleId?: string }) {
	return (
		<Link href={`#${idAttr}`}>
			<Text
				_size='s'
				fontWeight={500}
				transition='color 0.2s ease'
				_dark={{
					color: idAttr === titleId ? colors.white : colors.gray.$200,
					_hover: {
						color: colors.white
					}
				}}
				_light={{
					color: idAttr === titleId ? colors.black : colors.gray.$500,
					_hover: {
						color: colors.black
					}
				}}
			>
				{text}
			</Text>
		</Link>
	)
}
