'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const Logo = dynamic(() => import('./Logo'), {
	ssr: false
})

export default function LogoLink() {
	return (
		<Link href='/' aria-label='MerelyUI Logo'>
			<Logo />
		</Link>
	)
}
