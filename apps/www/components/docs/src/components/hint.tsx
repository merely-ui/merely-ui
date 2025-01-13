import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Button, Card, Flex, Hint } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Hint } from "@merely-ui/react"`

const usage = `<Hint>
  <Button>Hover me</Button>
</Hint>`

export default function HintDocs() {
	return (
		<div>
			<DocTitle>Hint</DocTitle>
			<DocText mb={'5rem'}>
				The Hint component in React displays a tooltip or hint message when the
				user hovers over or focuses on an element.
			</DocText>
			<DocSubTitle id='import' mt={32}>
				Import
			</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card mb={8}>
				<Hint text='Tip!'>
					<Button>Hover me</Button>
				</Hint>
			</Card>
			<Shiki code={usage} />

			<Flex justifyContent='space-between' my={64}>
				<Previous text='Textarea' link={root.getComponentDocLink('textarea')} />
				<Next text='Modal' link={root.getComponentDocLink('modal')} />
			</Flex>
		</div>
	)
}
