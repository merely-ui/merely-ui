export const root = {
	// github
	getGithubLink: () => 'https://github.com/merely-ui/merely-ui',
	getOwnGithubLink: () => 'https://github.com/blinovvvvvv',

	getPlaygroundLink: () => '/playground',
	getV2ReleaseLink: () => '/release-v2',

	// tabs links
	getInstallationLink: () => '/docs/get-started/installation',
	getComponentsLink: () => '/docs/components/overview',
	getStylingLink: () => '/docs/styling/style-props',
	getThemingLink: () => '/docs/theming/theme-editing',

	getNextAppLink: () => '/docs/get-started/frameworks/next-app',
	getNextPagesLink: () => '/docs/get-started/frameworks/next-pages',
	getViteLink: () => '/docs/get-started/frameworks/vite',

	getColorModeLink: () => '/docs/styling/color-mode',

	getComponentDocLink: (slug: string) => `/docs/components/${slug}`
}
