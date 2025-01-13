import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Code, Flex } from '@merely-ui/react'
import DocSubTitle from '../ui/DocSubtitle'
import DocText from '../ui/DocText'
import DocTitle from '../ui/DocTitle'
import Next from '../ui/Next'
import Previous from '../ui/Previous'

const installation = `npm i @merely-ui/react`
const provider = `// Providers.tsx

'use client'

import { cache, MerelyProvider } from '@merely-ui/react'
import { useServerInsertedHTML } from 'next/navigation'

export default function Providers({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => (
    <style
      data-emotion={\`\${cache.key} \${Object.keys(cache.inserted).join(' ')}\`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' ')
      }}
    />
  ))

  return <MerelyProvider>{children}</MerelyProvider>
}`
const play = `import { Flex, Button } from "@merely-ui/react"

export default function Page() {
  return (
    <Flex>
      <Button>Click me!</Button>
      <Button>Click me!</Button>
    </Flex>
  )
}
`
const app = `export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}`
const html = `export default function Document() {
  return (
    <Html suppressHydrationWarning>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}`
const imports = `export default {
  experimental: {
    optimizePackageImports: ['@merely-ui/react']
  }
}`

export default function NextPages() {
	return (
		<div>
			<DocTitle mb={12}>Installation with Next.js [Pages]</DocTitle>
			<DocText mb={'5rem'}>
				Install MerelyUI with Next.js /pages directory
			</DocText>
			<DocSubTitle id='installation' display='flex' alignItems='center' gap={8}>
				Install
				<Code fontWeight={600}>@merely-ui/react</Code>
			</DocSubTitle>
			<Shiki code={installation} lang={'bash'} />
			<DocSubTitle id='setup-provider' mt={52}>
				Setup Provider
			</DocSubTitle>
			<DocText mb={12}>
				For the first, you'll need to create{' '}
				<Code display='inline-flex'>Providers.tsx</Code> file with following
				code:
			</DocText>
			<Shiki code={provider} />

			<DocText mt={36} mb={16}>
				Next step is wrap your app with provider inside{' '}
				<Code display='inline-flex'>_app.tsx</Code>
			</DocText>
			<Shiki code={app} />

			<DocText mt={36} mb={16}>
				Inside <Code display='inline-flex'>_document.tsx</Code> you need add{' '}
				<Code display='inline-flex'>suppressHydrationWarning</Code> prop to{' '}
				<Code display='inline-flex'>Html</Code> to suppress warning from{' '}
				<Code display='inline-flex'>next-themes</Code> usage
			</DocText>
			<Shiki code={html} />

			<DocSubTitle id='optimize-imports' mt={52}>
				Optimize Imports
			</DocSubTitle>
			<DocText mb={12}>
				You can optimize MerelyUI imports usage by adding package name to
				<Code display='inline-flex'>
					experimental.optimizePackageImports
				</Code>{' '}
				option in your Next.js config:
			</DocText>
			<Shiki code={imports} />

			<DocSubTitle id='play' mt={52}>
				Play!
			</DocSubTitle>
			<DocText mb={24}>
				Now you can play with MerelyUI components in your Next.js App!
			</DocText>
			<Shiki code={play} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Next.js [App]' link={root.getNextAppLink()} />
				<Next text='Vite' link={root.getViteLink()} />
			</Flex>
		</div>
	)
}
