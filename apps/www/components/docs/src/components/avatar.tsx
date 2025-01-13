import Shiki from '@/components/ui/Shiki'
import { root } from '@/lib/root'
import { Avatar, AvatarBadge, Card, Code, Flex } from '@merely-ui/react'
import DocSubTitle from '../../ui/DocSubtitle'
import DocText from '../../ui/DocText'
import DocTitle from '../../ui/DocTitle'
import Next from '../../ui/Next'
import Previous from '../../ui/Previous'

const importCode = `import { Avatar } from "@merely-ui/react"`

const sizes = `<Flex alignItems='center' justifyContent='space-between'>
  <Avatar _size='s' />
  <Avatar _size='m' />
  <Avatar _size='l' />
</Flex>`

const customSize = `<Avatar w='1.25rem' />`

export default function AvatarDocs() {
	return (
		<div>
			<DocTitle>Avatar</DocTitle>
			<DocText mb={'5rem'}>
				The Avatar element used to represent user profile image
			</DocText>
			<DocSubTitle id='import'>Import</DocSubTitle>
			<Shiki code={importCode} />
			<DocSubTitle id='usage' mt={32}>
				Usage
			</DocSubTitle>
			<Card>
				<Flex>
					<Avatar />
				</Flex>
			</Card>
			<DocSubTitle id='sizes' mt={32}>
				Sizes
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>_size</Code> prop is changing size of the
				avatar.
			</DocText>
			<Card mb={8}>
				<Flex alignItems='center'>
					<Avatar _size='s' />
					<Avatar _size='m' />
					<Avatar _size='l' />
				</Flex>
			</Card>
			<Shiki code={sizes} />
			<DocSubTitle id='variants' mt={32}>
				Custom size
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>variant</Code> prop is changing variant of
				the button.
			</DocText>
			<Card mb={8}>
				<Flex>
					<Avatar w={20} />
				</Flex>
			</Card>
			<Shiki code={customSize} />
			<DocSubTitle id='badges' mt={32}>
				Using avatar badges
			</DocSubTitle>
			<DocText mb={16}>
				<Code display='inline-flex'>variant</Code> prop is changing variant of
				the button.
			</DocText>
			<Card mb={8}>
				<Flex>
					<Avatar>
						<AvatarBadge placement='top-right' w={5} variant='offline' />
					</Avatar>
					<Avatar>
						<AvatarBadge variant='online' />
					</Avatar>
				</Flex>
			</Card>
			<Shiki code={customSize} />
			<Flex justifyContent='space-between' my={64}>
				<Previous
					text='Box [Template]'
					link={root.getComponentDocLink('box')}
				/>
				<Next text='Card' link={root.getComponentDocLink('card')} />
			</Flex>
		</div>
	)
}
