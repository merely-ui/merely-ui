'use client'

import { useColorMode } from '@merely-ui/react'
import { useMemo } from 'react'

function Logo() {
	const { colorMode } = useColorMode()
	const fill = useMemo(
		() => (colorMode === 'dark' ? 'white' : 'black'),
		[colorMode]
	)

	return (
		<svg
			width='122'
			height='36'
			viewBox='0 0 122 36'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				opacity='0.5'
				d='M28.9733 11.6533L18 18L7.02666 11.6533C7.25287 11.264 7.57396 10.9383 7.96 10.7066L16.6667 5.67996C17.4933 5.21329 18.5067 5.21329 19.3333 5.67996L28.04 10.7066C28.4267 10.9373 28.748 11.264 28.9733 11.6533Z'
				fill='#777777'
			/>
			<path
				opacity='0.5'
				d='M18 18V30.6667C17.5797 30.6656 17.165 30.5699 16.7867 30.3867L8 25.3067C7.59501 25.0728 7.25864 24.7366 7.02461 24.3318C6.79059 23.9269 6.66714 23.4676 6.66666 23V13C6.66887 12.5276 6.79286 12.0638 7.02666 11.6533L18 18Z'
				fill='#575757'
			/>
			<path
				d='M29.3333 13V23C29.3329 23.4676 29.2094 23.9269 28.9754 24.3318C28.7414 24.7366 28.405 25.0728 28 25.3067L19.1733 30.4C18.8067 30.5733 18.4053 30.664 18 30.6667V18L28.9733 11.6533C29.2067 12.064 29.3307 12.528 29.3333 13Z'
				fill='#A5A5A5'
			/>
			<path
				d='M45.2 26V14.096H48.392L48.848 15.68C49.12 15.232 49.568 14.8 50.192 14.384C50.816 13.968 51.568 13.76 52.448 13.76C53.392 13.76 54.144 13.928 54.704 14.264C55.28 14.6 55.704 15.096 55.976 15.752C56.44 15.096 57.024 14.6 57.728 14.264C58.448 13.928 59.224 13.76 60.056 13.76C61.576 13.76 62.624 14.192 63.2 15.056C63.776 15.904 64.064 17.136 64.064 18.752V26H60.416V19.664C60.416 19.104 60.384 18.592 60.32 18.128C60.256 17.664 60.096 17.296 59.84 17.024C59.584 16.736 59.16 16.592 58.568 16.592C57.832 16.592 57.296 16.856 56.96 17.384C56.624 17.896 56.456 18.672 56.456 19.712V26H52.784V19.664C52.784 19.104 52.752 18.592 52.688 18.128C52.64 17.664 52.488 17.296 52.232 17.024C51.992 16.736 51.584 16.592 51.008 16.592C50.256 16.592 49.704 16.864 49.352 17.408C49.016 17.952 48.848 18.744 48.848 19.784V26H45.2ZM72.1743 26.288C70.8943 26.288 69.7583 26.04 68.7663 25.544C67.7903 25.032 67.0223 24.304 66.4623 23.36C65.9183 22.416 65.6463 21.288 65.6463 19.976C65.6463 18.712 65.9343 17.616 66.5103 16.688C67.1023 15.76 67.8783 15.04 68.8383 14.528C69.8143 14.016 70.8783 13.76 72.0303 13.76C73.3423 13.76 74.4623 14.072 75.3903 14.696C76.3343 15.304 77.0463 16.152 77.5263 17.24C78.0063 18.312 78.2063 19.552 78.1263 20.96H69.3183C69.3823 21.792 69.6863 22.416 70.2303 22.832C70.7903 23.248 71.4063 23.456 72.0783 23.456C72.6383 23.456 73.1183 23.376 73.5183 23.216C73.9343 23.04 74.2543 22.824 74.4783 22.568L77.3823 23.624C76.7583 24.536 75.9743 25.208 75.0303 25.64C74.1023 26.072 73.1503 26.288 72.1743 26.288ZM69.3183 18.8H74.7423C74.7263 18.032 74.4623 17.456 73.9503 17.072C73.4383 16.672 72.8303 16.472 72.1263 16.472C71.4383 16.472 70.8223 16.656 70.2783 17.024C69.7503 17.392 69.4303 17.984 69.3183 18.8ZM79.8641 26V14.096H82.7441L83.3921 16.28C83.7601 15.32 84.2641 14.648 84.9041 14.264C85.5441 13.88 86.3201 13.712 87.2321 13.76V17.408C87.0401 17.376 86.8721 17.36 86.7281 17.36C86.5841 17.344 86.4241 17.336 86.2481 17.336C85.3681 17.336 84.6881 17.544 84.2081 17.96C83.7441 18.376 83.5121 19.056 83.5121 20V26H79.8641ZM94.6978 26.288C93.4178 26.288 92.2818 26.04 91.2898 25.544C90.3138 25.032 89.5458 24.304 88.9858 23.36C88.4418 22.416 88.1698 21.288 88.1698 19.976C88.1698 18.712 88.4578 17.616 89.0338 16.688C89.6258 15.76 90.4018 15.04 91.3618 14.528C92.3378 14.016 93.4018 13.76 94.5538 13.76C95.8658 13.76 96.9858 14.072 97.9138 14.696C98.8578 15.304 99.5698 16.152 100.05 17.24C100.53 18.312 100.73 19.552 100.65 20.96H91.8418C91.9058 21.792 92.2098 22.416 92.7538 22.832C93.3138 23.248 93.9298 23.456 94.6018 23.456C95.1618 23.456 95.6418 23.376 96.0418 23.216C96.4578 23.04 96.7778 22.824 97.0018 22.568L99.9058 23.624C99.2818 24.536 98.4978 25.208 97.5538 25.64C96.6258 26.072 95.6738 26.288 94.6978 26.288ZM91.8418 18.8H97.2658C97.2498 18.032 96.9858 17.456 96.4738 17.072C95.9618 16.672 95.3538 16.472 94.6497 16.472C93.9618 16.472 93.3458 16.656 92.8018 17.024C92.2738 17.392 91.9538 17.984 91.8418 18.8ZM106.324 26C105.348 26 104.572 25.92 103.996 25.76C103.42 25.584 103.004 25.256 102.748 24.776C102.508 24.28 102.388 23.568 102.388 22.64V9.968H106.036V21.68C106.036 22.24 106.148 22.608 106.372 22.784C106.596 22.944 107.012 23.024 107.62 23.024H108.652V26H106.324ZM110.294 29.864V27.224H111.014C111.558 27.224 111.966 27.2 112.238 27.152C112.51 27.104 112.718 26.984 112.862 26.792C113.022 26.616 113.166 26.328 113.294 25.928L108.734 14.096H112.646L114.974 21.536L117.254 14.096H121.166L116.606 26C116.222 27.008 115.83 27.792 115.43 28.352C115.046 28.912 114.55 29.304 113.942 29.528C113.334 29.752 112.51 29.864 111.47 29.864H110.294Z'
				fill={fill}
			/>
		</svg>
	)
}

export default Logo
