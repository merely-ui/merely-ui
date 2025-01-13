import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Button, Card, colors, Flex } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

export const importCode = `import { Button } from "@merely-ui/react"`

export const sizes = `<Flex alignItems='center' justifyContent='space-between'>
  <Button _size='xs'>Button</Button>
  <Button _size='s'>Button</Button>
  <Button _size='m' bgColor={colors.teal.$200}>Button</Button>
  <Button _size='l'>Button</Button>
  <Button _size='xl'>Button</Button>
</Flex>`

export const variants = `<Flex>
  <Button variant='default'>Button</Button>
  <Button variant='outline'>Button</Button>
  <Button variant='clear'>Button</Button>
</Flex>`

export default function ButtonDocs() {
	return (
		<div>
			<DocTitle mb={12}>Button</DocTitle>
			<DocText mb={'5rem'}>
				The Button element represents a clickable button used to trigger actions
				or submit forms.
			</DocText>
			<DocSubTitle id='import'>Import</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card>
				<Button>Button</Button>
			</Card>
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>`_size` prop is changing size of the button.</DocText>
			<Card mb={8}>
				<Flex alignItems='center' justifyContent='space-between'>
					<Button _size='xs'>Button</Button>
					<Button _size='s'>Button</Button>
					<Button _size='m' bgColor={colors.teal.$200}>
						Button
					</Button>
					<Button _size='l'>Button</Button>
					<Button _size='xl'>Button</Button>
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='variants' mt={32}>
				Variants
			</DocSubTitle>
			<DocText mb={16}>
				`variant` prop is changing variant of the button.
			</DocText>
			<Card mb={8}>
				<Flex>
					<Button variant='default'>Button</Button>
					<Button variant='outline'>Button</Button>
					<Button variant='clear'>Button</Button>
				</Flex>
			</Card>
			<Shiki code={variants} />
			<Flex justifyContent='space-between' my={64}>
				<Previous text='Tag' link={root.getComponentDocLink('tag')} />
				<Next text='Input' link={root.getComponentDocLink('input')} />
			</Flex>
		</div>
	)
}
