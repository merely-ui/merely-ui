export interface PageLink {
	link: string
	text: string
}

export interface SidebarLinks {
	category: string
	items: PageLink[]
}

export const getStartedLinks: SidebarLinks[] = [
	{
		category: 'Getting Started',
		items: [
			{
				text: 'Installation',
				link: '/docs/get-started/installation'
			}
		]
	},
	{
		category: 'Frameworks',
		items: [
			{
				text: 'Next.js [App]',
				link: '/docs/get-started/frameworks/next-app'
			},
			{
				text: 'Next.js [Pages]',
				link: '/docs/get-started/frameworks/next-pages'
			},
			{
				text: 'Vite',
				link: '/docs/get-started/frameworks/vite'
			}
		]
	}
]

export const componentsLinks: SidebarLinks[] = [
	{
		category: 'Overview',
		items: [
			{
				text: 'Overview',
				link: '/docs/components/overview'
			}
		]
	},
	{
		category: 'Typography',
		items: [
			{
				text: 'Text',
				link: '/docs/components/text'
			},
			{
				text: 'Title',
				link: '/docs/components/title'
			},
			{
				text: 'Code',
				link: '/docs/components/code'
			}
		]
	},
	{
		category: 'Layout',
		items: [
			{
				text: 'Flex',
				link: '/docs/components/flex'
			},
			{
				text: 'Stack',
				link: '/docs/components/stack'
			},
			{
				text: 'Grid',
				link: '/docs/components/grid'
			},
			{
				text: 'Box [Template]',
				link: '/docs/components/box'
			}
		]
	},
	{
		category: 'Data display',
		items: [
			{
				text: 'Avatar',
				link: '/docs/components/avatar'
			},
			{
				text: 'Card',
				link: '/docs/components/card'
			},
			{
				text: 'Tag',
				link: '/docs/components/tag'
			}
		]
	},
	{
		category: 'Forms',
		items: [
			{
				text: 'Button',
				link: '/docs/components/button'
			},
			{
				text: 'Input',
				link: '/docs/components/input'
			},
			{
				text: 'Textarea',
				link: '/docs/components/textarea'
			}
		]
	},
	{
		category: 'Interactive',
		items: [
			{
				text: 'Hint',
				link: '/docs/components/hint'
			},
			{
				text: 'Modal',
				link: '/docs/components/modal'
			},
			{
				text: 'Popover',
				link: '/docs/components/popover'
			},
			{
				text: 'Select',
				link: '/docs/components/select'
			},
			{
				text: 'Switch',
				link: '/docs/components/switch'
			}
		]
	}
	// {
	// 	category: 'Utilities',
	// 	items: [
	// 		{
	// 			text: 'Portal',
	// 			link: '/docs/components/portal'
	// 		}
	// 	]
	// }
]

export const stylingLinks: SidebarLinks[] = [
	{
		category: 'Overview',
		items: [
			{
				text: 'Style Props',
				link: '/docs/styling/style-props'
			},
			{
				text: 'Color Mode',
				link: '/docs/styling/color-mode'
			}
		]
	}
]

export const themingLinks: SidebarLinks[] = [
	{
		category: 'Overview',
		items: [
			{
				text: 'Theme editing',
				link: '/docs/theming/theme-editing'
			},
			{
				text: 'Color Palette',
				link: '/docs/theming/color-palette'
			}
		]
	}
]

export const linksData = getStartedLinks
	.flatMap(l => l.items)
	.concat(...componentsLinks.map(l => l.items))
	.concat(...stylingLinks.map(l => l.items))
	.concat(...themingLinks.map(l => l.items))
