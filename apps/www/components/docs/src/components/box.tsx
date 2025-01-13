import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Box, Card, colors, Flex, Template } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Template } from "@merely-ui/react"
import { Box } from "@merely-ui/react"`
const usage = `<Flex>
  <Template w={30} h={30} bgColor={colors.cyan.$200}  />
  <Box w={30} h={30} bgColor={colors.cyan.$200}  />
</Flex>`

export default function BoxDocs() {
	return (
		<div>
			<DocTitle>Box [Template]</DocTitle>
			<DocText mb={'5rem'}>
				Box component is used to create your own components. Renders blank `div`
				by default.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Flex>
					<Template w={30} height={30} bgColor={colors.cyan.$200} />
					<Box w={30} height={30} bgColor={colors.purple.$200} />
				</Flex>
			</Card>
			<Shiki code={usage} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Grid' link={root.getComponentDocLink('grid')} />
				<Next text='Avatar' link={root.getComponentDocLink('avatar')} />
			</Flex>
		</div>
	)
}
