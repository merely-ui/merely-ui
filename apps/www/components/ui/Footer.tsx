import { Box, colors, Flex, Grid, Text } from '@merely-ui/react'
import Link from 'next/link'
import Container from './Container'
import LogoLink from './LogoLink'
import AppLink from './shared/AppLink'
import VercelLogo from './shared/VercelLogo'

export default function Footer() {
	return (
		<Box
			as='footer'
			pt={60}
			pb={100}
			_dark={{
				bgColor: colors.gray.$950
			}}
			_light={{
				bgColor: colors.gray.$50
			}}
		>
			<Container>
				<Flex flexDir='row' justifyContent='space-between'>
					<Flex flexDir='column' gap={24}>
						<LogoLink />

						<Flex alignItems='center' gap={8}>
							<Text color={colors.gray.$400} _size='s' fontWeight={500}>
								Deployed on
							</Text>
							<VercelLogo />
						</Flex>
						<Flex alignItems='center' gap={4}>
							<Text color={colors.gray.$400} _size='s' fontWeight={500}>
								Built by
							</Text>

							<AppLink href='https://github.com/blinovvvvvv' target='_blank'>
								Ivan Blinov
							</AppLink>
						</Flex>
					</Flex>
					<Grid gridTemplateColumns='repeat(2, 200px)'>
						<Flex flexDir='column'>
							<Text fontWeight={500} _size='s'>
								Docs
							</Text>
							<Link href={'/'}>
								<Text color={colors.gray.$300} fontWeight={500} _size='s'>
									Components
								</Text>
							</Link>
							<Link href={'/'}>
								<Text color={colors.gray.$300} fontWeight={500} _size='s'>
									Getting Started
								</Text>
							</Link>
						</Flex>
						<Flex flexDir='column'>
							<Text fontWeight={500} _size='s'>
								Socials
							</Text>
							<Link
								href={'https://github.com/merely-ui/merely-ui'}
								target='_blank'
							>
								<Text color={colors.gray.$300} fontWeight={500} _size='s'>
									GitHub
								</Text>
							</Link>
						</Flex>
					</Grid>
				</Flex>
			</Container>
		</Box>
	)
}
