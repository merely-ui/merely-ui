import AvatarDocs from './src/components/avatar'
import BoxDocs from './src/components/box'
import ButtonDocs from './src/components/button'
import CardDocs from './src/components/card'
import CodeDocs from './src/components/code'
import FlexDocs from './src/components/flex'
import GridDocs from './src/components/grid'
import HintDocs from './src/components/hint'
import InputDocs from './src/components/input'
import ModalDocs from './src/components/modal'
import PopoverDocs from './src/components/popover'
import SelectDocs from './src/components/select'
import StackDocs from './src/components/stack'
import SwitchDocs from './src/components/switch'
import TagDocs from './src/components/tag'
import TextDocs from './src/components/text'
import TextareaDocs from './src/components/textarea'
import TitleDocs from './src/components/title'
import Installation from './src/installation'
import NextApp from './src/next-app'
import NextPages from './src/next-pages'
import Vite from './src/vite'

export const docs: Record<string, any> = {
	'get-started': {
		installation: {
			sidebarTitles: [
				{
					text: 'Framework setup',
					idAttr: 'framework-setup'
				},
				{
					text: 'Installation',
					idAttr: 'installation'
				},
				{
					text: 'Add Provider',
					idAttr: 'provider'
				},
				{
					text: 'Play!',
					idAttr: 'play'
				}
			],
			content: <Installation />
		},
		frameworks: {
			'next-app': {
				sidebarTitles: [
					{
						text: 'Installation',
						idAttr: 'installation'
					},
					{
						text: 'Setup Provider',
						idAttr: 'setup-provider'
					},
					{
						text: 'Optimize Imports',
						idAttr: 'optimize-imports'
					},
					{
						text: 'Play!',
						idAttr: 'play'
					}
				],
				content: <NextApp />
			},
			'next-pages': {
				sidebarTitles: [
					{
						text: 'Installation',
						idAttr: 'installation'
					},
					{
						text: 'Setup Provider',
						idAttr: 'setup-provider'
					},
					{
						text: 'Optimize Imports',
						idAttr: 'optimize-imports'
					},
					{
						text: 'Play!',
						idAttr: 'play'
					}
				],
				content: <NextPages />
			},
			vite: {
				sidebarTitles: [
					{
						text: 'Installation',
						idAttr: 'installation'
					},
					{
						text: 'Add Provider',
						idAttr: 'provider'
					},
					{
						text: 'Play!',
						idAttr: 'play'
					}
				],
				content: <Vite />
			}
		}
	},
	components: {
		text: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Using `as` prop',
					idAttr: 'as'
				}
			],
			content: <TextDocs />
		},
		title: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Changing title level',
					idAttr: 'as'
				}
			],
			content: <TitleDocs />
		},
		code: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				}
			],
			content: <CodeDocs />
		},
		flex: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Changing direction',
					idAttr: 'direction'
				}
			],
			content: <FlexDocs />
		},
		stack: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Changing direction',
					idAttr: 'direction'
				}
			],
			content: <StackDocs />
		},
		grid: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				}
			],
			content: <GridDocs />
		},
		box: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				}
			],
			content: <BoxDocs />
		},
		avatar: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Variants',
					idAttr: 'variants'
				},
				{
					text: 'Badges',
					idAttr: 'badges'
				}
			],
			content: <AvatarDocs />
		},
		card: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				}
			],
			content: <CardDocs />
		},
		tag: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Variants',
					idAttr: 'variants'
				}
			],
			content: <TagDocs />
		},
		button: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Variants',
					idAttr: 'variants'
				}
			],
			content: <ButtonDocs />
		},
		input: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Placeholder styling',
					idAttr: 'placeholder'
				}
			],
			content: <InputDocs />
		},
		textarea: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Controlled Usage',
					idAttr: 'controlled-usage'
				}
			],
			content: <TextareaDocs />
		},
		hint: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				}
			],
			content: <HintDocs />
		},
		modal: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Centered Modal',
					idAttr: 'centered'
				}
			],
			content: <ModalDocs />
		},
		popover: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Direction',
					idAttr: 'direction'
				}
			],
			content: <PopoverDocs />
		},
		select: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Controlled Usage',
					idAttr: 'controlled-usage'
				},
				{
					text: 'Default selected option',
					idAttr: 'selected'
				}
			],
			content: <SelectDocs />
		},
		switch: {
			sidebarTitles: [
				{
					text: 'Import',
					idAttr: 'import'
				},
				{
					text: 'Usage',
					idAttr: 'usage'
				},
				{
					text: 'Sizes',
					idAttr: 'sizes'
				},
				{
					text: 'Controlled Usage',
					idAttr: 'controlled-usage'
				},
				{
					text: 'Changing active background color',
					idAttr: 'active-bg'
				}
			],
			content: <SwitchDocs />
		}
	}
}
