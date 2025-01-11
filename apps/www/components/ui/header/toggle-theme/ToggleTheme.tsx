import { root } from '@/lib/root'
import { Button, colors, Flex } from '@merely-ui/react'
import { Github } from 'lucide-react'
import Link from 'next/link'
import ToggleThemeBtn from './ToggleTheme.client'

function ToggleThemeBox({ children }: { children: React.ReactNode }) {
	return (
		<Flex alignItems='center' gap={8}>
			{children}
		</Flex>
	)
}

function ToggleThemeGithubBtn() {
	return (
		<Link
			href={root.getGithubLink()}
			referrerPolicy='no-referrer'
			rel='noopener'
			target='_blank'
		>
			<Button
				p={8}
				variant='clear'
				aria-label='GitHub'
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
				<Github width={16} height={16} />
			</Button>
		</Link>
	)
}

export default function ToggleTheme() {
	return (
		<ToggleThemeBox>
			<ToggleThemeGithubBtn />
			<ToggleThemeBtn />
		</ToggleThemeBox>
	)
}
