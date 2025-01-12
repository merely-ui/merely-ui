import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Card, Code, colors, Flex, Grid, Text } from '@merely-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import DocSubTitle from '../ui/DocSubtitle'
import DocText from '../ui/DocText'
import DocTitle from '../ui/DocTitle'
import Next from '../ui/Next'

const installation = `npm i @merely-ui/react`
const provider = `import { MerelyProvider } from "@merely-ui/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MerelyProvider>
      <App />
    </MerelyProvider>
  </StrictMode>
)`
const play = `import { Flex, Button } from "@merely-ui/react"

export const App = () => {
  return (
    <Flex>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
    </Flex>
  )
}
`

export default function Installation() {
	return (
		<div>
			<DocTitle mb={12}>Installation</DocTitle>
			<DocText mb={'5rem'}>Let's install MerelyUI in your project</DocText>
			<DocSubTitle id='framework-setup' mb={8}>
				Framework setup
			</DocSubTitle>
			<DocText mb={24}>
				Below are guides for installing MerelyUI for various frameworks
			</DocText>
			<Grid gridTemplateColumns='repeat(2, minmax(0, 15rem))' mb={52}>
				<Link href={root.getNextAppLink()}>
					<Card
						p={'1.5rem'}
						bg='transparent'
						display='flex'
						flexDir='column'
						gap={4}
						_dark={{
							_hover: {
								bgColor: colors.gray.$700
							}
						}}
						_light={{
							_hover: {
								bgColor: colors.gray.$50
							}
						}}
					>
						<Image src='/nextjs.svg' alt='Next.js' width={32} height={32} />
						<Text fontWeight={600} mt={8}>
							Next.js
						</Text>
						<DocText _size='s'>Use MerelyUI with Next.js</DocText>
					</Card>
				</Link>
				<Link href={root.getViteLink()}>
					<Card
						p={'1.5rem'}
						bg='transparent'
						display='flex'
						flexDir='column'
						gap={4}
						_dark={{
							_hover: {
								bgColor: colors.gray.$700
							}
						}}
						_light={{
							_hover: {
								bgColor: colors.gray.$50
							}
						}}
					>
						<Image src='/vite.svg' alt='Vite' width={32} height={32} />
						<Text fontWeight={600} mt={8}>
							Vite
						</Text>
						<DocText _size='s'>Use MerelyUI with Vite</DocText>
					</Card>
				</Link>
			</Grid>
			<DocSubTitle id='installation' display='flex' alignItems='center' gap={8}>
				Install
				<Code fontWeight={600}>@merely-ui/react</Code>
			</DocSubTitle>
			<Shiki code={installation} lang={'bash'} />
			<DocSubTitle id='provider' mt={52}>
				Add Provider
			</DocSubTitle>
			<Flex alignItems='center' mb={24} gap={4}>
				<DocText>
					After installing Merely UI, you need to wrap root of your application
					in
				</DocText>
				<Code>MerelyProvider</Code>
			</Flex>
			<Shiki code={provider} />
			<DocSubTitle id='play' mt={52}>
				Play!
			</DocSubTitle>
			<DocText mb={24}>Now you can play with MerelyUI components!</DocText>
			<Shiki code={play} />
			<Flex justifyContent='flex-end' my={64}>
				<Next text='Next.js [App]' link={root.getNextAppLink()} />
			</Flex>
		</div>
	)
}
