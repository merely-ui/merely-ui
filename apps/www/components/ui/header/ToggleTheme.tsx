'use client'

import { Button, colors, Flex, useColorMode } from '@merely-ui/react'
import { Github, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ToggleTheme() {
	const { toggle, colorMode } = useColorMode()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<Flex alignItems='center' gap={8}>
			<Link
				href={'https://github.com/merely-ui/merely-ui'}
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
			<Button
				p={8}
				variant='clear'
				onClick={toggle}
				aria-label='Switch Theme'
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
				{colorMode === 'light' ? (
					<Sun width={16} height={16} />
				) : (
					<Moon width={16} height={16} />
				)}
			</Button>
		</Flex>
	)
}
