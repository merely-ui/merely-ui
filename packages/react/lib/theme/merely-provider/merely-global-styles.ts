export const merelyGlobalStyles = `
		:root {
			font-family: "Inter", sans-serif;
			font-optical-sizing: auto;
			fontWeight: 400;
			font-style: normal;
  		font-variation-settings:
    	"slnt" 0;
		}
		html.dark { 
		background-color: black;
		}
		html.light {
		background-color: white;
		}
		@media (prefers-reduced-motion: no-preference) {
			html {
			transition: background-color 150ms ease;
			}
		}
`

export const InterFontUrl = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');`
