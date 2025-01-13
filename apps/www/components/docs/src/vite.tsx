import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Code, Flex } from '@merely-ui/react'
import DocSubTitle from '../ui/DocSubtitle'
import DocText from '../ui/DocText'
import DocTitle from '../ui/DocTitle'
import Next from '../ui/Next'
import Previous from '../ui/Previous'

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

export default function Vite() {
	return (
		<div>
			<DocTitle mb={12}>Installation with Vite</DocTitle>
			<DocText mb={'5rem'}>Let's install MerelyUI in your Vite project</DocText>

			<DocSubTitle id='installation' display='flex' alignItems='center' gap={8}>
				Install
				<Code fontWeight={600}>@merely-ui/react</Code>
			</DocSubTitle>
			<Shiki code={installation} lang={'bash'} />
			<DocSubTitle id='provider' mt={52}>
				Add Provider
			</DocSubTitle>
			<Flex alignItems='center' flexWrap='wrap' mb={24} gap={4}>
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
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Next.js [Pages]' link={root.getNextPagesLink()} />
				<Next text='Overview' link={root.getComponentsLink()} />
			</Flex>
		</div>
	)
}
