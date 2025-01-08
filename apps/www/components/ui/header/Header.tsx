import { Box, colors, Flex, Text } from '@merely-ui/react'
import Link from 'next/link'
import Container from '../Container'
import LogoLink from '../LogoLink'
import SearchBar from './SearchBar'
import ToggleTheme from './ToggleTheme'

export default function Header() {
	return (
		<Box
			position='fixed'
			top={0}
			left={0}
			right={0}
			zIndex={1000}
			backdropFilter='blur(5px)'
			_dark={{
				bgColor: 'rgba(0, 0, 0, 0.5)'
			}}
			_light={{
				bgColor: 'rgba(255, 255, 255, 0.2)'
			}}
		>
			<Container>
				<Flex
					as='header'
					justifyContent='space-between'
					gap={24}
					alignItems='center'
					py={14}
				>
					<Flex alignItems='center' gap={60}>
						<Box display='flex' alignItems='start' maxH={36}>
							<LogoLink />
						</Box>
						<Flex gap={24} alignItems='center'>
							<Link href={'/docs/get-started'}>
								<Text
									fontWeight={500}
									transition='all .1s ease'
									_hover={{
										textDecoration: 'underline',
										color: colors.gray.$100
									}}
								>
									Docs
								</Text>
							</Link>
							<Link href={'/playground'}>
								<Text
									fontWeight={500}
									_hover={{
										textDecoration: 'underline',
										color: colors.gray.$100
									}}
								>
									Playground
								</Text>
							</Link>
						</Flex>
					</Flex>
					<Flex alignItems='center' gap={36}>
						<SearchBar />

						<ToggleTheme />
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}
